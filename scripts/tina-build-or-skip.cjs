#!/usr/bin/env node
const { spawnSync } = require('child_process');

const hasClient = !!process.env.NEXT_PUBLIC_TINA_CLIENT_ID && !!process.env.TINA_TOKEN;

if (hasClient) {
  console.log('Tina credentials present — running `check-tina-config` then `tinacms build`');
  const check = spawnSync('node', ['scripts/check-tina-config.cjs'], { stdio: 'inherit' });
  if (check.status !== 0) {
    // If a FORCE_TINA_BUILD env var is set, proceed with a build that skips cloud checks so Tina can
    // re-index and update the remote schema. Use this as a temporary recovery mechanism only.
    if (process.env.FORCE_TINA_BUILD === '1') {
      console.warn('tina config check failed — but FORCE_TINA_BUILD=1 is set, proceeding with `tinacms build --skip-cloud-checks`');
      const tinacms = spawnSync('npx', ['tinacms', 'build', '--skip-cloud-checks'], { stdio: 'inherit' });
      if (tinacms.status !== 0) process.exit(tinacms.status);
    } else {
      // Instead of aborting the entire build, skip `tinacms build` so the static site can still deploy.
      // This allows the site to be published while the token or remote config is fixed; admin features
      // (remote editing / media manager) will remain disabled until credentials are corrected.
      console.warn('tina config check failed — skipping `tinacms build`. See message above for details.');
    }
  } else {
    // Run `npx tinacms build` with retries because Tina Cloud indexing can be asynchronous and
    // the remote schema may not reflect the latest commit immediately. Retry a few times
    // before failing the build. If the build still fails, allow an explicit FORCE_TINA_BUILD=1
    // to proceed with `--skip-cloud-checks` (temporary recovery mechanism).

    const maxAttempts = 5;
    const baseDelayMs = 5000; // 5s
    let attempt = 0;
    let succeeded = false;

    while (attempt < maxAttempts && !succeeded) {
      attempt += 1;
      console.log(`Attempt ${attempt}/${maxAttempts}: running 'npx tinacms build'`);
      const tinacms = spawnSync('npx', ['tinacms', 'build'], { stdio: 'pipe' });
      process.stdout.write(tinacms.stdout);
      process.stderr.write(tinacms.stderr);

      if (tinacms.status === 0) {
        succeeded = true;
        break;
      }

      const stderrStr = (tinacms.stderr || '').toString();
      const stdoutStr = (tinacms.stdout || '').toString();
      const combined = `${stdoutStr}\n${stderrStr}`;

      // Detect the Tina Schema mismatch error message and retry after a delay
      if (combined.includes('The local Tina schema doesn\'t match the remote Tina schema') || combined.includes('local Tina schema doesn\'t match')) {
        const delay = baseDelayMs * Math.pow(2, attempt - 1);
        console.warn(`Detected Tina schema mismatch; waiting ${delay / 1000}s before retrying...`);
        Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, delay);
        continue;
      }

      // For any other error, bail early and return the exit code.
      console.error('`npx tinacms build` failed with a non-retryable error.');
      process.exit(tinacms.status);
    }

    if (!succeeded) {
      if (process.env.FORCE_TINA_BUILD === '1') {
        console.warn('`npx tinacms build` failed after retries — proceeding with `npx tinacms build --skip-cloud-checks` due to FORCE_TINA_BUILD=1');
        const tinacmsSkip = spawnSync('npx', ['tinacms', 'build', '--skip-cloud-checks'], { stdio: 'inherit' });
        if (tinacmsSkip.status !== 0) process.exit(tinacmsSkip.status);
      } else {
        console.warn('`npx tinacms build` failed after retries — skipping Tina build so the site can still deploy.');
      }
    }
  }
} else {
  console.warn('TINA_TOKEN and/or NEXT_PUBLIC_TINA_CLIENT_ID not found — skipping `tinacms build`.');
  console.warn('If you need Tina Cloud features (remote editing, cloud media), set these env vars before running `npm run build`.');
}

console.log('Running `astro build`');
const astro = spawnSync('npx', ['astro', 'build'], { stdio: 'inherit' });
if (astro.status !== 0) process.exit(astro.status);

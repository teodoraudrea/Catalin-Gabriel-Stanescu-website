#!/usr/bin/env node
const { spawnSync } = require('child_process');

const hasClient = !!process.env.NEXT_PUBLIC_TINA_CLIENT_ID && !!process.env.TINA_TOKEN;

if (hasClient) {
  console.log('Tina credentials present — running `check-tina-config` then `tinacms build`');
  const check = spawnSync('node', ['scripts/check-tina-config.cjs'], { stdio: 'inherit' });
  if (check.status !== 0) {
    // Instead of aborting the entire build, skip `tinacms build` so the static site can still deploy.
    // This allows the site to be published while the token or remote config is fixed; admin features
    // (remote editing / media manager) will remain disabled until credentials are corrected.
    console.warn('tina config check failed — skipping `tinacms build`. See message above for details.');
  } else {
    const tinacms = spawnSync('npx', ['tinacms', 'build'], { stdio: 'inherit' });
    if (tinacms.status !== 0) process.exit(tinacms.status);
  }
} else {
  console.warn('TINA_TOKEN and/or NEXT_PUBLIC_TINA_CLIENT_ID not found — skipping `tinacms build`.');
  console.warn('If you need Tina Cloud features (remote editing, cloud media), set these env vars before running `npm run build`.');
}

console.log('Running `astro build`');
const astro = spawnSync('npx', ['astro', 'build'], { stdio: 'inherit' });
if (astro.status !== 0) process.exit(astro.status);

#!/usr/bin/env node
const { spawnSync } = require('child_process');

const hasClient = !!process.env.NEXT_PUBLIC_TINA_CLIENT_ID && !!process.env.TINA_TOKEN;

if (hasClient) {
  console.log('Tina credentials present — running `check-tina-config` then `tinacms build`');
  const check = spawnSync('node', ['scripts/check-tina-config.cjs'], { stdio: 'inherit' });
  if (check.status !== 0) {
    console.error('tina config check failed — aborting build. See message above for details.');
    process.exit(check.status);
  }

  const tinacms = spawnSync('npx', ['tinacms', 'build'], { stdio: 'inherit' });
  if (tinacms.status !== 0) process.exit(tinacms.status);
} else {
  console.warn('TINA_TOKEN and/or NEXT_PUBLIC_TINA_CLIENT_ID not found — skipping `tinacms build`.');
  console.warn('If you need Tina Cloud features (remote editing, cloud media), set these env vars before running `npm run build`.');
}

console.log('Running `astro build`');
const astro = spawnSync('npx', ['astro', 'build'], { stdio: 'inherit' });
if (astro.status !== 0) process.exit(astro.status);

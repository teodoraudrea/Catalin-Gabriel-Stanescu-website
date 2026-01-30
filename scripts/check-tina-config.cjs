#!/usr/bin/env node
const fetch = globalThis.fetch;

function getBranch() {
  return (
    process.env.GITHUB_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    'main'
  );
}

async function run() {
  const clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
  const token = process.env.TINA_TOKEN;
  const branch = getBranch();
  const hasS3 = Boolean(
    process.env.AWS_ACCESS_KEY_ID &&
    process.env.AWS_SECRET_ACCESS_KEY &&
    process.env.S3_BUCKET &&
    process.env.AWS_REGION
  );

  if (!clientId && !hasS3) {
    console.log('No Tina Cloud credentials or S3 env vars detected — using local filesystem media.');
    console.log('This is valid for local-only setups. If you expect a remote Tina admin, set NEXT_PUBLIC_TINA_CLIENT_ID and TINA_TOKEN in your build environment.');
    return 0;
  }

  if (clientId && !token) {
    console.error('ERROR: NEXT_PUBLIC_TINA_CLIENT_ID is set but TINA_TOKEN is missing. This will cause `tinacms build` to fail.');
    console.error('Set the TINA_TOKEN env var in your CI (keep it secret).');
    return 2;
  }

  if (clientId && token) {
    const url = `https://content.tinajs.io/1.6/content/${clientId}/github/${branch}`;
    const query = `query CollectionsQuery { collections { name path } }`;

    console.log(`Checking Tina Cloud connectivity (clientId=${clientId}, branch=${branch})...`);
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
  'Content-Type': 'application/json',
  'X-API-KEY': token,
},

        body: JSON.stringify({ query }),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error('ERROR: Tina Cloud content API responded with HTTP', res.status);
        console.error('Response:', text.substring(0, 1000));
        return 3;
      }

      const json = await res.json();
      if (json.errors) {
        console.error('ERROR: GraphQL errors from Tina Cloud content API:');
        console.error(JSON.stringify(json.errors, null, 2));
        return 4;
      }

      const collections = (json.data && json.data.collections) || [];
      const names = collections.map((c) => c.name);
      console.log('Tina Cloud reachable — collections:', names.join(', '));

      if (!names.includes('blog')) {
        console.error('ERROR: `blog` collection not present in remote Tina schema — tinacms admin will not show blog editing.');
        return 5;
      }

      // We can't reliably detect the Media Store type via the public Content API, so we only confirm connectivity.
      console.log('Tina Cloud connectivity OK.');
      return 0;
    } catch (err) {
      console.error('ERROR: Failed to call Tina Cloud content API:', err.message);
      return 6;
    }
  }

  return 0;
}

run().then((code) => process.exit(code));
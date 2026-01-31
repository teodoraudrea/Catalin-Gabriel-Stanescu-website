// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var isTinaCloudConfigured = Boolean(process.env.NEXT_PUBLIC_TINA_CLIENT_ID && process.env.TINA_TOKEN);
if (!isTinaCloudConfigured) {
  console.warn("Warning: NEXT_PUBLIC_TINA_CLIENT_ID and/or TINA_TOKEN not set. Remote Tina Cloud features (remote edits, cloud media uploads) will be unavailable.");
} else {
  console.info(`Tina Cloud credentials found \u2014 enabling Tina Cloud features and media store. clientId=${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}`);
}
var hasS3 = Boolean(
  process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY && process.env.S3_BUCKET && process.env.AWS_REGION
);
var mediaConfig;
if (hasS3) {
  console.info(`Using S3 media store for bucket=${process.env.S3_BUCKET}`);
  mediaConfig = {
    s3: {
      bucket: process.env.S3_BUCKET,
      region: process.env.AWS_REGION,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      mediaRoot: "",
      publicFolder: "public"
    }
  };
} else if (isTinaCloudConfigured) {
  console.info("Using Tina Cloud media store (repo-backed by default)");
  mediaConfig = {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
      // `static: false` means Tina will manage media via the configured media store
      static: false
    }
    // Optional: Tina supports a `loadCustomStore` hook to return a custom media store implementation
    // Example placeholder (not required for built-in repo-based store):
    // loadCustomStore: async () => { /* return custom store */ },
  };
} else {
  console.info("Using local filesystem media store (public/)");
  mediaConfig = {
    local: {
      mediaRoot: "",
      publicFolder: "public"
    }
  };
}
var config_default = defineConfig({
  branch,
  // Get from tina.io (may be undefined in local dev)
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: mediaConfig,
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blog Posts",
        path: "src/content/blog",
        // Matches Astro's content structure
        format: "md",
        // Allows Markdown & MDX
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            description: "A short summary of the post, used in RSS feeds and previews"
          },
          {
            type: "datetime",
            name: "publishDate",
            label: "Publish Date",
            required: true,
            description: "The date the post was published"
          },
          {
            type: "object",
            name: "featureImage",
            label: "Feature Image",
            description: "The main image displayed for the blog post",
            fields: [
              {
                type: "image",
                name: "src",
                label: "Image Source",
                required: true
              },
              {
                type: "string",
                name: "alt",
                label: "Alt Text",
                description: "Accessibility text for the feature image"
              }
            ]
          },
          {
            type: "boolean",
            name: "isFeatured",
            label: "Featured Post",
            description: "Mark as a featured post for homepage highlights"
          },
          {
            type: "object",
            name: "seo",
            label: "SEO",
            description: "SEO metadata for search engines",
            fields: [
              {
                type: "object",
                name: "image",
                label: "SEO Image",
                description: "Image used for SEO previews (Open Graph, Twitter, etc.)",
                fields: [
                  {
                    type: "image",
                    name: "src",
                    label: "Image Source",
                    required: true
                  }
                ]
              }
            ]
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};

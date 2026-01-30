import { defineConfig } from "tinacms";

// Detect the correct Git branch from hosting environment
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

// Warn clearly if Tina Cloud credentials are missing — helpful for remote builds and media.
if (!process.env.NEXT_PUBLIC_TINA_CLIENT_ID || !process.env.TINA_TOKEN) {
  console.warn('Warning: NEXT_PUBLIC_TINA_CLIENT_ID and/or TINA_TOKEN not set. Remote Tina Cloud features (remote edits, cloud media uploads) will be unavailable.');
}

export default defineConfig({
  branch,

  // Get from tina.io (may be undefined in local dev)
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blog Posts",
        path: "src/content/blog", // Matches Astro's content structure
        format: "md", // Allows Markdown & MDX
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            description: "A short summary of the post, used in RSS feeds and previews",
          },
          {
            type: "datetime",
            name: "publishDate",
            label: "Publish Date",
            required: true,
            description: "The date the post was published",
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
                required: true,
              },
              {
                type: "string",
                name: "alt",
                label: "Alt Text",
                description: "Accessibility text for the feature image",
              },
            ],
          },
          {
            type: "boolean",
            name: "isFeatured",
            label: "Featured Post",
            description: "Mark as a featured post for homepage highlights",
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
                    required: true,
                  },
                ],
              },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "publications",
        label: "Publication Rows",
        path: "src/content/publications",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Row title",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            name: "publications",
            label: "Publications",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Title", required: true },
              { type: "string", name: "authors", label: "Authors" },
              { type: "string", name: "year", label: "Year" },
              { type: "string", name: "href", label: "URL" }
            ]
          },
          {
            type: "string",
            name: "moreHref",
            label: "More link",
            description: "URL to the 'all publications' page"
          }
        ]
      },
    ],
  },
});

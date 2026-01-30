# Copilot / AI Agent Instructions for this repository ✅

Purpose: help an AI coding agent be immediately productive in this Astro + Tina CMS personal website repository.

## Project at-a-glance 🔧
- Framework: Astro (see `astro.config.mjs`).
- Styling: Tailwind CSS (integration via `@astrojs/tailwind`, `tailwind.config.cjs`, and `src/styles/global.css`).
- Content: Astro Content Collections (configured in `src/content.config.ts`) and Tina CMS for editing (`tina/config.ts`).
- Content sources: primary source is `src/content/` (not the legacy top-level `content/` folder).
- Build & dev: `npm run dev` runs Tina + Astro dev server; `npm run build` runs Tina build then `astro build` (see `package.json`).

## Key workflows & commands ▶️
- Local development (CMS + site):
  - npm install
  - Set Tina env vars when necessary: `TINA_TOKEN` and `NEXT_PUBLIC_TINA_CLIENT_ID` for previewing CMS features.
  - npm run dev  # runs `npx tinacms dev -c "astro dev"`
- Production build:
  - npm run build  # runs `tinacms build && astro build`
  - npm run preview  # build + `astro preview`
- Formatting: repository uses Prettier + `prettier-plugin-tailwindcss`. Run `npx prettier --write .`.

## Content & data conventions (important!) 📄
- Content collections are defined in `src/content.config.ts`. Important collection names:
  - `blog` (loader: `src/content/blog`) and `pages` (loader: `src/content/pages`).
- Blog frontmatter schema (required/expected fields):
  - `title` (string, required)
  - `publishDate` (date, required)
  - Optional: `excerpt`, `updatedDate`, `featureImage` (object: `src`, `alt`, `caption`), `isFeatured` (boolean), `seo` (object)
- Examples:
  - Example post location: `src/content/blog/advantages-disadvantages-of-working-from-home.md`
  - Minimum frontmatter example:
    ```yaml
    ---
    title: "Post title"
    publishDate: 2025-01-30
    ---
    ```
- Featured posts: controlled by `isFeatured: true` frontmatter and used in `src/pages/index.astro`.
- Pagination: controlled via `siteConfig.postsPerPage` in `src/data/site-config.ts` and Astro `paginate` used in `src/pages/blog/[...page].astro`.

## Code-navigation & patterns to follow 🧭
- Layouts: `src/layouts/BaseLayout.astro` and `NoHeaderLayout.astro` wrap pages.
- Reusable UI: `src/components/` contains small components (e.g., `PostPreview.astro`, `FeaturedPostPreview.astro`, `Subscribe.astro`). Use these for consistent UI.
- Post rendering: `src/pages/blog/[id].astro` uses `render(post)` from `astro:content` to get the compiled `Content` component.
- Sorting: posts are sorted by date using `src/utils/post-utils.ts::sortPostsByDateDesc`.

## CMS specifics & deployment notes 🧾
- Tina CMS configuration in `tina/config.ts` expects content at `src/content/blog` and publishes admin UI into `public/admin` (see `build.outputFolder`).
- The app uses environment detection logic to pick `branch` from `GITHUB_BRANCH`, `VERCEL_GIT_COMMIT_REF`, or `HEAD`.
- MD and MDX are both supported (`@astrojs/mdx` integration present), so posts may be `.md` or `.mdx`.

## Quick tasks examples for an agent (be explicit) ✔️
- Add a blog post: create `src/content/blog/<slug>.md` with frontmatter above and include content in markdown/MDX.
- Mark a post as featured: add `isFeatured: true` to frontmatter; homepage will include it via `featuredPosts` filter in `src/pages/index.astro`.
- Add pagination: change `postsPerPage` in `src/data/site-config.ts` and verify `src/pages/blog/[...page].astro` navigation.
- Add a new site image: put in `public/` and reference via frontmatter `featureImage.src: "/my-image.jpg"`.
- Add publications preview rows: use `src/components/Publications.astro` and include it in an MDX page (example: `src/content/pages/publications.mdx`). Pass `rows` as an array of objects `{ title, publications: [{ title, authors?, year?, href? }], moreHref }`. The long list page is `src/content/pages/publications/all.mdx` and is linked from the row `moreHref`.

## Things an AI agent should NOT assume 🚫
- Do not edit the legacy top-level `content/` directory unless explicitly instructed; source of truth is `src/content/` (see `src/content.config.ts` and `tina/config.ts`).
- Do not change `astro.config.mjs` site URL (`site:`) without confirming with the repo owner.

## Where to look for bugs or context 🔎
- Content schema & constraints: `src/content.config.ts` (validations using `zod`).
- Tina admin behavior: `tina/config.ts` (env var requirements and build output).
- Styling/layout patterns: `src/components/*` and `src/layouts/*` (Tailwind classes and `prose` usage for content).

---
If anything here is unclear or you want additional snippets (frontmatter templates, component examples, or common PR tasks), tell me which area to expand and I’ll refine the guidance. 💡

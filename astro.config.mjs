import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://catalinstanescu.eu/',
    integrations: [
        mdx(),
        sitemap(),
        tailwind({
            // Disable injecting a basic `base.css` import on every page.
            applyBaseStyles: false
        })
    ]
});

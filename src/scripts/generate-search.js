import fs from 'fs/promises';
import path from 'path';
import { glob } from 'glob';
import matter from 'gray-matter';

async function generateIndex() {
  const files = await glob('src/content/blog/**/*.{md,mdx}');
  const docs = await Promise.all(
    files.map(async (file) => {
      const raw = await fs.readFile(file, 'utf-8');
      const { data, content } = matter(raw);
      return {
        id: file,
        title: data.title,
        excerpt: data.excerpt || '',
        url: `/blog/${path.basename(file, path.extname(file))}/`,
        body: content
      };
    })
  );
  await fs.mkdir('public/search', { recursive: true });
  await fs.writeFile('public/search/index.json', JSON.stringify(docs));
}

generateIndex();

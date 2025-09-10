import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const baseUrl = process.env.SITEMAP_BASE_URL || 'https://example.com';
const pages = [''];

const urls = pages
  .map((p) => `<url><loc>${baseUrl}${p}</loc></url>`)
  .join('');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>\n`;

writeFileSync(resolve(__dirname, '../public/sitemap.xml'), xml);

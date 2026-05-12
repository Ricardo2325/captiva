import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public', 'portfolio');

const projects = [
  { slug: 'aureum-dental',      url: 'https://clinica-1-three.vercel.app/' },
  { slug: 'fisioterapia-raices', url: 'https://clinica-2-nine.vercel.app/' },
  { slug: 'alex-moreno',         url: 'https://entrenador-personal-1.vercel.app/' },
  { slug: 'sara-jimenez',        url: 'https://entrenador-personal-2.vercel.app/' },
  { slug: 'vertex-real-estate',  url: 'https://inmobiliaria-1-ten.vercel.app/' },
  { slug: 'la-botanica',         url: 'https://labotanica-khaki.vercel.app/' },
];

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet',  width: 768,  height: 1024 },
  { name: 'mobile',  width: 390,  height: 844 },
];

async function main() {
  const browser = await chromium.launch();

  for (const project of projects) {
    const dir = join(publicDir, project.slug);
    mkdirSync(dir, { recursive: true });

    for (const vp of viewports) {
      const page = await browser.newPage();
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto(project.url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(1500);
      await page.screenshot({
        path: join(dir, `${vp.name}.jpg`),
        type: 'jpeg',
        quality: 90,
      });
      await page.close();
      console.log(`✓ ${project.slug}/${vp.name}.jpg`);
    }
  }

  await browser.close();
  console.log('\nDone! Screenshots saved to public/portfolio/');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

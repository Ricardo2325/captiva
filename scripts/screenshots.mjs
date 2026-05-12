import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public', 'portfolio');

// Standard projects: desktop (1440) + mobile (390) from the same URL
const standard = [
  { slug: 'aureum-dental',       url: 'https://clinica-1-three.vercel.app/' },
  { slug: 'fisioterapia-raices', url: 'https://clinica-2-nine.vercel.app/' },
  { slug: 'alex-moreno',         url: 'https://entrenador-personal-1.vercel.app/' },
  { slug: 'sara-jimenez',        url: 'https://entrenador-personal-2.vercel.app/' },
  { slug: 'vertex-real-estate',  url: 'https://inmobiliaria-1-ten.vercel.app/' },
];

// La Botánica: each device shows a different role
const botanica = {
  slug: 'la-botanica',
  shots: [
    { file: 'desktop.jpg', url: 'https://labotanica-khaki.vercel.app/admin',  viewport: { width: 1440, height: 900  } },
    { file: 'mobile.jpg',  url: 'https://labotanica-khaki.vercel.app/',       viewport: { width: 390,  height: 844  } },
    { file: 'tablet.jpg',  url: 'https://labotanica-khaki.vercel.app/staff',  viewport: { width: 768,  height: 1024 } },
  ],
};

async function shot(page, url, viewport, dest) {
  await page.setViewportSize(viewport);
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: dest, type: 'jpeg', quality: 90 });
}

async function main() {
  const browser = await chromium.launch();

  // Standard projects
  for (const project of standard) {
    const dir = join(publicDir, project.slug);
    mkdirSync(dir, { recursive: true });

    for (const [file, viewport] of [
      ['desktop.jpg', { width: 1440, height: 900 }],
      ['mobile.jpg',  { width: 390,  height: 844 }],
    ]) {
      const page = await browser.newPage();
      await shot(page, project.url, viewport, join(dir, file));
      await page.close();
      console.log(`✓ ${project.slug}/${file}`);
    }
  }

  // La Botánica — roles per device
  const botDir = join(publicDir, botanica.slug);
  mkdirSync(botDir, { recursive: true });

  for (const s of botanica.shots) {
    const page = await browser.newPage();
    await shot(page, s.url, s.viewport, join(botDir, s.file));
    await page.close();
    console.log(`✓ la-botanica/${s.file} (${s.url})`);
  }

  await browser.close();
  console.log('\nDone! Screenshots saved to public/portfolio/');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

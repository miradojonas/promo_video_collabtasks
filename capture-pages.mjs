// Capture script for Collab Task pages
// Based on video-shotcraft capture-template.mjs

import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const CONFIG = {
  BASE_URL: 'http://localhost:5173',
  OUTPUT_DIR: './public/textures',
  VIEWPORT: { width: 1920, height: 1080 },
  DEVICE_SCALE: 2,
};

const PAGES = [
  {
    name: 'dashboard',
    route: '/admin',
    description: 'Dashboard with statistics',
    waitFor: 3000,
  },
  {
    name: 'projects',
    route: '/admin/projects',
    description: 'Projects list page',
    waitFor: 2000,
  },
  {
    name: 'kanban',
    route: '/admin/projects/1',
    description: 'Kanban board detail',
    waitFor: 2500,
  },
  {
    name: 'messages',
    route: '/admin/messages',
    description: 'Messaging interface',
    waitFor: 2000,
  },
];

async function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function capturePage(browser, pageConfig) {
  const page = await browser.newPage({
    viewport: CONFIG.VIEWPORT,
    deviceScaleFactor: CONFIG.DEVICE_SCALE,
  });

  try {
    console.log(`📸 Capturing: ${pageConfig.name} (${pageConfig.route})`);

    // Navigate to page
    await page.goto(`${CONFIG.BASE_URL}${pageConfig.route}`, {
      waitUntil: 'networkidle',
      timeout: 30000,
    });

    // Wait for fonts and content
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(pageConfig.waitFor);

    // Take screenshot
    const outputPath = path.join(CONFIG.OUTPUT_DIR, `${pageConfig.name}.png`);
    await page.screenshot({
      path: outputPath,
      fullPage: false,
    });

    console.log(`✅ Saved: ${outputPath}`);

    // Get page height for layout calculation
    const pageHeight = await page.evaluate(() => document.body.scrollHeight);

    return {
      name: pageConfig.name,
      path: outputPath,
      width: CONFIG.VIEWPORT.width,
      height: CONFIG.VIEWPORT.height,
      pageHeight,
    };
  } catch (error) {
    console.error(`❌ Failed to capture ${pageConfig.name}:`, error.message);
    return null;
  } finally {
    await page.close();
  }
}

async function main() {
  console.log('🎬 Starting Collab Task page capture...\n');

  ensureDir(CONFIG.OUTPUT_DIR);

  const browser = await chromium.launch({
    headless: true,
  });

  const results = [];

  for (const pageConfig of PAGES) {
    const result = await capturePage(browser, pageConfig);
    if (result) {
      results.push(result);
    }
    // Small delay between captures
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  await browser.close();

  // Save layout metadata
  const layoutData = {
    capturedAt: new Date().toISOString(),
    viewport: CONFIG.VIEWPORT,
    deviceScale: CONFIG.DEVICE_SCALE,
    pages: results,
  };

  const layoutPath = path.join(CONFIG.OUTPUT_DIR, 'layout.json');
  fs.writeFileSync(layoutPath, JSON.stringify(layoutData, null, 2));

  console.log(`\n✨ Capture complete! ${results.length} pages saved.`);
  console.log(`📄 Layout metadata: ${layoutPath}`);
}

main().catch(console.error);

import { chromium } from 'playwright'
import { mkdir, writeFile } from 'node:fs/promises'

const browser = await chromium.launch({ headless: true })
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 })
const target = process.env.TARGET_URL || 'https://www.heyclicky.com/'
const prefix = process.env.SCREENSHOT_PREFIX || 'reference/screenshots'
await page.goto(target, { waitUntil: 'networkidle', timeout: 60000 })
await page.waitForTimeout(2500)
await mkdir(prefix, { recursive: true })
const sections = await page.locator('header, main > section, footer').evaluateAll((nodes) => nodes.map((node, index) => {
  const rect = node.getBoundingClientRect()
  return { index, tag: node.tagName.toLowerCase(), id: node.id || '', className: node.className || '', top: Math.round(rect.top + window.scrollY), height: Math.round(rect.height), text: (node.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 180) }
}))
await writeFile(`${prefix}/section-inventory.json`, JSON.stringify({ capturedAt: new Date().toISOString(), target, viewport: { width: 1440, height: 1000 }, sections }, null, 2))
for (const section of sections) {
  const locator = page.locator('header, main > section, footer').nth(section.index)
  const safeName = `${String(section.index + 1).padStart(2, '0')}-${section.id || section.tag}`.replace(/[^a-z0-9-]/gi, '-').toLowerCase()
  await locator.screenshot({ path: `${prefix}/${safeName}.png`, animations: 'disabled' })
}
await page.screenshot({ path: `${prefix}/00-full-page.png`, fullPage: true, animations: 'disabled' })
const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight)
let chunk = 0
for (let top = 0; top < pageHeight; top += 1000) {
  await page.evaluate((y) => window.scrollTo(0, y), top)
  await page.waitForTimeout(150)
  await page.screenshot({ path: `${prefix}/viewport-${String(chunk++).padStart(2, '0')}.png`, animations: 'disabled' })
}
await browser.close()
console.log(`Captured ${sections.length} sections.`)

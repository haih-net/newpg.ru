import assert from 'node:assert/strict'
import fs from 'node:fs'
import { chromium } from 'playwright'
const browser = await chromium.launch({
  executablePath: '/usr/bin/google-chrome',
  args: ['--no-sandbox', '--disable-crash-reporter'],
})
try {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
  const errors = [],
    missing = new Set(),
    dialogs = []
  page.on('pageerror', (e) => errors.push({ url: page.url(), stack: e.stack }))
  page.on('response', (r) => {
    if (r.status() >= 400) missing.add(r.url())
  })
  page.on('dialog', async (d) => {
    dialogs.push(d.message())
    await d.accept()
  })
  const records = JSON.parse(
    fs.readFileSync('app/Custom/Archive/documentation-snapshots.json', 'utf8'),
  )
  let examples = 0
  for (const [path, meta] of Object.entries(records)) {
    const response = await page.goto('http://localhost:3000' + path)
    assert.equal(response.status(), 200, path)
    assert.equal(await page.title(), meta.title)
    await page.waitForFunction(
      () => window.Ext && typeof window.prettyPrint === 'function',
    )
    const buttons = page.locator('#content input[type="button"]')
    for (let i = 0; i < (await buttons.count()); i++) {
      await buttons.nth(i).click()
      await page.locator('.x-window:visible').first().waitFor()
      if (path.endsWith('lesson5.html'))
        await page.waitForFunction(
          () => document.querySelectorAll('.x-grid3-row').length === 5,
        )
      if (path.endsWith('lesson2.html') && i === 1) {
        await page.locator('#email').fill('reader@example.com')
        await page.locator('#message').fill('Проверка примера')
        await page.locator('#message').press('Space')
        await page
          .getByRole('button', { name: 'Сохранить', exact: true })
          .click()
        await page.getByRole('button', { name: 'OK', exact: true }).click()
      }
      const close = page.locator('.x-window:visible .x-tool-close')
      if (!(path.endsWith('lesson2.html') && i === 1) && await close.count()) await close.first().click()
      await page.waitForFunction(
        () =>
          !Array.from(document.querySelectorAll('.x-window')).some(
            (el) =>
              el.getBoundingClientRect().width &&
              getComputedStyle(el).visibility !== 'hidden' &&
              getComputedStyle(el).display !== 'none',
          ),
      )

      examples++
    }
    await page.setViewportSize({ width: 390, height: 844 })
    assert.ok(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      'Ширина ' + path,
    )
    await page.setViewportSize({ width: 1280, height: 900 })
  }
  for (const n of [2, 3, 4, 5]) {
    await page.goto(
      'http://localhost:3000/documentation/extjs/extjs_lessons/lesson' +
        n +
        '.html',
    )
    await page.locator('#content input[type="button"]').first().click()
    await page.locator('.x-window:visible').first().waitFor()
    await page
      .locator('.left_block a[href="/about.html"]')
      .evaluate((e) => e.click())
    await page.waitForFunction(
      () => document.querySelectorAll('link[data-documentation]').length === 0,
    )
    assert.equal(await page.locator('.x-window:visible').count(), 0)
    assert.equal(await page.locator('.ext-el-mask:visible').count(), 0)
    await page.goBack()
    await page.locator('#content input[type="button"]').first().click()
    await page.locator('.x-window:visible').first().waitFor()
  }
  for (const path of ['/ExtJS/docs', '/ExtJS/examples']) {
    await page.goto('http://localhost:3000' + path)
    await page.waitForURL('**' + path + '/index.html')
    if (path.endsWith('docs')) await page.locator('.api-title').waitFor()
  }
  assert.deepEqual(errors, [])
  console.log(
    JSON.stringify(
      {
        pages: Object.keys(records).length,
        examples,
        dialogs: dialogs.length,
        errors,
        missing: [...missing],
      },
      null,
      2,
    ),
  )
  assert.deepEqual([...missing], [])
} finally {
  await browser.close()
}

/* eslint-disable */
import assert from 'node:assert/strict'
import { chromium } from 'playwright'

const browser = await chromium.launch({
  executablePath: '/usr/bin/google-chrome',
  args: ['--no-sandbox', '--disable-crash-reporter'],
})
try {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
  const errors = []
  const missing = new Set()
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('response', (response) => {
    if (response.status() >= 400) missing.add(response.url())
  })
  const path = '/documentation/extjs/extjs_lessons/lesson1.html'
  const response = await page.goto('http://localhost:3000' + path)
  assert.equal(response.status(), 200)
  assert.match(await response.text(), /Всякий учебник по программированию/)
  await page.waitForFunction(
    () => !document.querySelector('input[value="Hello, World!"]').disabled,
  )
  assert.equal(await page.evaluate(() => window.Ext.version), '3.0.3')
  const dialogs = []
  page.on('dialog', async (dialog) => {
    dialogs.push(dialog.message())
    await dialog.accept()
  })
  for (let index = 0; index < 5; index++) {
    await page.locator('input[value="Hello, World!"]').nth(index).click()
    const popup = page.locator('.x-window:visible')
    await popup.waitFor()
    assert.match(await popup.innerText(), /Hello, World!/)
    if (index >= 3)
      assert.equal(Math.round((await popup.boundingBox()).width), 300)
    if (index === 3)
      await page.screenshot({ path: 'test-results/lesson1-popup.png' })
    await popup.getByRole('button', { name: 'OK', exact: true }).click()
    await popup.waitFor({ state: 'hidden' })
  }
  assert.equal(dialogs[0], 'Была вызвана функция callback')
  assert.match(dialogs[1], /function/)
  await page.evaluate(() => {
    window.__lessonNavigation = true
  })
  await page.locator('.left_block a[href="/about.html"]').click()
  await page.waitForURL('**/about.html')
  assert.equal(await page.evaluate(() => window.__lessonNavigation), true)
  await page.waitForFunction(() =>
    document.querySelector('main h1')?.textContent?.includes('О компании'),
  )
  await page.waitForFunction(
    () => document.querySelectorAll('link[data-documentation]').length === 0,
  )
  assert.equal(await page.locator('.x-window:visible').count(), 0)
  assert.equal(await page.locator('.ext-el-mask:visible').count(), 0)
  await page.goBack()
  await page.waitForFunction(
    () =>
      document.querySelector('input[value="Hello, World!"]')?.disabled ===
      false,
  )
  await page.locator('input[value="Hello, World!"]').first().click()
  await page.locator('.x-window:visible').waitFor()
  await page.evaluate(() => window.Ext.Msg.hide())
  await page.setViewportSize({ width: 390, height: 844 })
  await page.reload()
  await page.waitForFunction(
    () => !document.querySelector('input[value="Hello, World!"]').disabled,
  )
  assert.equal(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
    true,
  )
  await page.locator('input[value="Hello, World!"]').nth(3).click()
  const box = await page.locator('.x-window:visible').boundingBox()
  assert.ok(box.x >= 0 && box.x + box.width <= 390)
  await page.screenshot({ path: 'test-results/lesson1-mobile.png' })
  assert.deepEqual(errors, [])
  console.log(
    JSON.stringify(
      {
        examples: 5,
        callbacks: dialogs.length,
        navigation: 'SPA и возврат проверены',
        mobile: 390,
        errors,
        missing: [...missing],
      },
      null,
      2,
    ),
  )
} finally {
  await browser.close()
}

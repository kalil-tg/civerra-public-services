import AxeBuilder from '@axe-core/playwright'
import { expect, test, type Page } from '@playwright/test'
import { readFile } from 'node:fs/promises'

const tags = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']
async function expectClean(page: Page) { const result = await new AxeBuilder({ page }).withTags(tags).analyze(); expect(result.violations, JSON.stringify(result.violations, null, 2)).toEqual([]) }

test('controlled legacy form preserves reproducible baseline defects', async ({ page }) => {
  const fixture = await readFile(new URL('../audit/fixtures/legacy-application.html', import.meta.url), 'utf8')
  await page.setContent(fixture)
  const ids = (await new AxeBuilder({ page }).withTags(tags).analyze()).violations.map(item => item.id)
  expect(ids).toEqual(expect.arrayContaining(['button-name', 'color-contrast', 'label', 'select-name']))
})

test('dashboard has a clean configured axe scan and opens the application', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Your services, in one clear place.' })).toBeVisible()
  await expectClean(page)
  await page.getByRole('button', { name: 'Continue application' }).click()
  await expect(page.getByRole('main')).toBeFocused()
})

test('validation summary receives focus and links to invalid fields', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Continue application' }).click()
  await page.getByRole('button', { name: /Save and continue/ }).click()
  const alert = page.getByRole('alert')
  await expect(alert).toBeFocused()
  await expect(alert).toContainText('Enter your annual household income')
  await expect(page.getByLabel('Annual household income')).toHaveAttribute('aria-invalid', 'true')
  await expectClean(page)
})

test('valid application reaches the review confirmation', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Continue application' }).click()
  await page.getByLabel('Annual household income').fill('28500')
  await page.getByLabel('Income type').selectOption({ label: 'Employment' })
  await page.getByRole('button', { name: /Save and continue/ }).click()
  await expect(page.getByRole('main')).toBeFocused()
  await expectClean(page)
})

test('skip link is first and mobile form has no horizontal overflow', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: 'Skip to main content' })).toBeFocused()
  await page.getByRole('button', { name: 'Continue application' }).click()
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)
  expect(overflow).toBe(false)
  await expectClean(page)
})

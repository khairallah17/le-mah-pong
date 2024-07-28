import { test, expect } from '@playwright/test'

test.describe('home page', () => {
    test('should have exact content and metadata', async ({ page }) => {
        await page.goto('/')
        await expect(page).toHaveTitle('mah-pong')
    })
})

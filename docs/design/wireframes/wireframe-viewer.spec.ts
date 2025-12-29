import { test, expect } from '@playwright/test';
import * as path from 'path';

// Synced with index.html wireframes array - keep in sync!
const wireframes = [
  { path: '00-brand-identity/animated-logo.svg', title: 'Animated Logo' },
  { path: '01-public-landing/landing-hero.svg', title: 'Landing Hero' },
  { path: '01-public-landing/landing-features.svg', title: 'Features' },
  { path: '01-public-landing/public-blog.svg', title: 'Public Blog' },
  { path: '02-user-authentication/sign-in.svg', title: 'Sign In' },
  { path: '02-user-authentication/sign-up.svg', title: 'Sign Up' },
  { path: '02-user-authentication/email-verification.svg', title: 'Email Verification' },
  { path: '02-user-authentication/password-reset.svg', title: 'Password Reset' },
  { path: '03-user-profile/account-settings.svg', title: 'Account Settings' },
  { path: '03-user-profile/avatar-upload.svg', title: 'Avatar Upload' },
  { path: '03-user-profile/avatar-states.svg', title: 'Avatar States' },
  { path: '04-user-messaging/conversation-list.svg', title: 'Conversation List' },
  { path: '04-user-messaging/chat-window.svg', title: 'Chat Window' },
  { path: '04-user-messaging/connection-management.svg', title: 'Connections' },
  { path: '04-user-messaging/message-actions.svg', title: 'Message Actions' },
  { path: '05-blog-content/blog-editor.svg', title: 'Blog Editor' },
  { path: '05-blog-content/blog-post-view.svg', title: 'Blog Post View' },
  { path: '05-blog-content/content-dashboard.svg', title: 'Content Dashboard' },
  { path: '06-payments/pricing-plans.svg', title: 'Pricing Plans' },
  { path: '06-payments/checkout-flow.svg', title: 'Checkout Flow' },
  { path: '06-payments/billing-history.svg', title: 'Billing History' },
  { path: '07-pwa-offline/offline-mode.svg', title: 'Offline Mode' },
  { path: '07-pwa-offline/sync-status.svg', title: 'Sync Status' },
  { path: '07-pwa-offline/install-prompt.svg', title: 'Install Prompt' },
  { path: '08-calendar/calendar-view.svg', title: 'Calendar View' },
  { path: '08-calendar/event-create.svg', title: 'Event Booking' },
  { path: '08-calendar/event-notifications.svg', title: 'Event Notifications' },
  { path: '09-maps/location-picker.svg', title: 'Location Picker' },
  { path: '09-maps/nearby-search.svg', title: 'Nearby Search' },
  { path: '09-maps/directions.svg', title: 'Directions' },
  { path: '10-accessibility/wcag-compliance.svg', title: 'WCAG Compliance' },
  { path: '10-accessibility/colorblind-mode.svg', title: 'Colorblind Mode' },
  { path: '10-accessibility/font-switcher.svg', title: 'Font Switcher' },
  { path: '11-analytics-privacy/cookie-consent.svg', title: 'Cookie Consent' },
  { path: '11-analytics-privacy/google-analytics.svg', title: 'Google Analytics' },
  { path: '12-integrations/web3forms.svg', title: 'Web3Forms' },
  { path: '12-integrations/emailjs.svg', title: 'EmailJS Failover' }
];

test.describe('Wireframe Viewer', () => {
  let consoleErrors: string[] = [];

  test.beforeEach(async ({ page }) => {
    consoleErrors = [];

    // Capture console errors
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    // Navigate to viewer
    const indexPath = path.resolve(__dirname, 'index.html');
    await page.goto(`file://${indexPath}`);
  });

  test('loads without console errors', async ({ page }) => {
    // Wait for viewer to load
    await page.waitForSelector('#viewer');
    await page.waitForTimeout(500);

    // Check no errors
    expect(consoleErrors).toHaveLength(0);
  });

  test('displays correct initial state', async ({ page }) => {
    // Check title - index.html starts at index 1 (Landing Hero)
    await expect(page.locator('#current-info .title')).toHaveText('Landing Hero');
    await expect(page.locator('#current-info .counter')).toHaveText('2 / 37');

    // Previous should be enabled (not at first wireframe)
    await expect(page.locator('#prev')).toBeEnabled();

    // Next should be enabled
    await expect(page.locator('#next')).toBeEnabled();
  });

  test('next button navigates forward', async ({ page }) => {
    const nextBtn = page.locator('#next');

    // Click next (from Landing Hero to Features)
    await nextBtn.click();

    // Should show third wireframe (Features)
    await expect(page.locator('#current-info .title')).toHaveText('Features');
    await expect(page.locator('#current-info .counter')).toHaveText('3 / 37');

    // Previous should be enabled
    await expect(page.locator('#prev')).toBeEnabled();
  });

  test('previous button navigates backward', async ({ page }) => {
    // Start at Landing Hero (index 1), navigate forward
    await page.locator('#next').click();
    await expect(page.locator('#current-info .counter')).toHaveText('3 / 37');

    // Then navigate back
    await page.locator('#prev').click();
    await expect(page.locator('#current-info .counter')).toHaveText('2 / 37');
    await expect(page.locator('#current-info .title')).toHaveText('Landing Hero');
  });

  test('sidebar links navigate to correct wireframes', async ({ page }) => {
    // Click a specific sidebar link (Checkout Flow is index 20)
    await page.click('a[data-svg="06-payments/checkout-flow.svg"]');

    // Should update to that wireframe
    await expect(page.locator('#current-info .title')).toHaveText('Checkout Flow');
    await expect(page.locator('#current-info .counter')).toHaveText('20 / 37');

    // Link should be active
    await expect(
      page.locator('a[data-svg="06-payments/checkout-flow.svg"]')
    ).toHaveClass(/active/);
  });

  test('keyboard navigation works', async ({ page }) => {
    // Starts at Landing Hero (index 1), press right arrow
    await page.keyboard.press('ArrowRight');
    await expect(page.locator('#current-info .counter')).toHaveText('3 / 37');

    // Press left arrow
    await page.keyboard.press('ArrowLeft');
    await expect(page.locator('#current-info .counter')).toHaveText('2 / 37');
  });

  test('last wireframe disables next button', async ({ page }) => {
    // Navigate to last wireframe via sidebar (EmailJS Failover is last)
    await page.click('a[data-svg="12-integrations/emailjs.svg"]');

    // Next should be disabled
    await expect(page.locator('#next')).toBeDisabled();

    // Previous should be enabled
    await expect(page.locator('#prev')).toBeEnabled();
  });
});

test.describe('Wireframe Screenshots', () => {
  test('captures all wireframes for visual review', async ({ page }) => {
    const indexPath = path.resolve(__dirname, 'index.html');
    await page.goto(`file://${indexPath}`);

    for (let i = 0; i < wireframes.length; i++) {
      const wf = wireframes[i];

      // Navigate via sidebar
      await page.click(`a[data-svg="${wf.path}"]`);

      // Wait for SVG to load
      await page.waitForTimeout(300);

      // Take screenshot
      const safeName = wf.path.replace(/\//g, '-').replace('.svg', '');
      await page.screenshot({
        path: `./screenshots/${safeName}.png`,
        fullPage: false,
      });
    }
  });
});

test.describe('SVG XML Validation', () => {
  test('all SVGs load without XML parsing errors', async ({ page }) => {
    const errors: string[] = [];

    // Listen for errors
    page.on('console', (msg) => {
      if (msg.type() === 'error' && msg.text().includes('XML')) {
        errors.push(msg.text());
      }
    });

    const indexPath = path.resolve(__dirname, 'index.html');
    await page.goto(`file://${indexPath}`);

    // Navigate through all wireframes
    for (let i = 0; i < wireframes.length; i++) {
      const wf = wireframes[i];
      await page.click(`a[data-svg="${wf.path}"]`);
      await page.waitForTimeout(200);
    }

    // No XML errors should have occurred
    expect(errors).toHaveLength(0);
  });
});

# UX Feedback - Wireframe Utility Icons

## Current Work

Adding 4 utility icons to wireframe SVG headers:
1. **Install App** (download arrow)
2. **Settings** (sliders)
3. **Accessibility** (eye icon)
4. **Font/Document** (document icon)

### Icon Specifications
- Size: 14px icons
- Spacing: 20px between icons
- Total width: ~80px for all 4 icons
- Stroke: `#94a3b8`, stroke-width `1.2`
- Position: RIGHT side of headers, before action buttons

## Issues Resolved

### Chat Window (chat-window.svg)
**Problem**: Utility icons overlapped with "Encrypted" lock icon
**Solution**:
- Moved icons to `translate(320, 73)` (x=320-394)
- Simplified Encrypted to just lock emoji at x=590
- Gap: ~180px separation

**Status**: ✅ RESOLVED

### Account Settings (account-settings.svg)
**Problem**: Utility icons overlapped with "Save Changes" text
**Solution**:
- Moved icons to `translate(500, 98)` (x=500-574)
- Converted text to button at x=650-740
- Gap: ~75px separation

**Status**: ✅ RESOLVED

### Blog Editor (blog-editor.svg)
**Problem**: Utility icons overlapped with status indicators
**Solution**:
- Kept both Saved and Online indicators at `translate(530, 60)`
- Saved: dot at x=538, text at x=548
- Online: dot at x=588, text at x=598 (yellow #facc15)
- Moved icons to `translate(650, 68)` (x=650-724)
- Gap: ~20px to status, ~35px to Draft button

**Status**: ✅ RESOLVED

### Content Dashboard (content-dashboard.svg)
**Problem**: Icons at x=490 too close to New Post button at x=580
**Solution**: Moved icons to `translate(420, 37)` (x=420-494)
- Gap: ~85px to New Post button

**Status**: ✅ RESOLVED

### Billing History (billing-history.svg)
**Problem**: Icons at x=420 overlapped with Tabs (x=300-480)
**Solution**: Moved icons to `translate(500, 37)` (x=500-574)
- Gap: ~20px from Tabs, ~16px to Export button

**Status**: ✅ RESOLVED

## Files Modified
- `04-user-messaging/chat-window.svg` ✅
- `03-user-profile/account-settings.svg` ✅
- `05-blog-content/blog-editor.svg` ✅
- `05-blog-content/content-dashboard.svg` ✅
- `06-payments/billing-history.svg` ✅
- `01-public-landing/landing-hero.svg` (verified OK - 16px gap)
- `01-public-landing/public-blog.svg` (verified OK - 26px gap)
- `07-pwa-offline/offline-mode.svg` (verified OK - no adjacent elements)
- `08-calendar/calendar-view.svg` (verified OK - 16px gap)

## Verification
All wireframes verified for proper icon positioning with adequate gaps (16px minimum) between utility icons and adjacent UI elements.

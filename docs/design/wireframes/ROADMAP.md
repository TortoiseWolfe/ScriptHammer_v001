# Wireframe Roadmap: User Journey SVGs from Specs

This document tracks the wireframe generation progress following the user's journey through the application.

## Current Progress

| # | Section | Wireframes | Status |
|---|---------|------------|--------|
| 00 | Brand Identity | animated-logo | Done |
| 01 | Public Landing | landing-hero, features, public-blog | Done |
| 02 | User Authentication | sign-in, sign-up, email-verification, password-reset | Done |
| 03 | User Profile | account-settings, avatar-upload, avatar-states | Done |
| 04 | User Messaging | conversation-list, chat-window, connections, message-actions | Done |
| 05 | Blog & Content | blog-editor, blog-post-view, content-dashboard | Done |
| 06 | Payments | pricing-plans, checkout-flow, billing-history | Done |
| 07 | PWA & Offline | offline-mode, sync-status, install-prompt | Done |
| 08 | Calendar | calendar-view, event-create, event-notifications | Pending |
| 09 | Maps & Location | location-picker, nearby-search, directions | Pending |

## Section Details

### 01 - Public Landing (specs: 010, 011) ✅
- [x] landing-hero.svg - Hero section, value proposition, CTAs
- [x] features.svg - Feature grid with icons
- [x] public-blog.svg - Blog listing for visitors

### 05 - Blog & Content (specs: 050, 051, 052) ✅
- [x] blog-editor.svg - Rich text editor, markdown support
- [x] blog-post-view.svg - Single post with comments
- [x] content-dashboard.svg - User's published content

### 06 - Payments (spec: 060-payment-integration) ✅
- [x] pricing-plans.svg - Subscription tiers
- [x] checkout-flow.svg - Payment form, Stripe integration
- [x] billing-history.svg - Invoices, receipts

### 07 - PWA & Offline (spec: 070-pwa-background-sync) ✅
- [x] offline-mode.svg - Cached content, queue panel, storage indicator
- [x] sync-status.svg - Syncing, success, retry, failed states
- [x] install-prompt.svg - Desktop banner, mobile sheet, iOS instructions

### 08 - Calendar (spec: 080-calendar-integration)
- [ ] calendar-view.svg - Month/week/day views
- [ ] event-create.svg - New event form
- [ ] event-notifications.svg - Reminders

### 09 - Maps & Location (specs: 090, 091-enhanced-geolocation)
- [ ] location-picker.svg - Map with markers
- [ ] nearby-search.svg - Location-based results
- [ ] directions.svg - Route display

## Reference Locations

**Specs:** `/home/turtle_wolfe/repos/000_Mega_Plates/ScriptHammer_v_001/docs/specs/`

**Wireframes:** `/home/turtle_wolfe/repos/000_Mega_Plates/ScriptHammer/docs/design/wireframes/`

## Process for Each New Section

1. Create folder: `0X-section-name/`
2. Read corresponding spec.md for requirements
3. Generate SVGs using `/wireframe` command (dark theme)
4. Update `index.html` wireframes array + nav section
5. Update this ROADMAP.md to mark section as Done

## Spec Numbering Scheme

Specs are numbered to match user journey order:

| Range | Category | Examples |
|-------|----------|----------|
| 00X | Infrastructure | methodology, component-structure, testing, mobile-first, security |
| 01X | Public Landing | public-landing, public-blog-listing |
| 02X | Authentication | user-authentication, signup-e2e-tests |
| 03X | Profile | account-settings |
| 04X | Messaging | user-messaging-system, unified-messaging-sidebar |
| 05X | Blog/Content | blog-social-features, unified-blog-content, seo-editorial |
| 06X | Payments | payment-integration |
| 07X | PWA/Offline | pwa-background-sync |
| 08X | Calendar | calendar-integration |
| 09X | Maps/Location | geolocation-map, enhanced-geolocation |
| 10X | Accessibility | wcag-aa-compliance, colorblind-mode, font-switcher |
| 11X | Analytics/Privacy | cookie-consent, google-analytics |
| 12X | Integrations | web3forms, emailjs |

Bug fixes archived in `_fixes/`, planning specs in `_planning/`.

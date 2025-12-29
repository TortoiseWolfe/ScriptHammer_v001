# Feature Specifications

Extracted from ScriptHammer v1 for v2 wireframing.

## All Specifications (23 total)

```
/speckit.workflow specs/001-prp-methodology.md
```

```
/speckit.workflow specs/002-component-structure.md
```

```
/speckit.workflow specs/003-e2e-testing-framework.md
```

```
/speckit.workflow specs/004-mobile-first-design.md
```

```
/speckit.workflow specs/005-security-hardening.md
```

```
/speckit.workflow specs/020-user-authentication.md
```

```
/speckit.workflow specs/021-signup-e2e-tests.md
```

```
/speckit.workflow specs/030-account-settings.md
```

```
/speckit.workflow specs/040-user-messaging-system.md
```

```
/speckit.workflow specs/041-unified-messaging-sidebar.md
```

```
/speckit.workflow specs/050-blog-social-features.md
```

```
/speckit.workflow specs/051-unified-blog-content.md
```

```
/speckit.workflow specs/052-seo-editorial-assistant.md
```

```
/speckit.workflow specs/053-markdown-first-content.md
```

```
/speckit.workflow specs/060-payment-integration.md
```

```
/speckit.workflow specs/080-calendar-integration.md
```

```
/speckit.workflow specs/090-geolocation-map.md
```

```
/speckit.workflow specs/100-wcag-aa-compliance.md
```

```
/speckit.workflow specs/101-colorblind-mode.md
```

```
/speckit.workflow specs/102-font-switcher.md
```

```
/speckit.workflow specs/110-cookie-consent.md
```

```
/speckit.workflow specs/111-google-analytics.md
```

```
/speckit.workflow specs/120-web3forms-integration.md
```

---

## Wireframing Priority

### High Priority (Core Features)
Start wireframing these first - they define the core product experience.

| Spec | Feature | Data Model |
|------|---------|------------|
| 016-user-authentication | OAuth, sign-up/in flows, password reset | [view](artifacts/016-user-authentication/data-model.md) |
| 022-on-the-account | User profile, settings, GDPR export | [view](artifacts/022-on-the-account/data-model.md) |
| 023-user-messaging-system | Real-time encrypted messaging | [view](artifacts/023-user-messaging-system/data-model.md) |
| 007-cookie-consent | GDPR consent modal, preferences | [view](artifacts/007-cookie-consent/data-model.md) |
| 015-payment-integration | Stripe, PayPal, checkout flows | - |

### Medium Priority (Enhancement Features)
Wireframe after core features are defined.

| Spec | Feature |
|------|---------|
| 004-wcag-aa-compliance | Accessibility standards |
| 005-colorblind-mode | Color assistance toggles |
| 006-font-switcher | Font size adjustment |
| 014-geolocation-map | Leaflet map integration |
| 017-mobile-first-design | Responsive patterns |
| 019-blog-social-features | Social sharing, comments |
| 020-seo-editorial-assistant | SEO scoring, metadata |
| 021-unified-blog-content | Blog CMS, markdown |
| 022-markdown-first-content | Content authoring |
| 036-unified-messaging-sidebar | Sidebar navigation |
| 039-feature-038-ux | UX improvements |

### Low Priority (Bug Fixes / Internal)
Skip wireframing - these are implementation fixes from v1.

| Spec | Description |
|------|-------------|
| 017-fix-docker-next | Docker configuration |
| 024-add-third-test | Testing utilities |
| 025-fix-playwright-config | E2E config |
| 026-standardize-test-users | Test user setup |
| 027-signup-e2e-tests | E2E test coverage |
| 028-fix-auth-system | Auth bug fixes |
| 029-fix-conversations-page | UI fixes |
| 031-debug-message-decryption | Encryption fixes |
| 032-fix-e2e-encryption | E2E encryption tests |
| 033-fix-encryption-key | Key management |
| 034-fix-broken-user | User state fixes |
| 035-fix-profile-update | Profile bug fixes |
| 037-unified-messaging-sidebar | Duplicate of 036 |
| 041-fix-cross-nav-tests | Navigation tests |
| 042-fix-pwa-tests | PWA test fixes |

### Meta / Process (Skip Wireframes)
These define methodology, not UI features.

| Spec | Description |
|------|-------------|
| 001-prp-methodology | Product requirements process |
| 002-component-structure | Component architecture |
| 003-e2e-testing-framework | Testing framework |
| 008-google-analytics | Analytics setup |
| 009-web3forms-integration | Form provider |
| 013-calendar-integration | Calendar embed |
| 016-sprint-3-5 | Sprint planning |
| 017-security-hardening | Security practices |
| 040-feature-040-code | Code quality |

---

## Usage

Generate wireframes from any spec:

```bash
/wireframe specs/023-user-messaging-system.md
```

See `docs/design/wireframes/` for generated SVGs.

## Data Models

High-value specs have data models preserved in `artifacts/`:

```
specs/
├── *.md                 # Feature specifications
└── artifacts/
    ├── 007-cookie-consent/
    │   └── data-model.md
    ├── 016-user-authentication/
    │   └── data-model.md
    ├── 022-on-the-account/
    │   └── data-model.md
    └── 023-user-messaging-system/
        └── data-model.md
```

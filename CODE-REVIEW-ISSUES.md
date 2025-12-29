# Code Review Issues - ScriptHammer

**Date**: 2025-12-28
**Reviewed by**: Claude Code Review

## Summary

| Category | Found | Fixed | Remaining |
|----------|-------|-------|-----------|
| Security | 1 | 1 | 0 |
| Performance | 0 | 0 | 0 |
| Code Quality | 2 | 2 | 0 |
| Test Coverage | 1 | 1 | 0 |

## Project Context

ScriptHammer is a **spec-driven planning template** (FirstFrame) with minimal executable code:
- **Main code**: HTML wireframe viewer (`docs/design/wireframes/index.html`)
- **Tests**: Playwright tests (`wireframe-viewer.spec.ts`)
- **Next.js**: Boilerplate only (not yet customized)

---

## Phase 1: Security Audit

### Findings

| Issue | File:Line | Severity | Status |
|-------|-----------|----------|--------|
| Hardcoded GA ID | `index.html:26,31` | Medium | FIXED |

### Details

**Hardcoded Google Analytics ID (G-N342H6T3VS)** (FIXED)
- Location: `docs/design/wireframes/index.html:26`
- The GA ID was hardcoded in a static HTML file
- **Fix Applied**: Removed GA tracking from wireframe viewer
- **Rationale**: This is a development/planning tool, not a production site. Production apps should use `NEXT_PUBLIC_GA_MEASUREMENT_ID` from `.env`

### Not Applicable to This Codebase

The following security patterns were searched but not found (expected for a planning template):
- No XSS vectors (`dangerouslySetInnerHTML`, `innerHTML`, `v-html`)
- No SQL/NoSQL injection (no database queries)
- No authentication code
- No rate limiting needed (static files only)
- No secrets in code (`.env` is properly gitignored and contains only comments)

---

## Phase 2: Performance Analysis

### Findings

No performance issues found.

| Pattern | Found | Notes |
|---------|-------|-------|
| Large unmemoized components | 0 | N/A (no React components in viewer) |
| Expensive computations | 0 | Simple DOM manipulation only |
| Polling patterns | 0 | No `setInterval`/`setTimeout` loops |
| Duplicate event listeners | 0 | Clean event handling |

---

## Phase 3: Code Quality

### Fixed Issues

| Issue | File | Status |
|-------|------|--------|
| Test wireframes array out of sync | `wireframe-viewer.spec.ts` | FIXED |
| Broken npm script reference | `package.json` | FIXED |

### Details

**1. Test File Wireframes Array Out of Sync** (FIXED)
- The `wireframes` array in `wireframe-viewer.spec.ts` referenced 17 old wireframes that no longer exist
- The actual `index.html` has 37 wireframes with completely different paths
- **Fix Applied**: Synced the test file's wireframes array with `index.html`
- Updated all test assertions to use correct wireframe counts (37) and paths

**2. Broken npm Script Reference** (FIXED)
- `package.json` referenced `"svg-to-png": "tsx scripts/svg-to-png.ts"`
- The `scripts/svg-to-png.ts` file doesn't exist (functionality moved to Claude command)
- **Fix Applied**: Removed the broken script and unused `tsx` devDependency

### Not Issues

| Item | Location | Reason |
|------|----------|--------|
| Draft SVGs | `00-brand-identity/mallet-draft-*.svg` | Design variants |
| Preview SVGs at root | `wireframes/*.svg` | OG/social previews |

---

## Phase 4: Test Coverage

### Test Suite Status

| Metric | Value |
|--------|-------|
| Test Files | 1 (`wireframe-viewer.spec.ts`) |
| Test Cases | 9 |
| Test Status | Playwright deps need install |

### Notes

- Tests fail due to missing system libraries for Playwright in WSL environment
- Run `npx playwright install-deps` to install browser dependencies
- All test logic has been corrected to match current wireframes

### Untested Code

| Component | Coverage | Notes |
|-----------|----------|-------|
| Wireframe viewer | Playwright tests | Functional tests exist |
| Next.js app | No tests | Boilerplate only, not customized |

---

## Recommendations

### Immediate Actions (Completed)

1. **GA tracking removed**: Wireframe viewer is a dev tool, not production
2. **Test file sync**: Wireframes array synced with index.html
3. **Package.json cleanup**: Removed broken script reference

### Future Considerations

1. **Browser deps**: Run `npx playwright install-deps` on CI/local before tests
2. **Next.js tests**: Add tests if/when the Next.js app is customized

---

## Files Changed

```
docs/design/wireframes/index.html
  - Removed hardcoded Google Analytics tracking
  - Wireframe viewer is a dev tool, not production

docs/design/wireframes/wireframe-viewer.spec.ts
  - Synced wireframes array (17 → 37 wireframes)
  - Updated test assertions for correct paths and counts
  - Added sync comment for maintainability

docs/design/wireframes/package.json
  - Removed broken "svg-to-png" script
  - Removed unused "tsx" devDependency
```

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This is a **planning template** for projects using the SpecKit workflow. It contains:
- Feature specifications
- SVG wireframes with interactive viewer
- Project constitution template

## Commands

### Wireframe Viewer Development

```bash
cd docs/design/wireframes
npm install                      # Install dependencies
npm run dev                      # Start dev server with hot reload
npm test                         # Run Playwright tests
npx playwright install chromium  # Install browser (first time)
```

### SpecKit Workflow

```bash
/speckit.constitution   # Define project vision
/speckit.specify        # Create feature specs
/speckit.clarify        # Refine requirements
/wireframe              # Generate dark theme SVG wireframes
/wireframe-light        # Generate light theme SVG wireframes
/speckit.plan           # Design implementation
/speckit.checklist      # Generate implementation checklist
/speckit.tasks          # Generate task list
/speckit.analyze        # Review spec quality
/speckit.implement      # Execute implementation plan
```

## Wireframe Viewer Keyboard Shortcuts

- **Left/Right**: Previous/Next wireframe
- **Up/Down**: Zoom in/out
- **+/-**: Zoom in/out
- **0**: Reset zoom to 85%

## Generating Wireframes

Use `/wireframe` (dark theme) or `/wireframe-light` (light theme) to generate SVGs from specs:

1. Reads the spec to understand the feature
2. References `docs/design/wireframes/06-components/component-library.svg` for UI patterns
3. Creates SVG wireframes in `docs/design/wireframes/[feature-folder]/`
4. Updates `index.html` navigation (wireframes array + nav section)

### SVG Dark Theme Colors
- Background: gradient `#0f172a` to `#1e293b`
- Primary: `#8b5cf6` (violet)
- Accent: `#d946ef` (fuchsia)
- Panels: `#1e293b`, `#334155`
- Borders: `#475569`
- Text: `#fff` (headings), `#94a3b8`/`#cbd5e1` (body), `#64748b` (muted)

## Implementation Options

When ready to build:

**Option A**: Fork [ScriptHammer.com](https://scripthammer.com) - Next.js 15, React 19, Supabase, Tailwind

**Option B**: Stay in FirstFrame - use `/speckit.plan`, `/speckit.tasks`, `/speckit.implement`

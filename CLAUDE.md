# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

ScriptHammer is a **spec-driven planning template** (FirstFrame) for defining features before implementation. It produces:
- Feature specifications with user stories and acceptance criteria
- SVG wireframes that serve as semantic context for LLMs
- Project constitution defining vision and principles

The specs and wireframes created here feed into the production implementation at `ScriptHammer_v_001/`.

## Commands

### Wireframe Viewer

```bash
cd docs/design/wireframes
npm install                      # Install dependencies (first time)
npm run dev                      # Start viewer at localhost:3000
npm test                         # Run Playwright tests
npx playwright install chromium  # Install browser (first time)
```

### SpecKit Workflow

The full workflow for creating a feature:

```bash
/speckit.constitution   # 1. Define project vision (once per project)
/speckit.specify        # 2. Create feature spec from description
/speckit.clarify        # 3. Refine with clarifying questions
/wireframe              # 4. Generate dark theme SVG wireframes
/speckit.plan           # 5. Design implementation architecture
/speckit.tasks          # 6. Generate actionable task list
/speckit.implement      # 7. Execute implementation
```

Additional commands:
- `/wireframe-light` - Generate light theme wireframes
- `/speckit.checklist` - Generate implementation checklist
- `/speckit.analyze` - Review spec quality and consistency
- `/speckit.taskstoissues` - Convert tasks to GitHub issues

## Architecture

```
ScriptHammer/
├── specs/                      # Feature specifications (40+)
│   ├── [NNN]-[feature].md     # Numbered specs
│   └── artifacts/             # Data models for high-value specs
│       └── [NNN]-[feature]/data-model.md
├── docs/
│   ├── constitution-template.md
│   └── design/wireframes/     # SVG viewer + wireframes
│       ├── index.html         # Interactive viewer
│       ├── 00-brand-identity/
│       ├── 01-public-landing/
│       ├── 02-user-authentication/
│       └── 06-components/component-library.svg  # UI patterns
└── .specify/templates/        # SpecKit templates
```

## Spec Prioritization

Specs are categorized in `specs/README.md`:
- **High Priority**: Core features (016-auth, 022-profile, 023-messaging, 007-consent, 015-payments)
- **Medium Priority**: Enhancement features (accessibility, maps, blog, SEO)
- **Low Priority**: Bug fixes from v1 (skip wireframing)
- **Meta/Process**: Methodology specs (skip wireframing)

## Wireframe Generation

Use `/wireframe` or `/wireframe-light` to generate SVGs:

1. Reads the spec to understand the feature
2. References `docs/design/wireframes/06-components/component-library.svg` for UI patterns
3. Creates SVGs in `docs/design/wireframes/[feature-folder]/`
4. Updates `index.html` navigation (wireframes array + nav section)

### SVG Dark Theme Colors
- Background: gradient `#0f172a` to `#1e293b`
- Primary: `#8b5cf6` (violet)
- Accent: `#d946ef` (fuchsia)
- Panels: `#1e293b`, `#334155`
- Borders: `#475569`
- Text: `#fff` (headings), `#94a3b8`/`#cbd5e1` (body), `#64748b` (muted)

### Viewer Keyboard Shortcuts
- **Left/Right**: Previous/Next wireframe
- **Up/Down** or **+/-**: Zoom in/out
- **0**: Reset zoom to 85%

## Implementation Path

When ready to build from specs:

**Option A**: Fork [ScriptHammer.com](https://scripthammer.com) - Next.js 15, React 19, Supabase, Tailwind. Specs become implementation context.

**Option B**: Stay in FirstFrame - use `/speckit.plan`, `/speckit.tasks`, `/speckit.implement` to generate code here.

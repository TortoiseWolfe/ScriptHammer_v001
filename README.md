# ScriptHammer - Spec-Driven Planning Template

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/TortoiseWolfe/ScriptHammer)
[![Use Template](https://img.shields.io/badge/Use%20this%20template-2ea44f?style=for-the-badge)](https://github.com/TortoiseWolfe/ScriptHammer/generate)

A **FirstFrame** planning template for spec-driven development. Define features, generate wireframes, and plan implementations before writing production code.

## What This Is

ScriptHammer is a **planning template**, not production code. It produces:

- **Feature Specifications** - User stories, acceptance criteria, data models
- **SVG Wireframes** - Semantic visual context for LLMs
- **Project Constitution** - Vision and principles
- **Task Breakdowns** - Actionable implementation plans

The specs and wireframes created here feed into production implementations.

## Live Demo

- **Wireframe Viewer**: [https://tortoisewolfe.github.io/ScriptHammer/docs/design/wireframes/](https://tortoisewolfe.github.io/ScriptHammer/docs/design/wireframes/)

## Quick Start

### Wireframe Viewer

```bash
cd docs/design/wireframes
npm install                      # Install dependencies (first time)
npm run dev                      # Start viewer at localhost:3000
npm test                         # Run Playwright tests
npx playwright install chromium  # Install browser (first time)
```

**Keyboard Shortcuts**:
- **Left/Right**: Previous/Next wireframe
- **Up/Down** or **+/-**: Zoom in/out
- **0**: Reset zoom to 85%

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

## Repository Structure

```
ScriptHammer/
├── specs/                      # Feature specifications (40+)
│   ├── [NNN]-[feature].md     # Numbered specs
│   └── artifacts/             # Data models for high-value specs
├── docs/
│   ├── constitution.md        # Project principles
│   └── design/wireframes/     # SVG viewer + wireframes
│       ├── index.html         # Interactive viewer
│       └── 06-components/     # UI component library
└── .specify/templates/        # SpecKit templates
```

## GitHub Actions Secrets

Add these secrets to your repository at **Settings → Secrets and variables → Actions → Repository secrets**.

### Recommended for Wireframe Viewer

| Secret                          | Description                                              |
| ------------------------------- | -------------------------------------------------------- |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics ID for wireframe viewer (e.g., `G-XXX`) |

### Optional - Author & Site Configuration

These customize site appearance when specs become production code:

| Secret                         | Description                       |
| ------------------------------ | --------------------------------- |
| `NEXT_PUBLIC_AUTHOR_NAME`      | Your display name                 |
| `NEXT_PUBLIC_AUTHOR_EMAIL`     | Contact email                     |
| `NEXT_PUBLIC_AUTHOR_BIO`       | Short biography                   |
| `NEXT_PUBLIC_AUTHOR_ROLE`      | Job title/role                    |
| `NEXT_PUBLIC_AUTHOR_AVATAR`    | Avatar image URL                  |
| `NEXT_PUBLIC_AUTHOR_GITHUB`    | GitHub username                   |
| `NEXT_PUBLIC_AUTHOR_LINKEDIN`  | LinkedIn profile URL              |
| `NEXT_PUBLIC_AUTHOR_TWITTER`   | Twitter/X handle                  |
| `NEXT_PUBLIC_SITE_URL`         | Production site URL               |

### Optional - Integrations

| Secret                          | Description                         |
| ------------------------------- | ----------------------------------- |
| `NEXT_PUBLIC_CALENDAR_PROVIDER` | Calendar service (e.g., `calendly`) |
| `NEXT_PUBLIC_CALENDAR_URL`      | Calendar booking URL                |
| `NEXT_PUBLIC_DISQUS_SHORTNAME`  | Disqus comments integration         |

### Optional - Supabase (for production implementation)

| Secret                          | Description                                                    |
| ------------------------------- | -------------------------------------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`      | Your Supabase project URL (e.g., `https://abc123.supabase.co`) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous/public key                             |
| `SUPABASE_SERVICE_ROLE_KEY`     | Service role key for admin operations                          |

## GitHub Personal Access Token (For Claude Code & SpecKit)

Claude Code and SpecKit use a GitHub token for **API access only** (reading issues, creating issues).
Git pushes use **SSH authentication** - keeping you in control of what gets committed.

### Creating Your Token

1. Go to **[GitHub Token Settings](https://github.com/settings/personal-access-tokens/new)** (fine-grained tokens)

2. Configure the token:
   - **Token name**: `ScriptHammer` or `Claude Code`
   - **Expiration**: 90 days recommended
   - **Repository access**: Select "Only select repositories" → choose your repository

3. Grant these permissions:

   | Permission    | Access        | Used For                         |
   | ------------- | ------------- | -------------------------------- |
   | Contents      | **Read-only** | Reading files, checking status   |
   | Issues        | Read & Write  | `/speckit.taskstoissues` command |
   | Pull requests | **Read-only** | Viewing PR status                |
   | Actions       | **Read-only** | Checking CI status               |
   | Secrets       | Read & Write  | Creating repository secrets      |

4. Click **Generate token** and copy it immediately (shown only once)

### Setup

Add to your `.env` file:

```bash
GITHUB_TOKEN=github_pat_your_token_here
```

**Git pushes use SSH** (your existing SSH key):

```bash
# Verify SSH is configured
ssh -T git@github.com
# Should show: Hi USERNAME! You've successfully authenticated...
```

### Why SSH + Limited Token?

- **You control commits** - AI can't push without your SSH key
- **API access only** - Token reads issues, creates issues, checks CI
- **No accidental pushes** - All pushes require explicit user action

## Forking This Template

### Quick Setup

```bash
# 1. Use this template on GitHub
# Click "Use this template" button above

# 2. Clone your new repository
git clone https://github.com/YOUR_USERNAME/YOUR_PROJECT_NAME.git
cd YOUR_PROJECT_NAME

# 3. Create environment file
cp .env.example .env
# Edit .env with your GitHub token

# 4. Start the wireframe viewer
cd docs/design/wireframes
npm install
npm run dev
```

### Creating Your First Spec

```bash
# Use Claude Code with SpecKit
/speckit.specify "User authentication with email/password and OAuth"
```

This creates a spec in `specs/` and optionally generates wireframes.

## Documentation

- **Developer Guide**: See [CLAUDE.md](./CLAUDE.md) for Claude Code guidance
- **Spec Priorities**: See [specs/README.md](./specs/README.md) for spec organization
- **Constitution**: See [docs/constitution.md](./docs/constitution.md) for project principles

## License

MIT - See [LICENSE](./LICENSE) for details

---

**For Template Users**: Start with `/speckit.constitution` to define your project's vision, then use `/speckit.specify` to create your first feature spec.

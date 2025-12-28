---
description: Generate SVG wireframes (light theme) from a spec and add them to the interactive viewer.
---

## User Input

```text
$ARGUMENTS
```

## Outline

Generate light-themed SVG wireframes from a feature specification and add them to the FirstFrame wireframe viewer.

### 1. Identify the Spec

If `$ARGUMENTS` is provided, use it as the spec file path. Otherwise:

```bash
ls specs/*.md
```

Ask the user which spec to use if multiple exist, or use the only one if there's just one.

### 2. Read the Spec

Read the spec file to understand:
- Feature name and purpose
- User stories and acceptance criteria
- UI requirements and interactions
- Any mentioned screens, forms, lists, or components

### 3. Plan the Wireframes

Based on the spec, determine which wireframes are needed:
- List views (showing multiple items)
- Detail views (showing single item)
- Forms (create/edit)
- Special states (empty, loading, error)

Present the plan to the user for approval before generating.

### 4. Generate SVG Wireframes

Create SVG wireframes following the light theme patterns.

**File location**: `docs/design/wireframes/[feature-folder]/`

**Light Theme SVG Structure**:
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <style>
      .bg { fill: #f0f4f8; }
      .fill-white { fill: #ffffff; stroke: #374151; stroke-width: 1; }
      .fill-dark { fill: #1f2937; }
      .annotation { fill: #8b5cf6; font-family: monospace; font-size: 10px; }
      .annotation-box { fill: #ffffff; stroke: #8b5cf6; stroke-width: 2; }
      .heading { fill: #1f2937; font-family: system-ui, sans-serif; font-size: 14px; font-weight: bold; }
      .text-sm { fill: #6b7280; font-family: system-ui, sans-serif; font-size: 10px; }
      .text-md { fill: #374151; font-family: system-ui, sans-serif; font-size: 12px; }
      .primary { fill: #8b5cf6; }
    </style>
  </defs>
  <!-- Background -->
  <rect class="bg" width="1200" height="800"/>
  <!-- Title -->
  <text x="600" y="25" text-anchor="middle" class="annotation" font-size="14" font-weight="bold">WIREFRAME TITLE</text>
  <!-- Content here -->
</svg>
```

**Light Theme Color Palette**:
- Background: `#f0f4f8`
- Primary: `#8b5cf6` (violet)
- Accent: `#d946ef` (fuchsia)
- Panels: `#ffffff` with `#374151` borders
- Text: `#1f2937` (headings), `#374151` (body), `#6b7280` (muted)
- Success: `#22c55e`, Warning: `#eab308`, Error: `#ef4444`

**Design Guidelines**:
- Include annotation boxes to explain UI elements
- Show realistic placeholder data (not "Lorem ipsum")
- Follow patterns from `docs/design/wireframes/06-components/component-library.svg` (adapt colors for light theme)

### 5. Update the Wireframe Viewer

After creating the SVG files, update `docs/design/wireframes/index.html`:

**a. Add to the wireframes array** (in the `<script>` section):
```javascript
const wireframes = [
  // ... existing wireframes
  { path: '[feature-folder]/[filename].svg', title: '[Wireframe Title]' },
];
```

**b. Add navigation section** (in the `<nav>` element):
```html
<div class="nav-section">
  <h2>[Feature Number] - [Feature Name]</h2>
  <div class="nav-links">
    <a href="#" data-svg="[feature-folder]/[filename].svg">
      [Wireframe Title]
      <span class="path">[Brief description]</span>
    </a>
  </div>
</div>
```

### 6. Verify

After updating:
1. List the created SVG files
2. Show the updated wireframes array
3. Confirm the nav section was added
4. Remind user to view at: `docs/design/wireframes/index.html`

## Example

For a spec about "User Profile" feature:

1. Create folder: `docs/design/wireframes/user-profile/`
2. Generate:
   - `profile-view.svg` - View profile page
   - `profile-edit.svg` - Edit profile form
3. Update index.html with nav section and wireframes array entries

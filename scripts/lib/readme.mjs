export function generateReadme() {

    const generated = new Date().toLocaleString();
  
  
    return `# Project Documentation
  
  This folder contains automatically generated documentation for the Astro oncology website project.
  
  The documentation describes the project's structure, architecture, pages, components, dependencies, and usage patterns.
  
  ---
  
  # Quick Start
  
  To regenerate all documentation:
  
  \`\`\`bash
  npm run docs
  \`\`\`
  
  ---
  
  # Documentation Index
  
  ## 🗺 Site Structure
  
  ### Site Map
  
  A high-level overview of all website pages organized by section.
  
  [Open Site Map](site-map.md)
  
  ---
  
  ## 🏗 Architecture
  
  ### Dependency Graph
  
  Visual representation of relationships between pages, components, layouts, and data files.
  
  [Open Dependency Graph](dependency-graph.md)
  
  ---
  
  ## 📄 Pages
  
  ### Page Documentation
  
  Detailed documentation for every page.
  
  Includes:
  
  - File location
  - Components used
  - Dependencies
  - Parent relationships
  
  [Open Page Documentation](page-documentation.md)
  
  Individual page documentation:
  
  \`\`\`
  pages/
  \`\`\`
  
  ---
  
  ## 🧩 Components
  
  ### Component Documentation
  
  Catalog of reusable Astro components.
  
  [Open Component Documentation](component-documentation.md)
  
  ---
  
  ### Component Usage
  
  Analysis of component reuse across the project.
  
  Useful for:
  
  - Understanding architecture
  - Identifying core components
  - Refactoring decisions
  
  [Open Component Usage](component-usage.md)
  
  ---
  
  ## 📊 Statistics
  
  ### Project Statistics
  
  Overview of project size and complexity.
  
  Includes:
  
  - Pages
  - Components
  - Layouts
  - Data usage
  - Reuse statistics
  
  [Open Statistics](statistics.md)
  
  ---
  
  # Project Architecture Overview
  
  \`\`\`
  src/
  │
  ├── pages/        → Website routes
  ├── components/   → Reusable UI components
  ├── layouts/      → Page templates
  ├── data/         → Structured content
  ├── lib/          → Utility functions
  └── assets/       → Images and resources
  \`\`\`
  
  ---
  
  # Documentation Workflow
  
  After architectural changes:
  
  1. Update source code.
  2. Run:
  
  \`\`\`bash
  npm run docs
  \`\`\`
  
  3. Review generated documentation.
  
  ---
  
  Generated automatically from:
  
  \`\`\`
  scripts/generate-project-docs.mjs
  \`\`\`
  
  Last generated:
  
  ${generated}
  `;
  }
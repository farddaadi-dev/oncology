import fs from "node:fs";
import path from "node:path";

const docsDir = path.join(process.cwd(), "project-docs");

if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir);
}

const now = new Date().toLocaleString();

const content = `# Site Map

Generated: ${now}

The automatic project scanner is not implemented yet.

`;

fs.writeFileSync(
  path.join(docsDir, "site-map.md"),
  content,
  "utf8"
);

console.log("✓ project-docs/site-map.md generated");
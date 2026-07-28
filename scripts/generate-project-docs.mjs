import fs from "node:fs";
import path from "node:path";

import { scanProject } from "./lib/scanner.mjs";
import { parseProject } from "./lib/parser.mjs";
import { resolveProject } from "./lib/resolver.mjs";
import { buildGraph } from "./lib/graph.mjs";
import { generateMarkdown } from "./lib/markdown.mjs";
import { generateMermaid } from "./lib/mermaid.mjs";
import { generateReadme } from "./lib/readme.mjs";
import { 
  generateDocumentation,
  generateComponentUsage,
  generatePageFiles
} from "./lib/documentation.mjs";
import { generateComponentDocumentation } from "./lib/componentDocumentation.mjs";


const files = scanProject();

const parsed = parseProject(files);

const resolved = resolveProject(parsed);

const graph = buildGraph(resolved);


const markdown = generateMarkdown(graph);

const mermaid = generateMermaid(graph);

const readme = generateReadme();

const componentDocs = generateComponentDocumentation(graph);

const documentation = generateDocumentation(graph);

const componentUsage = generateComponentUsage(graph);


const docsDir = path.join(
  process.cwd(),
  "project-docs"
);

fs.mkdirSync(docsDir, {
  recursive: true
});


const output = path.join(
  docsDir,
  "site-map.md"
);

const mermaidOutput = path.join(
  docsDir,
  "dependency-graph.md"
);

const documentationOutput = path.join(
  docsDir,
  "page-documentation.md"
);

const componentOutput = path.join(
  docsDir,
  "component-documentation.md"
);

const componentUsageOutput = path.join(
  docsDir,
  "component-usage.md"
);

const pagesDir = generatePageFiles(
  graph,
  docsDir
);

const readmeOutput = path.join(
  docsDir,
  "README.md"
);



fs.writeFileSync(
  output,
  markdown,
  "utf8"
);




fs.writeFileSync(
  mermaidOutput,
  mermaid,
  "utf8"
);

fs.writeFileSync(
  documentationOutput,
  documentation,
  "utf8"
);

fs.writeFileSync(
  componentOutput,
  componentDocs,
  "utf8"
);

fs.writeFileSync(
  componentUsageOutput,
  componentUsage,
  "utf8"
);

fs.writeFileSync(
  readmeOutput,
  readme,
  "utf8"
);

console.log("✓ Generated project documentation:");
console.log(`  - ${output}`);
console.log(`  - ${mermaidOutput}`);
console.log(`  - ${documentationOutput}`);
console.log(`  - ${componentOutput}`);
console.log(`  - ${componentUsageOutput}`);
console.log(`  - ${pagesDir}`);
console.log(`  - ${readmeOutput}`);
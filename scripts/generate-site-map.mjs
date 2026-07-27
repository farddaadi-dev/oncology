import fs from "node:fs";
import path from "node:path";

import { scanProject } from "./lib/scanner.mjs";
import { parseProject } from "./lib/parser.mjs";
import { resolveProject } from "./lib/resolver.mjs";
import { buildGraph } from "./lib/graph.mjs";
import { generateMarkdown } from "./lib/markdown.mjs";


const files = scanProject();

const parsed = parseProject(files);

const resolved = resolveProject(parsed);

const graph = buildGraph(resolved);


const markdown = generateMarkdown(graph);


const output = path.join(
  process.cwd(),
  "project-docs",
  "site-map.md"
);


fs.writeFileSync(
  output,
  markdown,
  "utf8"
);


console.log(`✓ Generated ${output}`);
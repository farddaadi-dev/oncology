import fs from "node:fs";
import path from "node:path";

import { scanProject } from "./lib/scanner.mjs";
import { parseProject } from "./lib/parser.mjs";
import { resolveProject } from "./lib/resolver.mjs";
import { buildGraph } from "./lib/graph.mjs";
import { generateStatistics } from "./lib/statistics.mjs";

const root = process.cwd();

const scanned = scanProject(root);
const parsed = parseProject(scanned);
const resolved = resolveProject(parsed);
const graph = buildGraph(resolved);

const markdown = generateStatistics(graph);

const outputDir = path.join(root, "project-docs");

fs.mkdirSync(outputDir, { recursive: true });

const output = path.join(
  outputDir,
  "statistics.md"
);

fs.writeFileSync(
  output,
  markdown,
  "utf8"
);

console.log("📊 Statistics generated:");
console.log(output);
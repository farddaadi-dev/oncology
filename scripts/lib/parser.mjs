import fs from "node:fs";

function extractImports(file) {
  const source = fs.readFileSync(file, "utf8");

  const matches = [
    ...source.matchAll(
      /import\s+.*?from\s+["'](.+?)["']/g
    )
  ];

  return matches.map(match => match[1]);
}

export function parseProject(project) {

  const allFiles = [
    ...project.pages,
    ...project.components,
    ...project.layouts
  ];

  return allFiles.map(file => ({
    file,
    imports: extractImports(file)
  }));

}
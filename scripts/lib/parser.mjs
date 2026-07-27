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
  ...project.layouts,
  ...project.data,
  ...project.content,
  ...project.assets
];

  return allFiles.map(file => {

  const parseImports =
    file.endsWith(".astro") ||
    file.endsWith(".ts") ||
    file.endsWith(".js");

  return {
    file,
    imports: parseImports ? extractImports(file) : []
  };

});

}
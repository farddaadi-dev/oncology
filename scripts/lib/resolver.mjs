import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const extensions = [
  ".astro",
  ".ts",
  ".js",
  ".md",
  ".mdx",
  ".json"
];


function findFile(filePath) {

  // Exact file exists
  if (fs.existsSync(filePath)) {
    return filePath;
  }


  // Try extensions
  for (const ext of extensions) {
    if (fs.existsSync(filePath + ext)) {
      return filePath + ext;
    }
  }


  // Try index files
  if (fs.existsSync(filePath)) {

    for (const ext of extensions) {

      const indexFile = path.join(
        filePath,
        "index" + ext
      );

      if (fs.existsSync(indexFile)) {
        return indexFile;
      }
    }
  }


  return filePath;
}


function resolveImport(importPath, currentFile) {

  if (
    importPath.startsWith("astro:") ||
    (!importPath.startsWith(".") &&
     !importPath.startsWith("@/"))
  ) {
    return null;
  }


  let resolved;


  if (importPath.startsWith("@/")) {

    resolved = path.join(
      root,
      "src",
      importPath.replace("@/", "")
    );

  } else {

    resolved = path.resolve(
      path.dirname(currentFile),
      importPath
    );

  }


  return findFile(resolved);
}



export function resolveProject(parsedProject) {

  return parsedProject.map(item => ({

    file: item.file,

    dependencies: [
      ...new Set(
        item.imports
          .map(imp => resolveImport(imp, item.file))
          .filter(Boolean)
      )
    ]

  }));

}
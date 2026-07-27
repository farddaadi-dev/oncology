import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const src = path.join(root, "src");

function walk(dir) {
  const files = [];

  for (const entry of fs.readdirSync(dir, {
    withFileTypes: true
  })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

export function scanProject() {
  const files = walk(src);

  return {
    pages: files.filter(file =>
      file.includes("/pages/") &&
      file.endsWith(".astro")
    ),

    components: files.filter(file =>
      file.includes("/components/") &&
      file.endsWith(".astro")
    ),

    layouts: files.filter(file =>
      file.includes("/layouts/") &&
      file.endsWith(".astro")
    ),

    data: files.filter(file =>
      file.includes("/data/")
    ),

    content: files.filter(file =>
      file.includes("/content/")
    ),

    assets: files.filter(file =>
      file.includes("/assets/")
    )
  };
}
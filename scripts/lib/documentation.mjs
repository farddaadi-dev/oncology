import fs from "node:fs";
import path from "node:path";


function cleanName(file) {
  return path.basename(file);
}


function category(file) {

  if (file.includes("/pages/")) {
    return "Page";
  }

  if (file.includes("/components/")) {
    return "Component";
  }

  if (file.includes("/data/")) {
    return "Data";
  }

  if (file.includes("/layouts/")) {
    return "Layout";
  }

  if (file.includes("/lib/")) {
    return "Utility";
  }

  return "Other";
}


function pageRoute(file) {
  return file
    .replace(/^.*src\/pages/, "src/pages")
    .replace(/\\/g, "/");
}

function structureName(file) {
  return path
    .basename(file)
    .replace(/\.(astro|ts|js|md|mdx|json)$/, "");
}


export function generateDocumentation(graph) {

  let md = "";

  md += "# Page Documentation\n\n";
  md += `Generated: ${new Date().toLocaleString()}\n\n`;
  md += "---\n\n";


  const pages = Object.keys(graph)
    .filter(file => file.includes("/src/pages/"))
    .sort();


  const groups = {};


  for (const page of pages) {

    const relative = page
      .split("/src/pages/")[1]
      .replace(/\.(astro|md|mdx)$/, "")
      .replace(/\[\.{3}(.*?)\]/g, "$1")
      .replace(/\[(.*?)\]/g, "$1")
      .replace(/\//g, "-");


    const filename = relative + ".md";


    const folder = page
      .split("/src/pages/")[1]
      .split("/")[0];


    const group = folder === "index"
      ? "Main"
      : folder.charAt(0).toUpperCase() + folder.slice(1);


    if (!groups[group]) {
      groups[group] = [];
    }


    groups[group].push({
      name: cleanName(page),
      filename
    });

  }


  for (const [group, items] of Object.entries(groups)) {

    md += `## ${group}\n\n`;


    items
      .sort((a, b) =>
        a.filename.localeCompare(b.filename)
      )
      .forEach(item => {

        md += `- [${item.name}](pages/${item.filename})\n`;

      });


    md += "\n";

  }


  return md;

}
export function generateComponentUsage(graph) {

  let md = "";

  md += "# Component Usage\n\n";
  md += `Generated: ${new Date().toLocaleString()}\n\n`;
  md += "---\n\n";


  const components = Object.keys(graph)
    .filter(file => file.includes("/src/components/"))
    .sort();


  for (const component of components) {

    const parents = graph[component].parents
      .filter(parent => parent.includes("/src/pages/"))
      .sort();


    md += `## ${cleanName(component)}\n\n`;

    md += `File:\n\`${component.replace(/^.*src\//, "src/")}\`\n\n`;

    md += `Usage Count: **${parents.length}**\n\n`;


    md += "Used By:\n\n";


    if (!parents.length) {

      md += "- None\n\n";

    } else {

      parents.forEach(page => {
        md += `- ${cleanName(page)}\n`;
      });

      md += "\n";
    }


    md += "---\n\n";
  }


  return md;

}

function pageFileName(file) {

  return file
    .split("/src/pages/")[1]
    .replace(/\.(astro|md|mdx)$/, "")
    .replace(/\[\.{3}(.*?)\]/g, "$1")
    .replace(/\[(.*?)\]/g, "$1")
    .replace(/\//g, "-");

}


function relativePath(file) {

  return file
    .replace(/^.*src\//, "src/")
    .replace(/\\/g, "/");

}

export function generatePageFiles(graph, outputDir) {

  const pagesDir = path.join(
    outputDir,
    "pages"
  );


  fs.mkdirSync(pagesDir, {
    recursive: true
  });


  const pages = Object.keys(graph)
    .filter(file => file.includes("/src/pages/"))
    .sort();


  for (const page of pages) {

    let md = "";

    const children = graph[page].children;


    md += `# ${cleanName(page)}\n\n`;

    md += `File:\n\`${relativePath(page)}\`\n\n`;


    md += "## Dependencies\n\n";


    if (!children.length) {

      md += "- None\n\n";

    } else {

      children
        .slice()
        .sort()
        .forEach(child => {

          md += `- ${cleanName(child)} (${category(child)})\n`;

        });

      md += "\n";
    }


    md += "## Used Components\n\n";


    const components = children.filter(child =>
      child.includes("/components/")
    );


    if (!components.length) {

      md += "- None\n\n";

    } else {

      components
        .sort()
        .forEach(component => {

          md += `- ${cleanName(component)}\n`;

        });

      md += "\n";
    }


    md += "## Data Files\n\n";


    const data = children.filter(child =>
      child.includes("/data/")
    );


    if (!data.length) {

      md += "- None\n\n";

    } else {

      data
        .sort()
        .forEach(item => {

          md += `- ${cleanName(item)}\n`;

        });

      md += "\n";
    }


    const filename = pageFileName(page) + ".md";


    fs.writeFileSync(
      path.join(pagesDir, filename),
      md,
      "utf8"
    );

  }


  return pagesDir;

}
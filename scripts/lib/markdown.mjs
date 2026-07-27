import path from "node:path";

const root = process.cwd();


function cleanPath(file) {
  return path
    .relative(root, file)
    .replace(/\\/g, "/");
}


function nameFromFile(file) {
  return path.basename(file);
}


export function generateMarkdown(graph) {

  let markdown = "";

  markdown += "# Oncology Website Architecture\n\n";
  markdown += `Generated: ${new Date().toLocaleString()}\n\n`;

  markdown += "---\n\n";


  markdown += "# Pages\n\n";


  for (const file of Object.keys(graph)) {

    if (!file.includes("/src/pages/")) {
      continue;
    }


    markdown += `## ${cleanPath(file)}\n\n`;

    markdown += "### Dependencies\n\n";


    if (graph[file].children.length === 0) {

      markdown += "- None\n\n";

    } else {

      for (const child of graph[file].children) {
        markdown += `- ${nameFromFile(child)}\n`;
      }

      markdown += "\n";
    }


    markdown += "### Used by\n\n";

    if (graph[file].parents.length === 0) {

      markdown += "- None\n\n";

    } else {

      for (const parent of graph[file].parents) {
        markdown += `- ${cleanPath(parent)}\n`;
      }

      markdown += "\n";
    }


    markdown += "---\n\n";

  }


  markdown += "# Components\n\n";


  for (const file of Object.keys(graph)) {

    if (!file.includes("/src/components/")) {
      continue;
    }


    markdown += `## ${nameFromFile(file)}\n\n`;

    markdown += `File:\n\`${cleanPath(file)}\`\n\n`;


    markdown += "Children:\n";

    if (graph[file].children.length) {

      for (const child of graph[file].children) {
        markdown += `- ${nameFromFile(child)}\n`;
      }

    } else {

      markdown += "- None\n";

    }


    markdown += "\nUsed by:\n";

    if (graph[file].parents.length) {

      for (const parent of graph[file].parents) {
        markdown += `- ${cleanPath(parent)}\n`;
      }

    } else {

      markdown += "- None\n";

    }


    markdown += "\n---\n\n";

  }


  return markdown;
}
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



export function generateDocumentation(graph) {

  let md = "";

  md += "# Page Documentation\n\n";
  md += `Generated: ${new Date().toLocaleString()}\n\n`;
  md += "---\n\n";


  for (const file of Object.keys(graph)) {


    if (!file.includes("/src/pages/")) {
      continue;
    }


    md += `# ${cleanName(file)}\n\n`;

    md += `File:\n\`${file}\`\n\n`;


    md += "## Dependencies\n\n";


    const children = graph[file].children;


    if (!children.length) {

      md += "- None\n\n";

    } else {


      for (const child of children) {

        md += `- ${cleanName(child)} (${category(child)})\n`;

      }

      md += "\n";

    }


    md += "## Used By\n\n";


    if (!graph[file].parents.length) {

      md += "- None\n\n";

    } else {

      for (const parent of graph[file].parents) {

        md += `- ${cleanName(parent)}\n`;

      }

      md += "\n";

    }


    md += "---\n\n";

  }


  return md;

}
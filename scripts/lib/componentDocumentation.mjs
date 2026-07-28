import path from "node:path";


function cleanName(file) {
  return path.basename(file);
}


function relativePath(file) {
  return file
    .replace(/^.*src/, "src")
    .replace(/\\/g, "/");
}


function componentCategory(file) {

  if (file.includes("/components/blog/")) {
    return "Blog Component";
  }

  if (file.includes("/components/doctors/")) {
    return "Doctor Component";
  }

  if (file.includes("/components/about/")) {
    return "About Component";
  }

  return "Component";
}


export function generateComponentDocumentation(graph) {

  let md = "";

  md += "# Component Documentation\n\n";
  md += `Generated: ${new Date().toLocaleString()}\n\n`;
  md += "---\n\n";


  const components = Object.keys(graph)
    .filter(file => file.includes("/src/components/"))
    .sort();


  for (const file of components) {

    md += `## ${cleanName(file)}\n\n`;

    md += `Location:\n\`${relativePath(file)}\`\n\n`;

    md += `Category:\n${componentCategory(file)}\n\n`;

    md += "---\n\n";

  }


  return md;
}
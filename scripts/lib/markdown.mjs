import path from "node:path";


function cleanName(file) {
  return path.basename(file);
}


function pageTitle(file) {

  const name = cleanName(file)
    .replace(/\.(astro|md|mdx)$/, "");


  const replacements = {
    "index": "Overview",
    "[...slug]": "Article Detail Page",
    "[category]": "Category Archive Page",
    "[doctor]-publications": "Doctor Publications"
  };


  if (replacements[name]) {
    return replacements[name];
  }


  return name
    .replace(/\[|\]/g, "")
    .replace(/[-_]/g, " ")
    .split(" ")
    .map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");

}


function getPageGroup(file) {

  const relative = file
    .replace(/^.*src\/pages\//, "")
    .replace(/\\/g, "/");


  const parts = relative.split("/");


  if (parts.length === 1) {
    return "Root Pages";
  }


  return parts[0]
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, char => char.toUpperCase());

}


function sortPages(files) {
  return files.sort((a, b) =>
    pageTitle(a).localeCompare(pageTitle(b))
  );
}



export function generateMarkdown(graph) {

  let md = "";


  md += "# Site Map\n\n";
  md += `Generated: ${new Date().toLocaleString()}\n\n`;
  md += "---\n\n";


  const pages = Object.keys(graph)
    .filter(file => file.includes("/src/pages/"));


  const groups = {};


  for (const page of pages) {

    const group = getPageGroup(page);

    if (!groups[group]) {
      groups[group] = [];
    }

    groups[group].push(page);

  }


  for (const group of Object.keys(groups).sort()) {


    md += `## ${group}\n\n`;


    const sorted = sortPages(groups[group]);


    for (const page of sorted) {


      const filename = page
  .replace(/^.*src\/pages\//, "")
  .replace(/\[\.{3}(.+?)\]/g, "$1")
  .replace(/\[(.+?)\]/g, "$1")
  .replace(/\//g, "-")
  .replace(/\.astro$/, "")
  .replace(/\.mdx?$/, "");


      md += `- [${pageTitle(page)}](pages/${filename}.md)\n`;

    }


    md += "\n";

  }


  return md;

}
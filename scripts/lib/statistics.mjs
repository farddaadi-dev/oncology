import path from "node:path";

function name(file) {
  return path.basename(file);
}

export function generateStatistics(graph) {

  const pages = [];
  const components = [];
  const layouts = [];
  const data = [];

  for (const file of Object.keys(graph)) {

    if (file.includes("/src/pages/"))
      pages.push(file);

    else if (file.includes("/src/components/"))
      components.push(file);

    else if (file.includes("/src/layouts/"))
      layouts.push(file);

    else if (file.includes("/src/data/"))
      data.push(file);

  }

  let markdown = "# Project Statistics\n\n";

  markdown += "## Overview\n\n";

  markdown += `- Pages: ${pages.length}\n`;
  markdown += `- Components: ${components.length}\n`;
  markdown += `- Layouts: ${layouts.length}\n`;
  markdown += `- Data files: ${data.length}\n\n`;

  //--------------------------------------------------
  // Most reused components
  //--------------------------------------------------

  markdown += "## Most Reused Components\n\n";

  const reusable = components
    .map(file => ({
      file,
      count: graph[file].parents.length
    }))
    .sort((a, b) => b.count - a.count);

  reusable.slice(0, 15).forEach(item => {
    markdown += `- ${name(item.file)} (${item.count})\n`;
  });

  markdown += "\n";

  //--------------------------------------------------
  // Largest pages
  //--------------------------------------------------

  markdown += "## Largest Pages\n\n";

  const biggestPages = pages
    .map(file => ({
      file,
      count: graph[file].children.length
    }))
    .sort((a, b) => b.count - a.count);

  biggestPages.forEach(page => {
    markdown += `- ${name(page.file)} (${page.count} dependencies)\n`;
  });

  markdown += "\n";

  //--------------------------------------------------
  // Unused Components
  //--------------------------------------------------

  markdown += "## Unused Components\n\n";

  const unused = components.filter(file =>
    graph[file].parents.length === 0
  );

  if (unused.length === 0) {

    markdown += "None 🎉\n";

  } else {

    unused.forEach(file => {
      markdown += `- ${name(file)}\n`;
    });

  }

  markdown += "\n";

  //--------------------------------------------------
  // Unused Data
  //--------------------------------------------------

  markdown += "## Unused Data Files\n\n";

  const unusedData = data.filter(file =>
    graph[file].parents.length === 0
  );

  if (unusedData.length === 0) {

    markdown += "None 🎉\n";

  } else {

    unusedData.forEach(file => {
      markdown += `- ${name(file)}\n`;
    });

  }

  //--------------------------------------------------
// Most Used Data Files
//--------------------------------------------------

markdown += "\n## Most Used Data Files\n\n";

const usedData = data
  .map(file => ({
    file,
    count: graph[file].parents.length
  }))
  .sort((a, b) => b.count - a.count);


usedData.slice(0, 15).forEach(item => {

  markdown += `- ${name(item.file)} (${item.count} consumers)\n`;

});

//--------------------------------------------------
// Architecture Warnings
//--------------------------------------------------

markdown += "\n## Architecture Warnings\n\n";

markdown += "### High-impact Components\n\n";

const highImpact = components
  .map(file => ({
    file,
    count: graph[file].parents.length
  }))
  .filter(item => item.count >= 10)
  .sort((a, b) => b.count - a.count);


if (highImpact.length === 0) {

  markdown += "None\n";

} else {

  highImpact.forEach(item => {

    markdown += 
      `- ${name(item.file)} (${item.count} consumers)\n`;

  });

}

  return markdown;

}
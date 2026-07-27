import path from "node:path";

const root = process.cwd();


function cleanName(file) {
  return path
    .relative(root, file)
    .replace(/\\/g, "/")
    .replace(/\//g, "_")
    .replace(/\./g, "_");
}


function labelName(file) {
  return path
    .basename(file)
    .replace(".astro", "");
}


export function generateMermaid(graph) {

  let mermaid = "";

  mermaid += "```mermaid\n";
  mermaid += "graph TD\n\n";


  const nodes = new Set();


  for (const file in graph) {

    const parent = cleanName(file);

    nodes.add(parent);


    for (const child of graph[file].children) {

      const childNode = cleanName(child);

      nodes.add(childNode);


      mermaid += `${parent}["${labelName(file)}"] --> ${childNode}["${labelName(child)}"]\n`;
    }
  }


  mermaid += "\n```\n";


  return mermaid;

}
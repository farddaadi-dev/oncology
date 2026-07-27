export function buildGraph(resolvedProject) {

    const graph = {};
  
    for (const item of resolvedProject) {
      graph[item.file] = {
        children: item.dependencies,
        parents: []
      };
    }
  
  
    // Build reverse relationships
    for (const file in graph) {
      for (const dependency of graph[file].children) {
  
        if (graph[dependency]) {
          graph[dependency].parents.push(file);
        }
  
      }
    }
  
  
    return graph;
  }
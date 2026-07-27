import fs from 'fs';
import path from 'path';

const pagesDir = './src/pages';

function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Extract imported components
  const imports = [...content.matchAll(/import\s+(\w+)\s+from\s+['"]([^'"]+)['"]/g)]
    .map(([_, name, source]) => ({ name, source }));

  return {
    page: path.relative(pagesDir, filePath),
    components: imports.filter(i => i.source.includes('.astro') || i.source.includes('components')),
    dataSources: imports.filter(i => i.source.includes('data') || i.source.includes('.json'))
  };
}

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  let results = [];

  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      results = results.concat(scanDir(fullPath));
    } else if (file.endsWith('.astro')) {
      results.push(analyzeFile(fullPath));
    }
  }
  return results;
}

const inventory = scanDir(pagesDir);
console.log(JSON.stringify(inventory, null, 2));
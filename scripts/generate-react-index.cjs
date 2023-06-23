const fs = require("fs");
const path = require("path");

const componentsDir = path.join(__dirname, "../react");
const components = fs.readdirSync(componentsDir).filter((file) => {
  return file.endsWith(".tsx");
});

console.log("Generating index.ts file...");

const indexFile = components
  .map((component) => {
    const componentName = component.split(".")[0];
    return `export { default as ${componentName} } from "./${componentName}.js";`;
  })
  .join("\n");

fs.writeFileSync(path.join(componentsDir, "index.ts"), indexFile);

console.log("Done!");

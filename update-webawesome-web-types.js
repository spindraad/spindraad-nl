import fs from 'fs/promises';

console.log('Downloading webawesome-web-types...');
const webawesomeWebTypes = await fetch(
  'https://backers.webawesome.com/dist/vscode.html-custom-data.json'
).then((res) => res.json());

console.log('Updating webawesome-web-types...');
await fs.writeFile(
  './web-types/webawesome.json',
  JSON.stringify(webawesomeWebTypes, null, 2)
);
console.log('webawesome-web-types updated, proceeding to generate intrinsic elements...');

async function generateIntrinsicElements() {
  console.log('Generating intrinsic elements...');
  // Initialize the TypeScript interface string
  let tsInterface = `declare global {\n  namespace JSX {\n    interface IntrinsicElements {\n`;

  // Iterate over the tags
  for (const tag of webawesomeWebTypes.tags) {
    // Add JSDoc comment for the tag's description
    tsInterface += `      /**\n       * ${ tag.description.replace(/\n/g, '\n       * ') }\n       */\n`;
    tsInterface += `      "${ tag.name }": {\n`;

    // Iterate over the tag's attributes
    for (const attr of tag.attributes) {
      // Add JSDoc comment for the attribute's description
      if (attr.description) {
        tsInterface += `        /**\n         * ${ attr.description.replace(/\n/g, '\n         * ') }\n         */\n`;
      }
      if (attr.values && attr.values.length) {
        const values = attr.values.map((value) => `"${ value.name }"`).join(' | ');
        tsInterface += `        "${ attr.name }"?: ${ values };\n`;
      } else {
        tsInterface += `        "${ attr.name }"?: string;\n`;
      }
    }
    tsInterface += `        "children"?: any;\n`;

    tsInterface += `      };\n`;
  }

  tsInterface += `    }\n  }\n}\n`;

// Write the TypeScript interface to webawesome.d.ts
  await fs.writeFile('./webawesome.d.ts', tsInterface);
  console.log('webawesome.d.ts has been generated.');
}

generateIntrinsicElements().catch(console.error);

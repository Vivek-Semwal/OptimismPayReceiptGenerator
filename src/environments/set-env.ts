const fs = require('fs');
const apiKey = process.env["API_KEY"] || '';

const prodEnvPath = './src/environments/environment.prod.ts';

const fileContent = `
export const environment = {
  production: true,
  apiKey: '${apiKey}'
};
`;

fs.writeFileSync(prodEnvPath, fileContent);
console.log('✅ Environment file updated with API_KEY');
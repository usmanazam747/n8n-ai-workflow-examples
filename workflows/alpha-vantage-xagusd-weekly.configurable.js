// n8n Function node: Build Alpha Vantage URL using config.json API key
// Place this node before the HTTP Request node

const fs = require('fs');
const path = require('path');

// Read config.json (assumes workflow runs on local n8n with file access)
const configPath = path.join(__dirname, '..', 'config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const apiKey = config.alphaVantageApiKey;
const url = `https://www.alphavantage.co/query?function=FX_WEEKLY&from_symbol=XAG&to_symbol=USD&apikey=${apiKey}`;

return [{ json: { url } }];

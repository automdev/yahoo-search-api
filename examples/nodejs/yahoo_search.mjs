// Yahoo Search API – Node.js example (Node 18+, ES module)
// Usage: AUTOM_API_KEY=your-key node yahoo_search.mjs

const headers = { "x-api-key": process.env.AUTOM_API_KEY, "Content-Type": "application/json" };

const params = new URLSearchParams({
  "query": "openai",
});
const response = await fetch(`https://api.autom.dev/v1/yahoo/search?${params}`, { headers });
if (!response.ok) {
  console.error(`HTTP ${response.status}: ${await response.text()}`);
  process.exit(1);
}

console.log(JSON.stringify(await response.json(), null, 2));

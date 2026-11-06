const fs = require("fs");

fs.mkdirSync("out/assets", { recursive: true });
fs.writeFileSync("out/index.html", "<!doctype html><title>Fixture site</title><h1>Fixture site</h1>");
fs.writeFileSync("out/about.html", "<!doctype html><title>About</title><h1>About</h1>");
fs.writeFileSync("out/404.html", "<!doctype html><title>Not found</title><h1>Fixture 404</h1>");
fs.writeFileSync("out/assets/site.css", "h1 { font-family: sans-serif; }");

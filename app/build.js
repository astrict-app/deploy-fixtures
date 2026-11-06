const fs = require("fs");

// A single-page app built for the /app base path, without a 404.html.
fs.mkdirSync("dist/assets", { recursive: true });
fs.writeFileSync(
  "dist/index.html",
  '<!doctype html><title>Fixture app</title><div id="root">Fixture app</div><script src="/app/assets/app.js"></script>',
);
fs.writeFileSync("dist/assets/app.js", "document.title = 'Fixture app ' + location.pathname;");

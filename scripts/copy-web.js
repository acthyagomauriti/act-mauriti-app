const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const src = root;
const dest = path.join(root, 'www');
for (const name of ['index.html','styles.css','app.js','manifest.webmanifest','service-worker.js']) {
  fs.copyFileSync(path.join(src, name), path.join(dest, name));
}
function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const a = path.join(from, entry.name), b = path.join(to, entry.name);
    if (entry.isDirectory()) copyDir(a,b); else fs.copyFileSync(a,b);
  }
}
copyDir(path.join(src,'assets'), path.join(dest,'assets'));

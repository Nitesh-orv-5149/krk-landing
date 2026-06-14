const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, 'dist');
const htmlPath = path.join(distPath, 'index.html');

if (!fs.existsSync(htmlPath)) {
  console.error('Built index.html not found! Run npm run build first.');
  process.exit(1);
}

// Read the index.html
let html = fs.readFileSync(htmlPath, 'utf8');

// Find assets in dist/assets
const assetsDir = path.join(distPath, 'assets');
if (!fs.existsSync(assetsDir)) {
  console.error('dist/assets directory not found! Run npm run build first.');
  process.exit(1);
}

const files = fs.readdirSync(assetsDir);

const jsFile = files.find(f => f.endsWith('.js'));
const cssFile = files.find(f => f.endsWith('.css'));

if (!jsFile || !cssFile) {
  console.error('Could not find JS or CSS built assets.');
  process.exit(1);
}

const jsContent = fs.readFileSync(path.join(assetsDir, jsFile), 'utf8');
const cssContent = fs.readFileSync(path.join(assetsDir, cssFile), 'utf8');

// Build filename-specific regexes to avoid matching generic strings inside files
const cssRegex = new RegExp('<link[^>]*href="\\/assets\\/' + cssFile.replace(/\./g, '\\.') + '"[^>]*>');
const scriptRegex = new RegExp('<script[^>]*src="\\/assets\\/' + jsFile.replace(/\./g, '\\.') + '"[^>]*><\\/script>');

// Remove the script tag from the head
html = html.replace(scriptRegex, '');

// Replace the CSS link tag first
html = html.replace(cssRegex, () => `<style>${cssContent}</style>`);

// Insert the script tag at the bottom of the body (no type="module" to allow double-clicking file:// in browsers)
html = html.replace('</body>', () => `<script>${jsContent}</script>\n</body>`);

// Write to KRK Website Final.html in the root
const outputPath = path.join(__dirname, 'KRK Website Final.html');
fs.writeFileSync(outputPath, html, 'utf8');
console.log('Successfully bundled to KRK Website Final.html!');

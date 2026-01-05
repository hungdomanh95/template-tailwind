import fs from "node:fs";
import path from "node:path";

const slug = process.argv[2];      // vd: my-new-app
const title = process.argv[3] || slug; // vd: "My New App"

if (!slug) {
  console.log('Usage: yarn rename "my-new-app" "My New App"');
  process.exit(1);
}

const root = process.cwd();

const safeRead = (p) => (fs.existsSync(p) ? fs.readFileSync(p, "utf8") : null);
const safeWrite = (p, c) => fs.writeFileSync(p, c, "utf8");

const replaceInFile = (file, replacer) => {
  const abs = path.join(root, file);
  const content = safeRead(abs);
  if (content == null) return;
  const next = replacer(content);
  if (next !== content) safeWrite(abs, next);
};

// package.json name
replaceInFile("package.json", (c) => {
  const json = JSON.parse(c);
  json.name = slug;
  return JSON.stringify(json, null, 2) + "\n";
});

// index.html <title>
replaceInFile("index.html", (c) =>
  c.replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
);

// README heading
replaceInFile("README.md", (c) => c.replace(/^# .*/m, `# ${title}`));

// brand text trong layout (nếu có)
replaceInFile("src/app/AppLayout.tsx", (c) => c.replace(/My App/g, title));

console.log(`✅ Renamed to: ${slug} / "${title}"`);

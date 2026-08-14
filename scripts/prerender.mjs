import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { render } from "../.prerender/entry-server.js";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const outputPath = path.join(projectRoot, "dist", "index.html");
const html = await readFile(outputPath, "utf8");
const appHtml = render();
const rootMarker = '<div id="root"></div>';

if (!html.includes(rootMarker)) {
  throw new Error("Could not find the portfolio root marker while prerendering.");
}

await writeFile(outputPath, html.replace(rootMarker, `<div id="root">${appHtml}</div>`));

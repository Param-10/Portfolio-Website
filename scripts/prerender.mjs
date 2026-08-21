import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { render, renderResume } from "../.prerender/entry-server.js";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const outputPath = path.join(projectRoot, "dist", "index.html");
const resumeOutputPath = path.join(projectRoot, "dist", "resume", "index.html");
const html = await readFile(outputPath, "utf8");
const resumeHtml = await readFile(resumeOutputPath, "utf8");
const appHtml = render();
const resumeAppHtml = renderResume();
const rootMarker = '<div id="root"></div>';

if (!html.includes(rootMarker) || !resumeHtml.includes(rootMarker)) {
  throw new Error("Could not find an application root marker while prerendering.");
}

await Promise.all([
  writeFile(outputPath, html.replace(rootMarker, `<div id="root">${appHtml}</div>`)),
  writeFile(resumeOutputPath, resumeHtml.replace(rootMarker, `<div id="root">${resumeAppHtml}</div>`)),
]);

import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");

const assets = [
  ["public/paramveer-portrait.jpg", "public/paramveer-portrait.webp", 900],
  ["public/projects/polaris.png", "public/projects/polaris.webp", 960],
  ["public/projects/carbonctrl.png", "public/projects/carbonctrl.webp", 960],
  ["public/projects/coefficient.png", "public/projects/coefficient.webp", 960],
  ["public/projects/bullrunner.png", "public/projects/bullrunner.webp", 960],
  ["public/projects/matchup.png", "public/projects/matchup.webp", 480],
  ["public/projects/focus_timer.png", "public/projects/focus-timer.webp", 600],
  ["public/projects/lawyerup.png", "public/projects/lawyerup.webp", 960],
  ["public/projects/pr-nutrition-github.png", "public/projects/pr-nutrition-github.webp", 960],
  ["public/projects/adversarial-spam-github.png", "public/projects/adversarial-spam-github.webp", 960],
  ["public/projects/fraud-detection-github.png", "public/projects/fraud-detection-github.webp", 960],
  [
    "public/projects/spam_detection_thumbnail_1780255526186.png",
    "public/projects/spam-detection.webp",
    960,
  ],
];

await Promise.all(
  assets.map(async ([input, output, width]) => {
    await sharp(path.join(projectRoot, input))
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 78, effort: 6 })
      .toFile(path.join(projectRoot, output));
  }),
);

await sharp(path.join(projectRoot, "public/og-card.svg"))
  .png({ compressionLevel: 9, palette: true })
  .toFile(path.join(projectRoot, "public/og-card.png"));

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const hero = read("components/HeroSection.tsx");

assert.equal(
  (hero.match(/<ParticleText\b/g) ?? []).length,
  3,
  "HeroSection must render exactly three ParticleText instances inside one target frame",
);
assert.match(hero, /siteConfig\.name\.toUpperCase\(\)/, "Hero must render the uppercase name with ParticleText");
assert.match(hero, /siteConfig\.professionalTitle\[0\]\.toUpperCase\(\)/, "Hero must render the first professional title");
assert.match(hero, /siteConfig\.professionalTitle\[1\]\.toUpperCase\(\)/, "Hero must render the second professional title");
assert.doesNotMatch(hero, /professionalTitle\.map/, "Professional titles must not remain in a separate block above the frame");
assert.match(hero, /<TargetFrame className="w-full max-w-4xl">/, "The shared frame must be a responsive full-width hero frame");

const particle = read("components/ParticleText.tsx");
assert.match(particle, /prefers-reduced-motion: reduce/, "ParticleText must honor reduced-motion preferences");
assert.match(particle, /ResizeObserver/, "ParticleText must rebuild particles on resize");
assert.match(particle, /aria-label=\{text\}/, "ParticleText must expose accessible text");
assert.match(particle, /pointerenter/, "ParticleText must support pointer interaction");

const css = read("components/ParticleText.css");
assert.match(css, /\.particle-text__canvas/, "ParticleText CSS must style the canvas");
assert.match(css, /\.particle-text__sr/, "ParticleText CSS must include screen-reader-only text styling");

console.log("Particle hero structure verified.");

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
  "HeroSection must render exactly three visible ParticleText instances",
);
assert.match(hero, /<h1 className="sr-only">\{siteConfig\.name\}<\/h1>/, "Hero must keep an sr-only semantic h1 for accessibility");
assert.match(hero, /<p className="sr-only">\{siteConfig\.professionalTitle\.join\(" · "\)\}<\/p>/, "Hero must keep sr-only professional titles for accessibility");
assert.doesNotMatch(hero, /<motion\.h1\b/, "Hero must not render a visible solid name overlay");
assert.doesNotMatch(hero, /<motion\.p\b/, "Hero must not render visible solid subtitle overlays");
assert.match(hero, /particleSize=\{1\.35\}/, "Name must use the largest particle size");
assert.match(hero, /particleSize=\{0\.72\}/, "First subtitle must use smaller particles");
assert.match(hero, /particleSize=\{0\.6\}/, "Second subtitle must use the smallest particles");
assert.match(hero, /density=\{2\}/, "Pure particle typography must use dense sampling for readability");
assert.match(hero, /overflow-hidden/, "Particle rows must clip scatter safely inside their bounds");
assert.match(hero, /<TargetFrame className="w-full max-w-4xl">/, "The shared frame must remain responsive and full-width");

const particle = read("components/ParticleText.tsx");
assert.match(particle, /prefers-reduced-motion: reduce/, "ParticleText must honor reduced-motion preferences");
assert.match(particle, /ResizeObserver/, "ParticleText must rebuild particles on resize");
assert.match(particle, /pointerenter/, "ParticleText must support pointer interaction");
assert.match(particle, /maxTextWidth = width \* 0\.9/, "ParticleText must reserve horizontal breathing room while fitting text");
assert.match(particle, /offscreen\.width = width/, "ParticleText sampling canvas must match the real component width");
assert.match(particle, /offscreen\.height = height/, "ParticleText sampling canvas must match the real component height");
assert.match(particle, /offCtx\.font = font;[\s\S]*offCtx\.textAlign = "center";[\s\S]*offCtx\.textBaseline = "middle";/, "Canvas font and centered alignment must be restored after offscreen resize");
assert.match(particle, /offCtx\.fillText\(content, width \/ 2, height \/ 2\)/, "ParticleText must rasterize the full string at the center of the full sampling canvas");
assert.doesNotMatch(particle, /actualBoundingBoxLeft|actualBoundingBoxRight/, "ParticleText must not depend on browser-specific bounding-box offsets for rasterization");

console.log("Pure particle hero full-canvas sampling verified.");

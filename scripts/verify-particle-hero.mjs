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
  "HeroSection must render one particle layer for the name and one for each subtitle",
);
assert.match(hero, /aria-hidden="true"[\s\S]*?<ParticleText/, "Particle layers must be hidden from assistive technology");
assert.match(hero, /<h1[\s\S]*?siteConfig\.name\.toUpperCase\(\)/, "Hero must keep the uppercase name as semantic solid text");
assert.match(hero, /max-w-\[50rem\]/, "Hero identity content must have a bounded maximum width");
assert.match(hero, /text-\[clamp\(1\.8rem,4\.55vw,3\.75rem\)\]/, "Name typography must be capped to fit inside the frame");
assert.match(hero, /particleSize=\{0\.72\}/, "The first subtitle must use fine-grained particles");
assert.match(hero, /particleSize=\{0\.58\}/, "The second subtitle must use the smallest particles");
assert.match(hero, /overflow-hidden/, "Particle rows must clip scatter safely inside their layout bounds");
assert.match(hero, /siteConfig\.professionalTitle\[0\]\.toUpperCase\(\)/, "Hero must render the first professional title");
assert.match(hero, /siteConfig\.professionalTitle\[1\]\.toUpperCase\(\)/, "Hero must render the second professional title");
assert.doesNotMatch(hero, /professionalTitle\.map/, "Professional titles must remain explicitly controlled inside the shared frame");
assert.match(hero, /<TargetFrame className="w-full max-w-4xl">/, "The shared frame must remain responsive and full-width");
assert.match(hero, /bg-gradient-to-r/, "The readable name must retain the cyan/sky gradient treatment");

const particle = read("components/ParticleText.tsx");
assert.match(particle, /prefers-reduced-motion: reduce/, "ParticleText must honor reduced-motion preferences");
assert.match(particle, /ResizeObserver/, "ParticleText must rebuild particles on resize");
assert.match(particle, /pointerenter/, "ParticleText must support pointer interaction");

console.log("Bounded hybrid particle hero verified.");

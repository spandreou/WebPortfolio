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
  1,
  "HeroSection must render exactly one decorative ParticleText instance for the name",
);
assert.match(hero, /aria-hidden="true"[\s\S]*?<ParticleText/, "The particle layer must be hidden from assistive technology");
assert.match(hero, /<h1[\s\S]*?siteConfig\.name\.toUpperCase\(\)/, "Hero must render the uppercase name as semantic solid text");
assert.match(hero, /siteConfig\.professionalTitle\[0\]\.toUpperCase\(\)/, "Hero must render the first professional title as normal text");
assert.match(hero, /siteConfig\.professionalTitle\[1\]\.toUpperCase\(\)/, "Hero must render the second professional title as normal text");
assert.doesNotMatch(hero, /professionalTitle\.map/, "Professional titles must remain explicitly controlled inside the shared frame");
assert.match(hero, /<TargetFrame className="w-full max-w-4xl">/, "The shared frame must remain responsive and full-width");
assert.match(hero, /bg-gradient-to-r/, "The readable name must retain the cyan/sky gradient treatment");

const particle = read("components/ParticleText.tsx");
assert.match(particle, /prefers-reduced-motion: reduce/, "ParticleText must honor reduced-motion preferences");
assert.match(particle, /ResizeObserver/, "ParticleText must rebuild particles on resize");
assert.match(particle, /pointerenter/, "ParticleText must support pointer interaction");

console.log("Hybrid particle hero structure verified.");

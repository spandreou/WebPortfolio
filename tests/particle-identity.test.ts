import assert from "node:assert/strict";
import test from "node:test";
import { createParticleIdentityLines } from "../lib/particle-identity.ts";

test("orders both roles before the name and synchronizes formation timing", () => {
  const lines = createParticleIdentityLines(
    ["Junior Full-Stack Developer", "AI Automation & Integrations"],
    "Spyridon Andreou",
  );

  assert.deepEqual(
    lines.map(({ text, kind }) => ({ text, kind })),
    [
      { text: "Junior Full-Stack Developer", kind: "role" },
      { text: "AI Automation & Integrations", kind: "role" },
      { text: "Spyridon Andreou", kind: "name" },
    ],
  );
  assert.deepEqual(
    [
      ...new Set(
        lines.map(
          ({ gatherDuration, stagger, trigger }) =>
            `${gatherDuration}:${stagger}:${trigger}`,
        ),
      ),
    ],
    ["1500:320:mount"],
  );
});

test("uses calmer settled motion for role lines than for the name", () => {
  const lines = createParticleIdentityLines(["Role one", "Role two"], "Name");

  assert.equal(lines[0].idleDrift, 0.12);
  assert.equal(lines[0].pointerRepel, 8);
  assert.equal(lines[2].idleDrift, 0.28);
  assert.equal(lines[2].pointerRepel, 16);
});

test("uses particles only for every visible identity line", () => {
  const lines = createParticleIdentityLines(["Role one", "Role two"], "Name");

  assert.deepEqual(
    lines.map(({ renderFallback }) => renderFallback),
    [false, false, false],
  );
});

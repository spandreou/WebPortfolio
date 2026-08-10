import assert from "node:assert/strict";
import test from "node:test";
import { sampleInkCells } from "../lib/particle-sampling.ts";

test("preserves thin strokes that fall between the 2px sampling grid", () => {
  const width = 4;
  const height = 4;
  const pixels = new Uint8ClampedArray(width * height * 4);

  const setAlpha = (x: number, y: number, alpha: number) => {
    pixels[(y * width + x) * 4 + 3] = alpha;
  };

  setAlpha(1, 1, 255);
  setAlpha(3, 1, 192);
  setAlpha(1, 3, 128);
  setAlpha(3, 3, 64);

  assert.deepEqual(sampleInkCells(pixels, width, height, 2), [
    { x: 1, y: 1, alpha: 1 },
    { x: 3, y: 1, alpha: 192 / 255 },
    { x: 1, y: 3, alpha: 128 / 255 },
    { x: 3, y: 3, alpha: 64 / 255 },
  ]);
});

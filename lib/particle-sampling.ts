export type InkSample = {
  x: number;
  y: number;
  alpha: number;
};

export function sampleInkCells(
  pixels: Uint8ClampedArray,
  width: number,
  height: number,
  step: number,
  alphaThreshold = 40,
): InkSample[] {
  const samples: InkSample[] = [];
  const cellSize = Math.max(1, Math.floor(step));

  for (let y = 0; y < height; y += cellSize) {
    for (let x = 0; x < width; x += cellSize) {
      let strongestAlpha = 0;
      let strongestX = x;
      let strongestY = y;

      for (let cellY = y; cellY < Math.min(y + cellSize, height); cellY += 1) {
        for (
          let cellX = x;
          cellX < Math.min(x + cellSize, width);
          cellX += 1
        ) {
          const alpha = pixels[(cellY * width + cellX) * 4 + 3];

          if (alpha > strongestAlpha) {
            strongestAlpha = alpha;
            strongestX = cellX;
            strongestY = cellY;
          }
        }
      }

      if (strongestAlpha > alphaThreshold) {
        samples.push({
          x: strongestX,
          y: strongestY,
          alpha: strongestAlpha / 255,
        });
      }
    }
  }

  return samples;
}

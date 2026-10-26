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
      let maxAlpha = 0;
      let totalWeight = 0;
      let sumX = 0;
      let sumY = 0;

      for (let cellY = y; cellY < Math.min(y + cellSize, height); cellY += 1) {
        for (
          let cellX = x;
          cellX < Math.min(x + cellSize, width);
          cellX += 1
        ) {
          const alpha = pixels[(cellY * width + cellX) * 4 + 3];

          if (alpha > maxAlpha) {
            maxAlpha = alpha;
          }
          if (alpha > alphaThreshold) {
            const weight = alpha * alpha;
            totalWeight += weight;
            sumX += cellX * weight;
            sumY += cellY * weight;
          }
        }
      }

      if (maxAlpha > alphaThreshold && totalWeight > 0) {
        samples.push({
          x: Math.round((sumX / totalWeight) * 100) / 100,
          y: Math.round((sumY / totalWeight) * 100) / 100,
          alpha: maxAlpha / 255,
        });
      }
    }
  }

  return samples;
}

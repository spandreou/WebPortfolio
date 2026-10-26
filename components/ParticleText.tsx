"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { sampleInkCells } from "@/lib/particle-sampling";

export interface ParticleTextProps {
  text?: string;
  particleSize?: number;
  density?: number;
  color?: string;
  highlightColor?: string;
  scatter?: number;
  gatherDuration?: number;
  stagger?: number;
  pointerRepel?: number;
  repelRadius?: number;
  idleDrift?: number;
  trigger?: "mount" | "hover" | "click";
  fontSize?: number | string;
  fontWeight?: number | string;
  fontFamily?: string;
  glow?: boolean;
  className?: string;
  style?: CSSProperties;
}

type Rgb = { r: number; g: number; b: number };
type Target = { x: number; y: number; alpha: number };
type Particle = {
  x: number;
  y: number;
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
  size: number;
  color: string;
  seed: number;
  depth: number;
  delay: number;
};

const hexToRgb = (hex: string): Rgb | null => {
  const clean = hex.replace("#", "").trim();
  if (!/^[0-9a-fA-F]{6}$/.test(clean)) return null;
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16),
  };
};

const mixRgb = (from: Rgb, to: Rgb, amount: number): Rgb => ({
  r: Math.round(from.r + (to.r - from.r) * amount),
  g: Math.round(from.g + (to.g - from.g) * amount),
  b: Math.round(from.b + (to.b - from.b) * amount),
});

const rgbToCss = (rgb: Rgb): string =>
  `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);
const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

const resolveFontSize = (
  value: number | string,
  container: HTMLDivElement,
  fontWeight: number | string,
  fontFamily: string,
): number => {
  if (typeof value === "number") return value;

  const probe = document.createElement("span");
  probe.textContent = "M";
  probe.style.position = "absolute";
  probe.style.visibility = "hidden";
  probe.style.pointerEvents = "none";
  probe.style.fontSize = value;
  probe.style.fontWeight = String(fontWeight);
  probe.style.fontFamily = fontFamily;
  container.appendChild(probe);
  const size = parseFloat(window.getComputedStyle(probe).fontSize) || 96;
  probe.remove();
  return size;
};

const waitForFonts = async (font: string): Promise<void> => {
  if (!("fonts" in document)) return;

  try {
    await document.fonts.load(font);
  } catch {}

  await document.fonts.ready;
};

const ParticleText = ({
  text = "React Bits",
  particleSize = 2,
  density = 4,
  color = "#ffffff",
  highlightColor = "#8b5cf6",
  scatter = 180,
  gatherDuration = 1600,
  stagger = 420,
  pointerRepel = 40,
  repelRadius = 120,
  idleDrift = 0.7,
  trigger = "mount",
  fontSize = "clamp(3rem, 12vw, 8rem)",
  fontWeight = 800,
  fontFamily = "inherit",
  glow = true,
  className = "",
  style,
}: ParticleTextProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    let particles: Particle[] = [];
    let animationFrame: number | null = null;
    let resizeFrame: number | null = null;
    let buildId = 0;
    let gathering = false;
    let gatherStart = 0;
    let reducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let isMobile = false;

    const pointer = {
      active: false,
      x: 0,
      y: 0,
      smoothX: 0,
      smoothY: 0,
    };

    let isVisible = true;
    let isTabActive = !document.hidden;

    const startGather = (fromScatter = true): void => {
      if (!particles.length) return;

      const now = performance.now();
      const spread = reducedMotion ? 0 : scatter;

      particles.forEach((particle) => {
        if (fromScatter) {
          const angle = particle.seed * Math.PI * 2;
          const distance = spread * (0.35 + particle.depth * 0.75);
          particle.x =
            particle.targetX +
            Math.cos(angle) * distance +
            (particle.depth - 0.5) * spread * 0.55;
          particle.y =
            particle.targetY +
            Math.sin(angle) * distance +
            (particle.seed - 0.5) * spread * 0.55;
        }

        particle.startX = particle.x;
        particle.startY = particle.y;
        particle.delay = reducedMotion ? 0 : particle.seed * stagger;
      });

      gatherStart = now;
      gathering = true;
    };

    const drawParticle = (particle: Particle): void => {
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(
        particle.x,
        particle.y,
        Math.max(0.65, particle.size / 2),
        0,
        Math.PI * 2,
      );
      ctx.fill();
    };

    const render = (now: number): void => {
      if (!isVisible || !isTabActive) {
        animationFrame = null;
        return;
      }

      ctx.clearRect(0, 0, width, height);

      pointer.smoothX += (pointer.x - pointer.smoothX) * 0.18;
      pointer.smoothY += (pointer.y - pointer.smoothY) * 0.18;

      let complete = true;
      const driftTime = now * 0.001;
      const isSettled = !gathering && !reducedMotion;

      if (isSettled) {
        ctx.globalAlpha = 1;
      }

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        let baseX = particle.targetX;
        let baseY = particle.targetY;
        let progress = 1;

        if (gathering) {
          const local =
            (now - gatherStart - particle.delay) /
            Math.max(1, reducedMotion ? 1 : gatherDuration);
          progress = clamp(local, 0, 1);
          const eased = easeOutCubic(progress);
          baseX =
            particle.startX + (particle.targetX - particle.startX) * eased;
          baseY =
            particle.startY + (particle.targetY - particle.startY) * eased;
          if (progress < 1) complete = false;
        } else if (idleDrift > 0) {
          // Individual phase orbital drift: avoids planar density ripple waves / stripes
          const waveX =
            Math.sin(driftTime * 0.85 + particle.seed * 6.283) * 0.65 +
            Math.sin(driftTime * 0.4 + particle.depth * 6.283) * 0.35;
          const waveY =
            Math.cos(driftTime * 0.75 + particle.depth * 6.283) * 0.65 +
            Math.cos(driftTime * 0.45 + particle.seed * 6.283) * 0.35;

          const driftScale = isMobile ? 0.45 : 0.75;
          baseX += waveX * idleDrift * driftScale;
          baseY += waveY * idleDrift * driftScale;
        }

        if (
          pointer.active &&
          !reducedMotion &&
          pointerRepel > 0 &&
          repelRadius > 0
        ) {
          const dx = baseX - pointer.smoothX;
          const dy = baseY - pointer.smoothY;
          const distance = Math.hypot(dx, dy);
          if (distance > 0 && distance < repelRadius) {
            const force =
              Math.pow(1 - distance / repelRadius, 2) * pointerRepel;
            baseX += (dx / distance) * force;
            baseY += (dy / distance) * force;
          }
        }

        const follow = reducedMotion ? 1 : 0.22;
        particle.x += (baseX - particle.x) * follow;
        particle.y += (baseY - particle.y) * follow;

        if (gathering) {
          ctx.globalAlpha = clamp(0.35 + progress * 0.65, 0, 1);
        }
        drawParticle(particle);
      }

      if (gathering) {
        ctx.globalAlpha = 1;
      }

      if (gathering && complete) {
        gathering = false;
      }

      animationFrame = window.requestAnimationFrame(render);
    };

    const ensureRenderLoop = (): void => {
      if (animationFrame === null && isVisible && isTabActive) {
        animationFrame = window.requestAnimationFrame(render);
      }
    };

    const sampleText = async (): Promise<void> => {
      const currentBuild = ++buildId;
      const rect = container.getBoundingClientRect();
      width = Math.floor(rect.width);
      height = Math.floor(rect.height);

      if (width <= 0 || height <= 0) return;

      isMobile = width < 640;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.style.touchAction = "pan-y";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const computed = window.getComputedStyle(container);
      const resolvedFamily =
        fontFamily === "inherit"
          ? computed.fontFamily || "sans-serif"
          : fontFamily;
      let resolvedSize = resolveFontSize(
        fontSize,
        container,
        fontWeight,
        resolvedFamily,
      );
      let font = `${fontWeight} ${resolvedSize}px ${resolvedFamily}`;

      await waitForFonts(font);
      if (currentBuild !== buildId) return;

      const offscreen = document.createElement("canvas");
      const offCtx = offscreen.getContext("2d", { willReadFrequently: true });
      if (!offCtx) return;

      const content = String(text || " ");
      const maxTextWidth = width * 0.94;
      if ("letterSpacing" in offCtx) {
        (offCtx as unknown as { letterSpacing: string }).letterSpacing = isMobile
          ? "0.04em"
          : "0.05em";
      }
      offCtx.font = font;
      let metrics = offCtx.measureText(content);
      const measuredWidth = Math.max(1, metrics.width);
      if (measuredWidth > maxTextWidth) {
        resolvedSize = Math.max(
          14,
          resolvedSize * (maxTextWidth / measuredWidth),
        );
        font = `${fontWeight} ${resolvedSize}px ${resolvedFamily}`;
        await waitForFonts(font);
        if (currentBuild !== buildId) return;
        offCtx.font = font;
        if ("letterSpacing" in offCtx) {
          (offCtx as unknown as { letterSpacing: string }).letterSpacing = isMobile
            ? "0.04em"
            : "0.05em";
        }
        metrics = offCtx.measureText(content);
      }

      const left = Math.ceil(metrics.actualBoundingBoxLeft || 0);
      const right = Math.ceil(
        metrics.actualBoundingBoxRight || metrics.width,
      );
      const ascent = Math.ceil(
        metrics.actualBoundingBoxAscent || resolvedSize * 0.78,
      );
      const descent = Math.ceil(
        metrics.actualBoundingBoxDescent || resolvedSize * 0.22,
      );
      const padding = Math.max(12, Math.ceil(resolvedSize * 0.08));
      const textWidth = Math.max(1, left + right);
      const textHeight = Math.max(1, ascent + descent);

      offscreen.width = textWidth + padding * 2;
      offscreen.height = textHeight + padding * 2;
      offCtx.clearRect(0, 0, offscreen.width, offscreen.height);
      offCtx.font = font;
      if ("letterSpacing" in offCtx) {
        (offCtx as unknown as { letterSpacing: string }).letterSpacing = isMobile
          ? "0.04em"
          : "0.05em";
      }
      offCtx.textAlign = "left";
      offCtx.textBaseline = "alphabetic";
      offCtx.fillStyle = "#ffffff";
      offCtx.fillText(content, padding - left, padding + ascent);

      const imageData = offCtx.getImageData(
        0,
        0,
        offscreen.width,
        offscreen.height,
      );

      // Uniform sub-pixel sampling: step = 2 preserves full character fidelity with zero moire aliasing
      const step = 2;

      const rawSamples = sampleInkCells(
        imageData.data,
        offscreen.width,
        offscreen.height,
        step,
      );

      // Map 1:1 from ink cells: eliminates 1D raster decimation stripes and missing stroke artifacts
      const targets: Target[] = rawSamples.map((sample) => ({
        x: width / 2 - offscreen.width / 2 + sample.x,
        y: height / 2 - offscreen.height / 2 + sample.y,
        alpha: sample.alpha,
      }));

      const baseRgb = hexToRgb(color);
      const highlightRgb = hexToRgb(highlightColor);
      const effectiveScatter = isMobile ? scatter * 0.65 : scatter;
      const baseParticleSize = isMobile ? particleSize * 0.9 : particleSize;

      particles = targets.map((target, index) => {
        const seed = ((index * 9301 + 49297) % 233280) / 233280;
        const depth =
          0.45 + (((index * 233 + 97) % 1000) / 1000) * 0.9;
        const blend =
          baseRgb && highlightRgb
            ? clamp(
                target.x / Math.max(1, width) + (seed - 0.5) * 0.35,
                0,
                1,
              )
            : 0;
        const particleColor =
          baseRgb && highlightRgb
            ? rgbToCss(mixRgb(baseRgb, highlightRgb, blend))
            : color;
        const angle = seed * Math.PI * 2;
        const distance =
          (reducedMotion ? 0 : effectiveScatter) * (0.35 + depth * 0.75);
        const startX =
          target.x +
          Math.cos(angle) * distance +
          (seed - 0.5) * effectiveScatter * 0.45;
        const startY =
          target.y +
          Math.sin(angle) * distance +
          (depth - 0.9) * effectiveScatter * 0.45;

        return {
          x: reducedMotion ? target.x : startX,
          y: reducedMotion ? target.y : startY,
          startX,
          startY,
          targetX: target.x,
          targetY: target.y,
          size: Math.max(
            1.0,
            baseParticleSize * (0.85 + target.alpha * 0.3),
          ),
          color: particleColor,
          seed,
          depth,
          delay: seed * stagger,
        };
      });

      pointer.x = width / 2;
      pointer.y = height / 2;
      pointer.smoothX = pointer.x;
      pointer.smoothY = pointer.y;

      if (reducedMotion) {
        particles.forEach((particle) => {
          particle.x = particle.targetX;
          particle.y = particle.targetY;
          particle.startX = particle.targetX;
          particle.startY = particle.targetY;
          particle.delay = 0;
        });
        gathering = false;
      } else {
        startGather(false);
      }

      ensureRenderLoop();
    };

    const queueSample = (): void => {
      if (resizeFrame) window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(sampleText);
    };

    const updatePointer = (clientX: number, clientY: number): void => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = clientX - rect.left;
      pointer.y = clientY - rect.top;
      if (!pointer.active) {
        pointer.smoothX = pointer.x;
        pointer.smoothY = pointer.y;
      }
      pointer.active = true;
    };

    const handlePointerMove = (event: PointerEvent): void => {
      updatePointer(event.clientX, event.clientY);
      ensureRenderLoop();
    };

    const handlePointerDown = (event: PointerEvent): void => {
      if (event.pointerType === "touch") {
        try {
          if (canvas.hasPointerCapture(event.pointerId)) {
            canvas.releasePointerCapture(event.pointerId);
          }
        } catch {
          // ignore
        }
      }
      updatePointer(event.clientX, event.clientY);
      if (trigger === "hover") startGather(true);
      ensureRenderLoop();
    };

    const handlePointerUp = (): void => {
      pointer.active = false;
    };

    const handlePointerCancel = (): void => {
      pointer.active = false;
    };

    const handlePointerLeave = (event: PointerEvent): void => {
      if (event.pointerType !== "touch") {
        pointer.active = false;
      }
    };

    const handlePointerEnter = (event: PointerEvent): void => {
      if (event.pointerType !== "touch") {
        updatePointer(event.clientX, event.clientY);
        if (trigger === "hover") startGather(true);
        ensureRenderLoop();
      }
    };

    const handleClick = (): void => {
      if (trigger === "click") startGather(true);
    };

    const reduceMotionQuery = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    );
    const handleReduceMotionChange = (event: MediaQueryListEvent): void => {
      reducedMotion = event.matches;
      void sampleText();
    };

    const handleVisibilityChange = (): void => {
      isTabActive = !document.hidden;
      if (isVisible && isTabActive) {
        ensureRenderLoop();
      } else if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = null;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isVisible = entry?.isIntersecting ?? true;
        if (isVisible && isTabActive) {
          ensureRenderLoop();
        } else if (animationFrame !== null) {
          window.cancelAnimationFrame(animationFrame);
          animationFrame = null;
        }
      },
      { threshold: 0.05 },
    );

    reduceMotionQuery?.addEventListener("change", handleReduceMotionChange);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    canvas.addEventListener("pointerenter", handlePointerEnter);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointercancel", handlePointerCancel);
    canvas.addEventListener("pointerleave", handlePointerLeave);
    canvas.addEventListener("click", handleClick);

    const resizeObserver = new ResizeObserver(queueSample);
    resizeObserver.observe(container);
    observer.observe(container);
    void sampleText();

    return () => {
      buildId += 1;
      resizeObserver.disconnect();
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      reduceMotionQuery?.removeEventListener(
        "change",
        handleReduceMotionChange,
      );
      canvas.removeEventListener("pointerenter", handlePointerEnter);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointercancel", handlePointerCancel);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
      canvas.removeEventListener("click", handleClick);

      if (animationFrame !== null)
        window.cancelAnimationFrame(animationFrame);
      if (resizeFrame !== null) window.cancelAnimationFrame(resizeFrame);
    };
  }, [
    text,
    particleSize,
    density,
    color,
    highlightColor,
    scatter,
    gatherDuration,
    stagger,
    pointerRepel,
    repelRadius,
    idleDrift,
    trigger,
    fontSize,
    fontWeight,
    fontFamily,
    glow,
  ]);

  return (
    <div
      ref={containerRef}
      className={`relative block h-full min-h-[240px] w-full overflow-hidden touch-pan-y ${className}`}
      style={style}
      aria-label={text}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block h-full w-full touch-pan-y"
        aria-hidden="true"
      />
      <span className="sr-only">{text}</span>
    </div>
  );
};

export default ParticleText;

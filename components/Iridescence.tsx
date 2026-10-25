"use client";

import { Color, Mesh, Program, Renderer, Triangle } from "ogl";
import type { HTMLAttributes } from "react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec3 uColor;
uniform vec3 uResolution;
uniform vec2 uMouse;
uniform float uAmplitude;
uniform float uSpeed;

varying vec2 vUv;

void main() {
  float mr = min(uResolution.x, uResolution.y);
  vec2 uv = (vUv.xy * 2.0 - 1.0) * uResolution.xy / mr;

  uv += (uMouse - vec2(0.5)) * (uAmplitude * 0.6);

  float t = uTime * 0.35 * uSpeed;

  // Smooth multi-frequency domain warping without chaotic caustic seams
  vec2 p = uv * 0.85;
  float a = 0.0;
  float d = -t * 0.7;

  for (float i = 1.0; i <= 6.0; ++i) {
    p += vec2(
      sin(p.y * i * 0.55 + t * 0.35 + i * 1.2) * 0.28,
      cos(p.x * i * 0.55 - t * 0.3 + i * 1.5) * 0.28
    );
    a += cos(length(p) * 1.6 - t * 0.5 + i);
    d += sin(p.x * 1.1 + p.y * 1.1 + t * 0.4 + a * 0.15);
  }

  // Futuristic dark neon palette: cyan, deep electric blue, purple-violet
  vec3 colCyan = vec3(0.14, 0.82, 0.98);
  vec3 colBlue = vec3(0.08, 0.32, 0.88);
  vec3 colPurple = vec3(0.56, 0.22, 0.92);

  float w1 = sin(d * 0.85 + a * 0.55) * 0.5 + 0.5;
  float w2 = cos(a * 0.85 - d * 0.45) * 0.5 + 0.5;

  vec3 col = mix(colBlue, colCyan, w1);
  col = mix(col, colPurple, w2 * 0.6);
  col *= (sin(a + d + t * 0.8) * 0.2 + 0.8);
  col *= uColor;

  // Seamless elliptical perimeter falloff to cleanly merge into background
  vec2 normCoord = (vUv.xy * 2.0 - 1.0);
  float vignette = smoothstep(1.35, 0.35, length(normCoord));

  gl_FragColor = vec4(col * vignette, 1.0);
}
`;

type IridescenceProps = Omit<HTMLAttributes<HTMLDivElement>, "color"> & {
  color?: [number, number, number];
  speed?: number;
  amplitude?: number;
  mouseReact?: boolean;
};

export default function Iridescence({
  color = [1, 1, 1],
  speed = 1,
  amplitude = 0.1,
  mouseReact = true,
  className,
  ...rest
}: IridescenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ alpha: true });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);

    let rafId = 0;

    const geometry = new Triangle(gl);
    const program: Program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new Color(...color) },
        uResolution: {
          value: new Color(
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height,
          ),
        },
        uMouse: { value: new Float32Array([mousePos.current.x, mousePos.current.y]) },
        uAmplitude: { value: amplitude },
        uSpeed: { value: speed },
      },
    });

    const resize = () => {
      const isMobile = window.innerWidth < 768;
      const scale = Math.min(window.devicePixelRatio || 1, isMobile ? 1 : 1.25);
      const width = Math.max(1, Math.floor(container.offsetWidth * scale));
      const height = Math.max(1, Math.floor(container.offsetHeight * scale));

      renderer.setSize(width, height);
      gl.canvas.style.width = `${container.offsetWidth}px`;
      gl.canvas.style.height = `${container.offsetHeight}px`;
      program.uniforms.uResolution.value = new Color(
        gl.canvas.width,
        gl.canvas.height,
        gl.canvas.width / gl.canvas.height,
      );
    };

    window.addEventListener("resize", resize);
    resize();

    const mesh = new Mesh(gl, { geometry, program });

    let isVisible = true;
    let isTabActive = !document.hidden;

    const renderFrame = (time: number) => {
      program.uniforms.uTime.value = time * 0.001;
      renderer.render({ scene: mesh });
    };

    const update = (time: number) => {
      if (isVisible && isTabActive) {
        renderFrame(time);
        rafId = window.requestAnimationFrame(update);
      } else {
        rafId = 0;
      }
    };

    const startLoop = () => {
      if (!rafId && isVisible && isTabActive) {
        rafId = window.requestAnimationFrame(update);
      }
    };

    const stopLoop = () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
        rafId = 0;
      }
    };

    startLoop();

    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
      if (isTabActive) {
        startLoop();
      } else {
        stopLoop();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isVisible = entry?.isIntersecting ?? true;
        if (isVisible) {
          startLoop();
        } else {
          stopLoop();
        }
      },
      { threshold: 0.05 },
    );
    observer.observe(container);

    container.appendChild(gl.canvas);

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = 1 - (event.clientY - rect.top) / rect.height;
      mousePos.current = { x, y };
      program.uniforms.uMouse.value[0] = x;
      program.uniforms.uMouse.value[1] = y;
    };

    if (mouseReact) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      stopLoop();
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("resize", resize);
      if (mouseReact) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
      if (container.contains(gl.canvas)) {
        container.removeChild(gl.canvas);
      }
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [color, speed, amplitude, mouseReact]);

  return <div ref={containerRef} className={cn("h-full w-full", className)} {...rest} />;
}

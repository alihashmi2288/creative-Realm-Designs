"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const ringVisualRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const dotVisualRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only initialize on devices with a fine pointer (mouse/trackpad) and standard motion
    const pointerQuery = window.matchMedia("(pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!pointerQuery.matches || motionQuery.matches) {
      return;
    }

    setIsEnabled(true);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHidden = true;
    let isHovered = false;
    let rafId: number | null = null;
    let isLooping = false;

    // Direct GPU translate3d updates (No CSS transition interference on coordinates)
    const updatePositions = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
    };

    const loop = () => {
      // Snappy and natural follow factor (0.28 gives fluid motion with zero perceptible delay)
      const ease = 0.28;
      const dx = mouseX - ringX;
      const dy = mouseY - ringY;

      ringX += dx * ease;
      ringY += dy * ease;

      updatePositions();

      // Idle sleep: if follower caught up within sub-pixel threshold, stop rAF to consume 0% CPU
      if (Math.abs(dx) < 0.15 && Math.abs(dy) < 0.15) {
        ringX = mouseX;
        ringY = mouseY;
        updatePositions();
        isLooping = false;
        rafId = null;
        return;
      }

      rafId = requestAnimationFrame(loop);
    };

    const startLoop = () => {
      if (!isLooping) {
        isLooping = true;
        rafId = requestAnimationFrame(loop);
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (isHidden) {
        isHidden = false;
        // Snap directly to position on first appearance to prevent swooping from off-screen
        ringX = mouseX;
        ringY = mouseY;
        updatePositions();

        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }

      startLoop();
    };

    // Fast interactive hover check in single optimized query
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], .interactive, [data-cursor-interactive], summary, label'
      );

      const nextHovered = Boolean(interactive);
      if (nextHovered !== isHovered) {
        isHovered = nextHovered;
        if (ringVisualRef.current) {
          ringVisualRef.current.classList.toggle("is-hovered", isHovered);
        }
        if (dotVisualRef.current) {
          dotVisualRef.current.classList.toggle("is-hovered", isHovered);
        }
      }
    };

    const onMouseDown = () => {
      if (ringVisualRef.current) ringVisualRef.current.classList.add("is-clicked");
      if (dotVisualRef.current) dotVisualRef.current.classList.add("is-clicked");
    };

    const onMouseUp = () => {
      if (ringVisualRef.current) ringVisualRef.current.classList.remove("is-clicked");
      if (dotVisualRef.current) dotVisualRef.current.classList.remove("is-clicked");
    };

    const onMouseLeave = () => {
      isHidden = true;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
      if (rafId) {
        cancelAnimationFrame(rafId);
        isLooping = false;
        rafId = null;
      }
    };

    const onMouseEnter = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      ringX = mouseX;
      ringY = mouseY;
      isHidden = false;
      updatePositions();

      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        onMouseLeave();
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  if (!isEnabled) return null;

  return (
    <>
      {/* Precision Core Dot (Zero lag, instantaneous tracking) */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="custom-cursor-dot-wrap"
      >
        <div ref={dotVisualRef} className="custom-cursor-dot" />
      </div>

      {/* Smooth Trailing Follower Ring (60-120fps GPU accelerated, no composite repaint) */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="custom-cursor-ring-wrap"
      >
        <div ref={ringVisualRef} className="custom-cursor-ring" />
      </div>
    </>
  );
}

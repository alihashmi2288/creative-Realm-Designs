"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [isPointerDevice, setIsPointerDevice] = useState(false);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only initialize and bind event listeners on devices with a fine pointer (mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;
    setIsPointerDevice(true);

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let isHidden = true;
    let isHovered = false;
    let rafId: number;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (isHidden) {
        isHidden = false;
        if (cursorRef.current) cursorRef.current.style.opacity = "1";
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = 
        target.closest("button") || 
        target.closest("a") || 
        target.closest(".interactive") ||
        target.closest("input") ||
        target.closest("textarea");
      
      isHovered = !!interactive;
    };

    const handleMouseLeave = () => {
      isHidden = true;
      if (cursorRef.current) cursorRef.current.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      isHidden = false;
      if (cursorRef.current) cursorRef.current.style.opacity = "1";
    };

    // Smooth 60/120fps lerp loop without react re-renders
    const loop = () => {
      const ease = 0.18;
      currentX += (mouseX - currentX) * ease;
      currentY += (mouseY - currentY) * ease;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%) scale(${isHovered ? 2.2 : 1})`;
      }
      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!isPointerDevice) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference opacity-0 transition-transform duration-100 ease-out will-change-transform bg-white hidden md:block"
    />
  );
}

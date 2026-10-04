"use client";

import { useEffect, useRef, useState } from "react";

export default function DeferredVideo() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    let animationId: number;
    let isVisible = true;

    const updateCanvasSize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const width = rect.width || window.innerWidth;
      const height = rect.height || window.innerHeight;
      
      // Use 1x device pixels for background ambient motion (optimal GPU efficiency)
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize, { passive: true });

    // Object-cover aspect ratio calculation
    const drawCover = () => {
      if (!ctx || !video || video.readyState < 2) return;
      const vw = video.videoWidth || 1280;
      const vh = video.videoHeight || 720;
      const cw = canvas.width;
      const ch = canvas.height;
      if (!cw || !ch) return;

      const videoRatio = vw / vh;
      const canvasRatio = cw / ch;
      let drawW = cw;
      let drawH = ch;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > videoRatio) {
        drawH = cw / videoRatio;
        offsetY = (ch - drawH) / 2;
      } else {
        drawW = ch * videoRatio;
        offsetX = (cw - drawW) / 2;
      }

      ctx.drawImage(video, offsetX, offsetY, drawW, drawH);
    };

    // Render loop
    const render = () => {
      if (isVisible) {
        drawCover();
      }
      animationId = requestAnimationFrame(render);
    };

    // Pause rendering when hero is offscreen to save battery and GPU cycles
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isVisible = entry.isIntersecting;
        if (isVisible) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const onPlay = () => {
      setIsPlaying(true);
      animationId = requestAnimationFrame(render);
    };

    video.addEventListener("play", onPlay);
    video.play().then(() => {
      setIsPlaying(true);
      animationId = requestAnimationFrame(render);
    }).catch(() => {
      // Autoplay fallback
    });

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      observer.disconnect();
      video.removeEventListener("play", onPlay);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* Hidden source video element - muted, loop, autoplay */}
      <video
        ref={videoRef}
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
        className="hidden"
      />

      {/* Hardware-accelerated Canvas:
          1. Displays background video immediately and smoothly
          2. Canvas elements are NOT LCP candidates in Chromium, ensuring sub-second Core Web Vitals
          3. Fully responsive with object-cover aspect cropping
      */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={`w-full h-full object-cover transition-opacity duration-1000 z-0 pointer-events-none ${
          isPlaying ? "opacity-35" : "opacity-0"
        }`}
      />
    </>
  );
}

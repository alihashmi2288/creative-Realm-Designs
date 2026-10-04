"use client";

import { useEffect, useState } from "react";

export default function DeferredVideo() {
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    // Only load background video on desktop screens with fine pointer (mouse)
    const isDesktop = window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches;
    const isDataSaver = (navigator as unknown as { connection?: { saveData?: boolean } })?.connection?.saveData === true;

    if (!isDesktop || isDataSaver) {
      return;
    }

    const triggerDeferredLoad = () => {
      const timer = window.setTimeout(() => {
        setLoadVideo(true);
      }, 2500);
      return () => clearTimeout(timer);
    };

    if ("requestIdleCallback" in window) {
      const idleId = (window as unknown as { requestIdleCallback: (cb: () => void, opts: { timeout: number }) => number }).requestIdleCallback(
        triggerDeferredLoad,
        { timeout: 4000 }
      );
      return () => {
        if ("cancelIdleCallback" in window) {
          (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(idleId);
        }
      };
    } else {
      return triggerDeferredLoad();
    }
  }, []);

  if (!loadVideo) return null;

  return (
    <video 
      autoPlay 
      loop 
      muted 
      playsInline 
      preload="none"
      className="w-full h-full object-cover opacity-30 transition-opacity duration-1000 z-0"
    >
      <source src="/hero-video.mp4" type="video/mp4" />
    </video>
  );
}

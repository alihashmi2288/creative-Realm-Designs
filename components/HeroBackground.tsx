"use client";

import { useEffect, useState } from "react";

export default function HeroBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mount video after initial render so it plays across all devices (mobile & desktop)
    // without blocking the initial HTML/LCP paint
    setMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-obsidian overflow-hidden" aria-hidden="true">
      {/* Ambient Glow Lights - instant CSS paint */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] sm:h-[650px] bg-gradient-to-br from-violet-600/20 via-fuchsia-600/15 to-transparent rounded-full blur-[120px] pointer-events-none"
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-amber-500/10 via-rose-500/10 to-transparent rounded-full blur-[100px] pointer-events-none"
      />

      {/* Background Video - Active on all devices */}
      {mounted && (
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="none"
          className="w-full h-full object-cover opacity-30 transition-opacity duration-700"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      )}

      {/* Atmospheric dark gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-obsidian pointer-events-none" />
    </div>
  );
}

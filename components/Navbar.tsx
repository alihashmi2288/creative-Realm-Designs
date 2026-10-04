"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/portfolio" },
  { name: "About Agency", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open and close on Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "unset";
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <header className={`fixed top-0 w-full border-b border-white/10 transition-colors duration-300 ${isOpen ? "bg-black z-[1000]" : "bg-black/60 backdrop-blur-3xl z-[100]"}`}>
      <nav aria-label="Main Navigation" className="max-w-7xl mx-auto px-6 sm:px-12 h-20 sm:h-24 flex justify-between items-center relative z-[1000]">
        <Link 
          href="/" 
          prefetch={false}
          className="text-xl sm:text-2xl font-black tracking-tighter text-white uppercase font-display z-[1000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg"
          aria-label="Creative Realm Homepage"
        >
          CREATIVE <span className="gradient-text">REALM</span>
        </Link>
        
        <div className="hidden md:flex gap-10 items-center h-full" role="menubar">
          {navLinks.slice(0, 4).map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                prefetch={false}
                role="menuitem"
                aria-current={isActive ? "page" : undefined}
                className={`relative px-1 font-display font-bold text-xs uppercase tracking-[0.2em] transition-colors duration-200 h-full flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-primary ${
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <span
                    className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-violet-primary shadow-[0_0_10px_rgba(208,188,255,0.7)]"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </div>
        
        <div className="flex items-center gap-4 z-[1000]">
          <Link 
            href="/contact" 
            prefetch={false}
            aria-label="Start a project with Creative Realm"
            className="group relative hidden sm:flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-full"
          >
            <span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-white group-hover:text-violet-primary transition-colors">Start a Project</span>
            <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-violet-primary group-hover:text-black group-hover:border-violet-primary transition-all">
               <ArrowRight size={14} aria-hidden="true" />
            </div>
          </Link>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-primary rounded-lg z-[1000] cursor-pointer"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Hardware-accelerated CSS transition */}
      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        className={`fixed inset-0 bg-black z-[999] md:hidden flex flex-col pt-32 px-10 transition-all duration-300 ease-out ${
          isOpen 
            ? "opacity-100 pointer-events-auto translate-y-0" 
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex flex-col gap-6" role="menu">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <div key={link.name}>
                <Link
                  href={link.href}
                  prefetch={false}
                  role="menuitem"
                  aria-current={isActive ? "page" : undefined}
                  className={`text-3xl font-black font-display uppercase tracking-tight transition-colors ${
                    isActive ? "gradient-text" : "text-white hover:text-violet-primary"
                  }`}
                >
                  {link.name}
                </Link>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <Link 
            href="/contact" 
            prefetch={false}
            className="btn-primary w-full text-center text-xs uppercase tracking-widest py-3.5 block mb-8"
          >
            REQUEST PROJECT PROPOSAL
          </Link>
          <div className="flex gap-6 text-gray-400 font-display text-xs uppercase tracking-wider">
            <a href="mailto:hello@creativerealm.co.uk" className="hover:text-white">Email Us</a>
            <span>•</span>
            <a href="tel:+442079460123" className="hover:text-white">+44 (0)20 7946 0123</a>
          </div>
        </div>
      </div>
    </header>
  );
}

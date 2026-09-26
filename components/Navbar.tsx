"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Agency", href: "/about" },
  { name: "Expertise", href: "/services" },
  { name: "Work", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <header className={`fixed top-0 w-full border-b border-white/5 transition-colors duration-300 ${isOpen ? "bg-black z-[1000]" : "bg-black/40 backdrop-blur-3xl z-[100]"}`}>
      <nav aria-label="Main Navigation" className="max-w-7xl mx-auto px-8 h-24 flex justify-between items-center relative z-[1000]">
        <Link href="/" className="text-2xl font-black tracking-tighter text-white uppercase font-display z-[1000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg">
          CREATIVE <span className="gradient-text">REALM</span>
        </Link>
        
        <div className="hidden md:flex gap-12 items-center h-full" role="menubar">
          {navLinks.slice(0, 4).map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                role="menuitem"
                aria-current={isActive ? "page" : undefined}
                className={`relative px-1 font-display font-black text-xs uppercase tracking-[0.2em] transition-colors duration-300 h-full flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-primary ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-violet-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
        
        <div className="flex items-center gap-6 z-[1000]">
          <Link 
            href="/contact" 
            aria-label="Start a project with Creative Realm"
            className="group relative hidden sm:flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-full"
          >
            <span className="font-display font-black text-xs uppercase tracking-[0.2em] text-white group-hover:text-violet-primary transition-colors">Start a Project</span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-violet-primary group-hover:text-black group-hover:border-violet-primary transition-all">
               <ArrowRight size={16} aria-hidden="true" />
            </div>
          </Link>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-primary rounded-lg z-[1000]"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={32} aria-hidden="true" /> : <Menu size={32} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[999] md:hidden flex flex-col pt-40 px-12"
          >
            <div className="flex flex-col gap-6" role="menu">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.03 }}
                  >
                    <Link
                      href={link.href}
                      role="menuitem"
                      aria-current={isActive ? "page" : undefined}
                      className={`text-4xl font-black font-display uppercase tracking-tighter transition-colors ${
                        isActive ? "gradient-text" : "text-white hover:text-violet-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="mt-16 pb-12">
              <p className="text-gray-400 font-display uppercase text-xs tracking-[0.4em] mb-6">Let's Connect</p>
              <div className="flex flex-col gap-4">
                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white font-display font-bold hover:text-violet-primary transition-colors uppercase tracking-widest text-xs">Instagram</a>
                 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white font-display font-bold hover:text-violet-primary transition-colors uppercase tracking-widest text-xs">LinkedIn</a>
                 <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-white font-display font-bold hover:text-violet-primary transition-colors uppercase tracking-widest text-xs">Twitter / X</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

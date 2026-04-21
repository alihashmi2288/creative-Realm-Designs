"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Agency", href: "/about" },
  { name: "Expertise", href: "/services" },
  { name: "Work", href: "/portfolio" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/40 backdrop-blur-3xl">
      <nav className="max-w-7xl mx-auto px-8 h-24 flex justify-between items-center">
        <Link href="/" className="text-2xl font-black tracking-tighter text-white uppercase font-display interactive">
          CREATIVE <span className="gradient-text">REALM</span>
        </Link>
        
        <div className="hidden md:flex gap-12 items-center h-full">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-1 font-display font-black text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 h-full flex items-center interactive ${
                  isActive ? "text-white" : "text-gray-500 hover:text-white"
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
        
        <div className="flex items-center gap-6">
          <Link href="/contact" className="group relative hidden sm:flex items-center gap-2 interactive">
            <span className="font-display font-black text-[10px] uppercase tracking-[0.2em] text-white group-hover:text-violet-primary transition-colors">Start a Project</span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-violet-primary group-hover:text-black group-hover:border-violet-primary transition-all">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </div>
          </Link>
          <button className="md:hidden text-white interactive">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

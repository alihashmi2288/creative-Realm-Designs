"use client";

import Link from "next/link";

const socialLinks = [
  { label: "Follow us on X (Twitter)", icon: "𝕏", href: "https://x.com" },
  { label: "Connect with us on LinkedIn", icon: "in", href: "https://linkedin.com" },
  { label: "View our work on Behance", icon: "be", href: "https://behance.net" },
  { label: "See our designs on Dribbble", icon: "dr", href: "https://dribbble.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-24 relative overflow-hidden" role="contentinfo">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-4">
            <h3 className="text-white font-display text-3xl font-black mb-8 uppercase tracking-tighter">CREATIVE <span className="gradient-text">REALM</span></h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-10 font-display max-w-sm">
              We define the next generation of digital experiences. Merging art, strategy, and technology into seamless products.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ label, icon, href }) => (
                <a 
                  key={label} 
                  href={href} 
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all text-white font-bold interactive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-primary"
                >
                  <span aria-hidden="true">{icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2 lg:ml-auto">
            <h4 className="text-white font-display text-xs font-bold uppercase tracking-[0.3em] mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-display text-gray-400">
              <li><Link href="/" className="hover:text-violet-primary transition-colors focus-visible:outline-none focus-visible:underline">Home</Link></li>
              <li><Link href="/about" className="hover:text-violet-primary transition-colors focus-visible:outline-none focus-visible:underline">Agency</Link></li>
              <li><Link href="/services" className="hover:text-violet-primary transition-colors focus-visible:outline-none focus-visible:underline">Expertise</Link></li>
              <li><Link href="/portfolio" className="hover:text-violet-primary transition-colors focus-visible:outline-none focus-visible:underline">Work</Link></li>
              <li><Link href="/contact" className="hover:text-violet-primary transition-colors focus-visible:outline-none focus-visible:underline">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-display text-xs font-bold uppercase tracking-[0.3em] mb-8">Expertise</h4>
            <ul className="space-y-4 text-sm font-display text-gray-400">
              <li className="hover:text-white transition-colors cursor-default">UI/UX Design</li>
              <li className="hover:text-white transition-colors cursor-default">Web Development</li>
              <li className="hover:text-white transition-colors cursor-default">Web3 Solutions</li>
              <li className="hover:text-white transition-colors cursor-default">Brand Identity</li>
              <li className="hover:text-white transition-colors cursor-default">AI Integration</li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-white font-display text-xs font-bold uppercase tracking-[0.3em] mb-8">Newsletter</h4>
            <p className="text-gray-400 text-sm font-display mb-6">Get the latest insights on design and technology.</p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter-email" className="sr-only">Email address for newsletter</label>
              <input 
                id="newsletter-email"
                name="email"
                type="email" 
                required
                autoComplete="email"
                placeholder="email@example.com" 
                className="w-full bg-white/5 border border-white/20 rounded-xl px-6 py-4 text-white font-display placeholder-gray-400 focus:outline-none focus:border-violet-primary focus-visible:ring-2 focus-visible:ring-violet-primary transition-colors"
              />
              <button 
                type="submit"
                aria-label="Subscribe to newsletter"
                className="absolute right-2 top-2 bottom-2 px-6 bg-violet-primary text-black font-black font-display text-xs uppercase tracking-widest rounded-lg hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-display uppercase tracking-widest text-gray-400">
          <div className="flex flex-wrap gap-8">
            <p>© {new Date().getFullYear()} Creative Realm. UK Reg #12345678.</p>
            <p>Built with Passion & Code.</p>
          </div>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px] translate-y-1/2 translate-x-1/2 pointer-events-none" aria-hidden="true" />
    </footer>
  );
}

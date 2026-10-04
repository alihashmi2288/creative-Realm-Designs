import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

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
            <h3 className="text-white font-display text-3xl font-black mb-6 uppercase tracking-tighter">
              CREATIVE <span className="gradient-text">REALM</span>
            </h3>
            <p className="text-gray-300 text-base leading-relaxed mb-8 font-display max-w-sm">
              We design, build, and optimize high-converting websites for ambitious brands. Bespoke UI/UX, fast Next.js engineering, and organic Google SEO.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ label, icon, href }) => (
                <a 
                  key={label} 
                  href={href} 
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all text-white font-bold interactive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-primary"
                >
                  <span aria-hidden="true">{icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2 lg:ml-auto">
            <h4 className="text-white font-display text-xs font-bold uppercase tracking-[0.3em] mb-6">Navigation</h4>
            <ul className="space-y-3.5 text-sm font-display text-gray-400">
              <li><Link href="/" prefetch={false} className="hover:text-violet-primary transition-colors focus-visible:outline-none focus-visible:underline">Home</Link></li>
              <li><Link href="/about" prefetch={false} className="hover:text-violet-primary transition-colors focus-visible:outline-none focus-visible:underline">About Agency</Link></li>
              <li><Link href="/services" prefetch={false} className="hover:text-violet-primary transition-colors focus-visible:outline-none focus-visible:underline">Services & Pricing</Link></li>
              <li><Link href="/portfolio" prefetch={false} className="hover:text-violet-primary transition-colors focus-visible:outline-none focus-visible:underline">Case Studies</Link></li>
              <li><Link href="/contact" prefetch={false} className="hover:text-violet-primary transition-colors focus-visible:outline-none focus-visible:underline">Get in Touch</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-display text-xs font-bold uppercase tracking-[0.3em] mb-6">Core Services</h4>
            <ul className="space-y-3.5 text-sm font-display text-gray-400">
              <li><Link href="/services" prefetch={false} className="hover:text-violet-primary transition-colors">Bespoke Website Design</Link></li>
              <li><Link href="/services" prefetch={false} className="hover:text-violet-primary transition-colors">Next.js Web Development</Link></li>
              <li><Link href="/services" prefetch={false} className="hover:text-violet-primary transition-colors">SEO & Google Visibility</Link></li>
              <li><Link href="/services" prefetch={false} className="hover:text-violet-primary transition-colors">Mobile Speed Optimization</Link></li>
              <li><Link href="/services" prefetch={false} className="hover:text-violet-primary transition-colors">Conversion Rate Audits</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-display text-xs font-bold uppercase tracking-[0.3em] mb-6">Strategy Briefing</h4>
            <p className="text-gray-400 text-xs sm:text-sm font-display mb-4">
              Get monthly actionable tips on website conversions, speed optimization, and search rankings.
            </p>
            <NewsletterForm />
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-display uppercase tracking-widest text-gray-400">
          <div className="flex flex-wrap gap-6 text-center md:text-left">
            <p suppressHydrationWarning>© {new Date().getFullYear()} Creative Realm Designs Ltd. Registered in England & Wales.</p>
            <p>Engineered for Speed & Conversions.</p>
          </div>
          <div className="flex gap-6">
            <Link href="/contact" prefetch={false} className="hover:text-white transition-colors">Start Project</Link>
            <Link href="/portfolio" prefetch={false} className="hover:text-white transition-colors">Case Studies</Link>
            <Link href="/services" prefetch={false} className="hover:text-white transition-colors">Services</Link>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px] translate-y-1/2 translate-x-1/2 pointer-events-none" aria-hidden="true" />
    </footer>
  );
}

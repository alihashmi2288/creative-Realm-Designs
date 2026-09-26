import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0b0b0f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Creative Realm Designs | Website Design, Development & SEO Agency",
    template: "%s | Creative Realm Designs",
  },
  description: "A premier digital agency specializing in bespoke website design, ultra-fast Next.js web development, and Google SEO growth that drives qualified business inquiries.",
  keywords: ["digital agency", "website design", "web development", "SEO agency", "Next.js development", "UI/UX design", "Core Web Vitals"],
  authors: [{ name: "Creative Realm Designs" }],
  metadataBase: new URL("https://creative-realm-designs-getj.vercel.app"),
  openGraph: {
    title: "Creative Realm Designs | Website Design, Development & SEO Agency",
    description: "A premier digital agency specializing in bespoke website design, ultra-fast Next.js web development, and Google SEO growth.",
    url: "https://creative-realm-designs-getj.vercel.app",
    siteName: "Creative Realm Designs",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Realm Designs | Website Design, Development & SEO Agency",
    description: "A premier digital agency specializing in bespoke website design, ultra-fast Next.js web development, and Google SEO growth.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-obsidian text-on-background min-h-screen flex flex-col relative antialiased selection:bg-violet-primary selection:text-obsidian`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10001] focus:px-6 focus:py-3 focus:bg-violet-primary focus:text-black focus:font-bold focus:rounded-full">
          Skip to main content
        </a>
        <div className="gradient-mesh-fixed" aria-hidden="true" />
        <div className="noise-overlay" aria-hidden="true" />
        <CustomCursor />
        <Navbar />
        <main id="main-content" className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

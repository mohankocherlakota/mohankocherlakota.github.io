import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { AISystems } from "@/components/sections/AISystems";
import { Experience } from "@/components/sections/Experience";
import { Labs } from "@/components/sections/Labs";
import { Writing } from "@/components/sections/Writing";
import { Technology } from "@/components/sections/Technology";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { SectionRail } from "@/components/sections/SectionRail";

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-[#d7ff00] focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:font-bold focus:uppercase focus:tracking-wide focus:text-black"
      >
        Skip to content
      </a>
      <Nav />
      <SectionRail />
      <main id="main-content">
        <Hero />
        <AISystems />
        <Experience />
        <Labs />
        <Writing />
        <Technology />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

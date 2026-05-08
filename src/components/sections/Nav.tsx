import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems, hero } from "@/content/portfolio";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("portfolio-light", light);
    return () => document.documentElement.classList.remove("portfolio-light");
  }, [light]);

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 px-5 py-5 md:px-8 md:py-7"
    >
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between">
        <div className="relative">
          <button
            type="button"
            className="inline-flex h-14 w-14 items-center justify-center border border-white/10 bg-black/80 text-neutral-400 shadow-2xl transition-colors hover:text-white md:h-[72px] md:w-[72px]"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-7 w-7" strokeWidth={2} /> : <Menu className="h-7 w-7" strokeWidth={2} />}
          </button>

          {open ? (
            <nav className="absolute left-3 top-full mt-3 w-[220px] rounded-lg border border-white/10 bg-black/95 p-4 shadow-2xl backdrop-blur-xl">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block px-2 py-1.5 font-display text-lg font-black uppercase leading-none tracking-tight transition-colors hover:text-[#d7ff00]",
                    item.id === "home" ? "text-[#d7ff00]" : "text-white",
                  )}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/Mohan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-3 block border-t border-white/10 px-2 pt-3 font-display text-lg font-black uppercase leading-none tracking-tight text-white transition-colors hover:text-[#d7ff00]"
              >
                Resume
              </a>
            </nav>
          ) : null}
        </div>

        <a
          href="#home"
          aria-label={`${hero.name} home`}
          className="font-signature text-4xl leading-none text-white md:text-5xl"
        >
          {hero.initials}
        </a>

        <button
          type="button"
          onClick={() => setLight((v) => !v)}
          className="relative h-8 w-16 rounded-full bg-white/10 p-1 ring-1 ring-white/10 transition-opacity hover:opacity-80 md:h-10 md:w-20"
          aria-label="Toggle theme"
          aria-pressed={light}
        >
          <span
            className={cn(
              "block h-6 w-6 rounded-full bg-white shadow-lg transition-transform md:h-8 md:w-8",
              light && "translate-x-8 md:translate-x-10",
            )}
          />
        </button>
      </div>
    </header>
  );
}

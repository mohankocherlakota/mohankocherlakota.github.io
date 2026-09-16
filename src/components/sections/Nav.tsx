import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, hero } from "@/content/portfolio";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7ff00] focus-visible:ring-offset-2 focus-visible:ring-offset-black";

export function Nav() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function close() {
      setOpen(false);
      toggleRef.current?.focus();
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }

    function onPointerDown(event: PointerEvent) {
      const target = event.target as Node;
      if (menuRef.current?.contains(target) || toggleRef.current?.contains(target)) return;
      setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-5 py-5 md:px-8 md:py-7">
      <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-[1fr_auto_1fr] items-center lg:flex lg:justify-between">
        <div className="relative justify-self-start lg:hidden">
          <button
            ref={toggleRef}
            type="button"
            className={`inline-flex h-14 w-14 items-center justify-center border border-white/10 bg-black/80 text-neutral-200 shadow-2xl transition-colors hover:text-white md:h-[72px] md:w-[72px] ${focusRing}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="primary-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-7 w-7" strokeWidth={2} /> : <Menu className="h-7 w-7" strokeWidth={2} />}
          </button>

          {open ? (
            <div
              ref={menuRef}
              id="primary-menu"
              className="absolute left-3 top-full mt-3 w-[220px] rounded-lg border border-white/10 bg-black/95 p-4 shadow-2xl backdrop-blur-xl"
            >
              <nav aria-label="Sections">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={`block rounded px-2 py-1.5 font-display text-lg font-black uppercase leading-none tracking-tight text-white transition-colors hover:text-[#d7ff00] ${focusRing}`}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="/Mohan_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className={`mt-3 block border-t border-white/10 px-2 pt-3 font-display text-lg font-black uppercase leading-none tracking-tight text-white transition-colors hover:text-[#d7ff00] ${focusRing}`}
                >
                  Resume
                </a>
              </nav>
            </div>
          ) : null}
        </div>

        <a
          href="#home"
          aria-label={`${hero.name} home`}
          className={`col-start-2 rounded font-signature text-4xl leading-none text-white md:text-5xl lg:col-auto ${focusRing}`}
        >
          {hero.initials}
        </a>

        <nav
          aria-label="Sections"
          className="col-start-3 hidden justify-self-end lg:col-auto lg:flex lg:items-center lg:gap-5"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`whitespace-nowrap rounded px-1 py-1 font-display text-xs font-bold uppercase tracking-[0.18em] text-neutral-300 transition-colors hover:text-[#d7ff00] ${focusRing}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/Mohan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`whitespace-nowrap rounded border border-[#d7ff00]/40 px-3 py-1.5 font-display text-xs font-bold uppercase tracking-[0.18em] text-[#d7ff00] transition-colors hover:bg-[#d7ff00] hover:text-black ${focusRing}`}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}

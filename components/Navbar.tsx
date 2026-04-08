"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Resume", href: "/resume" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuId = "mobile-navigation";

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "absolute inset-0 transition-all duration-300 ease-out",
          isScrolled
            ? "border-b border-cyan-300/18 bg-slate-950/82 shadow-[0_12px_30px_rgba(2,6,23,0.42),0_0_20px_rgba(34,211,238,0.05)] backdrop-blur-2xl"
            : "border-b border-cyan-300/12 bg-slate-950/64 shadow-[0_8px_20px_rgba(2,6,23,0.28)] backdrop-blur-xl",
        )}
      />
      <Container
        className={cn(
          "relative flex items-center justify-between transition-all duration-300 ease-out",
          isScrolled ? "h-[4.4rem]" : "h-20",
        )}
      >
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-full px-1.5 py-1 transition-all duration-300 ease-out hover:bg-cyan-300/[0.06]"
          onClick={() => setMenuOpen(false)}
        >
          <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.6)] transition-all duration-300 ease-out group-hover:shadow-[0_0_20px_rgba(34,211,238,0.78)]" />
          <span className="bg-gradient-to-r from-slate-100 via-cyan-100 to-sky-200 bg-clip-text font-mono text-[0.62rem] tracking-[0.18em] text-transparent transition-all duration-300 ease-out group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.22)] sm:text-sm sm:tracking-[0.28em]">
            {siteConfig.name.toUpperCase()}
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "relative inline-flex items-center rounded-full px-3 py-2 text-sm text-slate-300/92 transition-all duration-300 ease-out",
                "after:absolute after:bottom-0 after:left-3 after:right-3 after:h-px after:origin-left after:scale-x-0 after:bg-cyan-300/80 after:transition-transform after:duration-300 after:ease-out",
                "hover:bg-cyan-300/[0.08] hover:text-cyan-200 hover:after:scale-x-100",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
                isActive(item.href) &&
                  "bg-cyan-300/[0.1] text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.14)] after:scale-x-100",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls={mobileMenuId}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/24 bg-slate-900/55 text-cyan-100 transition-all duration-300 ease-out hover:border-cyan-300/45 hover:bg-cyan-300/[0.1] hover:shadow-[0_0_16px_rgba(34,211,238,0.18)] md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id={mobileMenuId}
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="border-t border-cyan-300/12 bg-slate-950/84 backdrop-blur-2xl md:hidden"
          >
            <Container className="py-4">
              <nav aria-label="Mobile navigation" className="content-card flex flex-col rounded-2xl p-2">
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "rounded-xl px-4 py-3 text-sm transition-all duration-300 ease-out",
                      "hover:bg-cyan-300/10 hover:text-cyan-100",
                      isActive(item.href)
                        ? "bg-cyan-300/12 text-cyan-100 shadow-[0_0_16px_rgba(34,211,238,0.1)]"
                        : "text-slate-200",
                    )}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

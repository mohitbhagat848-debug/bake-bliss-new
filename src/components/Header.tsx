import { Link, useRouterState } from "@tanstack/react-router";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "Our Story" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const { count, open } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "mx-auto mt-3 flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 md:px-3 md:py-2",
          scrolled
            ? "max-w-5xl glass-strong shadow-luxe mx-3 md:mx-auto"
            : "max-w-7xl mx-3 md:mx-auto bg-transparent",
        )}
      >
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2.5 pl-2">
          <span className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full gradient-gold shadow-glow ring-1 ring-aubergine/20">
            <span className="font-display text-xl font-semibold text-aubergine">B</span>
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </span>
          <span className="shimmer-gold font-display text-2xl font-semibold tracking-wide drop-shadow-sm md:text-[1.7rem]">
            Bake <span className="font-script text-3xl md:text-4xl">&</span> Bliss
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-link"
              activeProps={{ className: "nav-link nav-link-active" }}
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-gold/25 via-champagne/30 to-blush/30 ring-1 ring-gold/40 shadow-soft"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </>
              )}
            </Link>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2 pr-1">
          <button onClick={open} aria-label="Open cart" className="btn-icon group">
            <ShoppingBag className="h-[18px] w-[18px] transition-transform group-hover:-rotate-6" />
            <AnimatePresence>
              {count > 0 && (
                <motion.span
                  key={count}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                  className="absolute -right-1 -top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full gradient-rose px-1 text-[10px] font-semibold text-cream shadow-soft"
                >
                  {count}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            className="btn-icon md:hidden"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={mobileOpen ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </motion.div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mx-3 mt-2 overflow-hidden rounded-3xl glass-strong shadow-luxe md:hidden"
          >
            <nav className="flex flex-col gap-1 p-3">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={item.to}
                    className="block rounded-2xl px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-aubergine/75 transition-all hover:bg-gradient-to-r hover:from-gold/15 hover:to-blush/20 hover:text-aubergine"
                    activeProps={{ className: "bg-gradient-to-r from-gold/25 to-blush/25 text-aubergine ring-1 ring-gold/40" }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

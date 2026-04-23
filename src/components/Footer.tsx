import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border/60 bg-gradient-to-b from-cream via-blush/30 to-blush/50 grain">
      {/* Decorative aurora blob */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl gradient-gold" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <h3 className="font-display text-4xl text-cocoa">
            Bake <span className="font-script text-gradient-gold">&</span> Bliss
          </h3>
          <div className="mt-3 h-px w-24 divider-gold" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Hand crafted cakes, pastries and bakes — made every morning with French butter,
            single origin chocolate and a great deal of love.
          </p>
          <div className="mt-7 flex gap-3">
            {[Instagram, Facebook, Twitter, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-cocoa/10 bg-card/70 text-foreground/70 backdrop-blur transition-all hover:-translate-y-1 hover:border-gold hover:text-aubergine hover:shadow-glow"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-xl text-cocoa">Explore</h4>
          <div className="mt-2 h-px w-10 divider-gold" />
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li><Link to="/menu" className="story-link hover:text-cocoa">Full Menu</Link></li>
            <li><Link to="/about" className="story-link hover:text-cocoa">Our Story</Link></li>
            <li><Link to="/contact" className="story-link hover:text-cocoa">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl text-cocoa">Visit</h4>
          <div className="mt-2 h-px w-10 divider-gold" />
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>12 Patisserie Lane</li>
            <li>Open 8am — 10pm</li>
            <li>+91 98 1234 5678</li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-border/60 px-5 py-6 text-center text-xs tracking-wide text-muted-foreground md:px-8">
        © {new Date().getFullYear()} Bake & Bliss · Crafted with butter, sugar and love.
      </div>
    </footer>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Award, Cake, Sparkles, Truck } from "lucide-react";
import heroCake from "@/assets/hero-cake.jpg";
import aboutSpread from "@/assets/about-spread.jpg";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bake & Bliss — Luxury Cakes, Pastries & Bakes" },
      {
        name: "description",
        content:
          "Discover hand crafted cakes, pastries, cheesecakes, donuts, brownies and more at Bake & Bliss — baked fresh every morning.",
      },
      { property: "og:title", content: "Bake & Bliss — Luxury Cakes & Bakes" },
      {
        property: "og:description",
        content: "Indulge in our artisan bakes — made with love, French butter and fine chocolate.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = PRODUCTS.filter((p) => p.tags?.includes("Bestseller")).slice(0, 4);
  const newArrivals = PRODUCTS.filter((p) => p.tags?.includes("New"));

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative isolate min-h-[100svh] overflow-hidden gradient-warm pt-28 md:pt-32">
        <div className="pointer-events-none absolute -left-32 top-32 h-96 w-96 rounded-full bg-rose/30 blur-3xl animate-blob-drift" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-[28rem] w-[28rem] rounded-full bg-gold/20 blur-3xl animate-blob-drift-slow" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:px-8 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cocoa/15 bg-cream/70 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-cocoa backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-gold animate-sparkle" /> Freshly baked daily
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-cocoa md:text-7xl lg:text-[5.25rem]">
              A little slice <br />
              of <span className="font-script text-gradient-gold">bliss</span>.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              Hand crafted cakes, pastries and patisserie made with French butter,
              single origin chocolate and a great deal of love.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/menu" className="btn-elegant btn-primary group">
                <span>Explore the Menu</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/about" className="btn-elegant btn-ghost">
                <span>Our Story</span>
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-cocoa/10 pt-6">
              {[
                { n: "12+", l: "Years baking" },
                { n: "60K", l: "Happy guests" },
                { n: "4.9★", l: "Rated love" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-2xl text-cocoa md:text-3xl">{s.n}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-tr from-gold/30 via-transparent to-rose/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-luxe">
              <img
                src={heroCake}
                alt="Two tier blush pink and ivory cake with raspberries, roses and gold leaf"
                width={1536}
                height={1024}
                className="h-full w-full object-cover animate-ken-burns"
              />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 bottom-8 hidden rounded-2xl bg-cream/95 px-5 py-4 shadow-luxe backdrop-blur md:block"
            >
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Today's pick</p>
              <p className="font-display text-lg text-cocoa">Rose & Raspberry Tier</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE BAND */}
      <section className="border-y border-border/60 bg-cream/60 py-5">
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-[marquee_35s_linear_infinite] gap-12 whitespace-nowrap pr-12 font-display text-2xl text-cocoa/70 md:text-3xl">
            {Array.from({ length: 2 }).flatMap((_, k) =>
              ["Cakes", "Pastries", "Cheesecakes", "Cupcakes", "Brownies", "Waffles", "Donuts", "Cookies"].map(
                (w, i) => (
                  <span key={`${k}-${i}`} className="inline-flex items-center gap-12">
                    {w}
                    <span className="text-gold">✦</span>
                  </span>
                ),
              ),
            )}
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Cake, title: "Baked Fresh Daily", text: "Every bake leaves the oven the same morning it reaches you." },
            { icon: Award, title: "Premium Ingredients", text: "French butter, Madagascan vanilla & Belgian chocolate." },
            { icon: Truck, title: "Doorstep Delivery", text: "Free same day delivery on orders above ₹499." },
          ].map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-3xl border border-border/70 bg-card p-7 shadow-soft card-lift"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl gradient-gold text-cocoa transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-xl text-cocoa">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Browse</p>
            <h2 className="mt-2 font-display text-4xl text-cocoa md:text-5xl">By category</h2>
          </div>
          <Link to="/menu" className="text-sm font-medium text-cocoa underline-offset-4 hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {CATEGORIES.map((cat, i) => {
            const sample = PRODUCTS.find((p) => p.category === cat)!;
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
              >
                <Link
                  to="/menu"
                  search={{ category: cat }}
                  className="group block overflow-hidden rounded-3xl bg-card shadow-soft card-lift"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-blush/30">
                    <img
                      src={sample.image}
                      alt={cat}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="px-4 py-3 text-center">
                    <p className="font-display text-lg text-cocoa">{cat}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Crowd favourites</p>
            <h2 className="mt-2 font-display text-4xl text-cocoa md:text-5xl">Bestsellers</h2>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="grid items-center gap-10 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blush/60 via-cream to-cream p-8 md:grid-cols-2 md:p-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Our story</p>
            <h2 className="mt-2 font-display text-4xl text-cocoa md:text-5xl">
              Small batch.<br />
              <span className="font-script text-gradient-gold">Big love.</span>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
              For over a decade, our pastry chefs have started before sunrise — folding, whisking
              and tempering — so that every bite you take feels like a tiny celebration.
            </p>
            <Link to="/about" className="btn-elegant btn-primary btn-sm mt-7">
              <span>Read our story</span> <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-3xl shadow-luxe"
          >
            <img src={aboutSpread} alt="An artisan bakery spread" loading="lazy" className="h-full w-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      {newArrivals.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Just out of the oven</p>
            <h2 className="mt-2 font-display text-4xl text-cocoa md:text-5xl">New arrivals</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {newArrivals.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

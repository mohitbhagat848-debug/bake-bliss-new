import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Heart, Leaf, Sparkles } from "lucide-react";
import aboutChefs from "@/assets/about-chefs.jpg";
import aboutIngredients from "@/assets/about-ingredients.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Bake & Bliss" },
      {
        name: "description",
        content:
          "Meet the chefs and ingredients behind Bake & Bliss — a small batch artisan patisserie crafting joy since 2012.",
      },
      { property: "og:title", content: "Our Story — Bake & Bliss" },
      {
        property: "og:description",
        content: "A small batch patisserie, baking joy with French butter and single origin chocolate.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-28 md:pt-32">
      <section className="mx-auto max-w-5xl px-5 pb-16 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Since 2012</p>
          <h1 className="mt-3 font-display text-5xl leading-[1.05] text-cocoa md:text-7xl">
            A patisserie made <br />
            entirely of <span className="font-script text-gradient-gold">love</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Bake & Bliss began as a tiny window in a quiet lane — one oven, two pastry chefs and
            an unreasonable obsession with butter. Twelve years later, we're still small batch
            and still obsessed.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8">
        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-3 md:gap-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2 row-span-2 overflow-hidden rounded-3xl shadow-luxe"
          >
            <img
              src={aboutChefs}
              alt="Our pastry chefs hand-decorating a tiered cake"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="overflow-hidden rounded-3xl shadow-soft"
          >
            <img
              src={aboutIngredients}
              alt="Premium baking ingredients flat lay"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center rounded-3xl bg-gradient-to-br from-blush/50 to-cream p-5 shadow-soft"
          >
            <h3 className="font-display text-xl text-cocoa md:text-2xl">From dawn, with care</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground md:text-sm">
              Every loaf is started before sunrise and finished by hand — never frozen, never rushed.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Heart, title: "Made with love", text: "Recipes passed down and refined over twelve years." },
            { icon: Leaf, title: "Real ingredients", text: "No essences, no shortcuts — just the good stuff." },
            { icon: Sparkles, title: "Always seasonal", text: "Our menu shifts with the weather and the harvest." },
          ].map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl border border-border bg-card p-7 text-center shadow-soft"
            >
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl gradient-rose text-cocoa">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-xl text-cocoa">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/menu" className="btn-elegant btn-primary">
            <span>Taste our menu</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

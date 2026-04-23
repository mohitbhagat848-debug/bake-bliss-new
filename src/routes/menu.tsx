import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { CATEGORIES, PRODUCTS, type Category } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { cn } from "@/lib/utils";

type MenuSearch = { category?: Category | "All" };

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Bake & Bliss" },
      {
        name: "description",
        content:
          "Browse the full Bake & Bliss menu — cakes, pastries, donuts, cheesecakes, cupcakes, brownies, waffles and cookies.",
      },
      { property: "og:title", content: "Menu — Bake & Bliss" },
      { property: "og:description", content: "Explore our full collection of artisan bakes." },
    ],
  }),
  validateSearch: (search: Record<string, unknown>): MenuSearch => {
    const c = search.category;
    if (typeof c === "string" && (c === "All" || (CATEGORIES as string[]).includes(c))) {
      return { category: c as MenuSearch["category"] };
    }
    return {};
  },
  component: MenuPage,
});

function MenuPage() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/menu" });
  const active = search.category ?? "All";
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const inCat = active === "All" || p.category === active;
      const inQuery = !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
      return inCat && inQuery;
    });
  }, [active, query]);

  const setCategory = (c: Category | "All") => {
    navigate({ search: c === "All" ? {} : { category: c } });
  };

  return (
    <div className="pt-28 md:pt-32">
      <section className="mx-auto max-w-7xl px-5 pb-12 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gold">The full menu</p>
          <h1 className="mt-3 font-display text-5xl text-cocoa md:text-6xl">
            Crafted with <span className="font-script text-gradient-gold">love</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Every bake is hand finished in our patisserie each morning.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-col items-center gap-5">
          <div className="relative w-full max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search bakes…"
              className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-4 text-sm shadow-soft outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
            />
          </div>
          <div className="flex w-full flex-wrap justify-center gap-2">
            {(["All", ...CATEGORIES] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={cn("chip", active === c && "chip-active")}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        {filtered.length === 0 ? (
          <p className="py-20 text-center text-muted-foreground">
            No bakes match that — try another category.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

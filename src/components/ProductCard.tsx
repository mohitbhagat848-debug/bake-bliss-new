import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { add } = useCart();
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.05, 0.3), ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-soft transition-shadow duration-500 hover:shadow-luxe"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={768}
          height={768}
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />
        {/* Gradient veil */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-aubergine/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        {/* Shine sweep */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
        </div>
        {product.tags?.[0] && (
          <span className="absolute left-3 top-3 rounded-full glass-strong px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-aubergine shadow-soft">
            {product.tags[0]}
          </span>
        )}
        <button
          onClick={() => add(product)}
          aria-label={`Add ${product.name}`}
          className="absolute bottom-3 right-3 inline-flex h-11 w-11 translate-y-3 items-center justify-center rounded-full gradient-gold text-aubergine opacity-0 shadow-luxe transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 hover:scale-110 hover:shadow-glow"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>
      <div className="relative z-10 flex flex-1 flex-col px-5 py-4">
        <p className="text-[10px] uppercase tracking-[0.18em] text-gold">
          {product.category}
        </p>
        <h3 className="mt-1.5 font-display text-xl text-cocoa">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-display text-2xl text-gradient-rose">{formatPrice(product.price)}</span>
          <button onClick={() => add(product)} className="btn-elegant btn-outline btn-sm sm:hidden">
            <span>Add</span>
          </button>
        </div>
      </div>
    </motion.article>
  );
}

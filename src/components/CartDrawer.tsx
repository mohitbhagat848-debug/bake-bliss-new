import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/data/products";
import { toast } from "sonner";

export function CartDrawer() {
  const { isOpen, close, items, setQty, remove, total, clear } = useCart();

  const onCheckout = () => {
    toast.success("Order placed! We'll start baking right away ✨", {
      description: `${items.length} item(s) · ${formatPrice(total)}`,
    });
    clear();
    close();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-50 bg-cocoa/40 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 240 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-cream shadow-luxe"
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <h2 className="font-display text-2xl text-cocoa">Your Sweet Box</h2>
              <button
                onClick={close}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-secondary"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blush/40">
                  <ShoppingBag className="h-9 w-9 text-cocoa/60" />
                </div>
                <p className="font-display text-xl text-cocoa">Your box is empty</p>
                <p className="text-sm text-muted-foreground">
                  Add a little sweetness to get started.
                </p>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4">
                  <ul className="space-y-4">
                    {items.map(({ product, quantity }) => (
                      <li
                        key={product.id}
                        className="flex gap-4 rounded-2xl border border-border/70 bg-card p-3"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          className="h-20 w-20 rounded-xl object-cover"
                        />
                        <div className="flex flex-1 flex-col">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="font-medium text-cocoa">{product.name}</p>
                              <p className="text-xs text-muted-foreground">{product.category}</p>
                            </div>
                            <button
                              onClick={() => remove(product.id)}
                              className="text-muted-foreground hover:text-destructive"
                              aria-label="Remove"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                          <div className="mt-auto flex items-center justify-between">
                            <div className="inline-flex items-center rounded-full border border-border bg-background">
                              <button
                                onClick={() => setQty(product.id, quantity - 1)}
                                className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-secondary"
                                aria-label="Decrease"
                              >
                                <Minus className="h-3.5 w-3.5" />
                              </button>
                              <span className="w-8 text-center text-sm font-medium">{quantity}</span>
                              <button
                                onClick={() => setQty(product.id, quantity + 1)}
                                className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-secondary"
                                aria-label="Increase"
                              >
                                <Plus className="h-3.5 w-3.5" />
                              </button>
                            </div>
                            <p className="font-medium text-cocoa">
                              {formatPrice(product.price * quantity)}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border px-6 py-5">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Subtotal</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between text-sm text-muted-foreground">
                    <span>Delivery</span>
                    <span className="text-cocoa">Free</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                    <span className="font-display text-lg text-cocoa">Total</span>
                    <span className="font-display text-2xl text-cocoa">{formatPrice(total)}</span>
                  </div>
                  <button onClick={onCheckout} className="btn-elegant btn-primary mt-5 w-full">
                    <span>Checkout</span>
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

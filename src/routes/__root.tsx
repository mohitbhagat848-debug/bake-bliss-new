import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "@/contexts/CartContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import cupcakeFavicon from "@/assets/cupcake-favicon.png";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-cocoa">404</h1>
        <h2 className="mt-4 font-display text-xl text-cocoa">This page is out of the oven</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist. Let's get you back to the sweet stuff.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-elegant btn-primary">
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Bake & Bliss — Artisan Bakery & Patisserie" },
      {
        name: "description",
        content:
          "Hand crafted cakes, pastries, cheesecakes and more — baked fresh every morning at Bake & Bliss.",
      },
      { property: "og:title", content: "Bake & Bliss — Artisan Bakery" },
      { property: "og:description", content: "Indulge in luxury bakes, made with love." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "theme-color",
        content: "#fdf6ec",
      },
    ],
    links: [
      { rel: "icon", href: cupcakeFavicon },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Italiana&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Manrope:wght@300;400;500;600;700&family=Pinyon+Script&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <CartDrawer />
      <Toaster position="top-center" />
    </CartProvider>
  );
}

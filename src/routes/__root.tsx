import { Outlet, Link, createRootRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "@/contexts/CartContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";

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
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

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

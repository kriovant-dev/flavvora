import { Header } from "@/components/Header";
import { MenuSection } from "@/components/MenuSection";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { CartProvider } from "@/context/CartContext";

const Orders = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="py-12 md:py-16 bg-gradient-to-b from-secondary/30 to-background">
            <div className="container mx-auto px-4 text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                <span className="text-gradient">Place Your Order</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from our delicious menu and order your favorite treats
              </p>
            </div>
          </div>
          <MenuSection />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
};

export default Orders;

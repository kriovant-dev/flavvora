import { Header } from "@/components/Header";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { CartProvider } from "@/context/CartContext";

const About = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <AboutSection />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
};

export default About;

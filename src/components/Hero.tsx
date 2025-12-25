import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBakery from "@/assets/hero-bakery.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBakery}
          alt="Flavvora Indian bakery sweets"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">Now Open for Orders</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-gradient">Flavvora</span>
          </h1>
          
          <p className="font-display text-xl md:text-2xl text-muted-foreground italic mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Savor the Flavor
          </p>

          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Experience the finest Indian bakery delights. From traditional sweets to gourmet cakes, 
            every bite tells a story of authentic flavors and artisanal craftsmanship.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button variant="gold" size="xl" asChild>
              <a href="#menu">Explore Menu</a>
            </Button>
            <Button variant="hero" size="xl" asChild>
              <a href="#about">Our Story</a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-float">
            <a href="#menu" className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
              <ArrowDown className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

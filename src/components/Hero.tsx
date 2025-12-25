import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroBakery from "@/assets/hero-bakery.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Visibility */}
      <div className="absolute inset-0">
        <img
          src={heroBakery}
          alt="Flavvora Indian bakery sweets"
          className="w-full h-full object-cover opacity-50 scale-105 animate-subtle-zoom"
        />
        {/* Enhanced gradient overlay for better contrast and warmth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-saffron/10 via-transparent to-gold/10" />
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-radial-gradient opacity-40" style={{ 
          background: 'radial-gradient(circle at center, transparent 0%, hsl(20, 25%, 15%, 0.3) 100%)' 
        }} />
      </div>

      {/* Content with enhanced styling */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge with enhanced glow */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-card/90 backdrop-blur-sm shadow-lg glow mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_hsl(25,85%,45%)]" />
            <span className="text-sm text-primary font-semibold tracking-wide">Now Open for Orders</span>
          </div>

          {/* Title with enhanced shadow and glow */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 animate-fade-in drop-shadow-2xl" style={{ animationDelay: "0.1s" }}>
            <span className="text-gradient drop-shadow-[0_4px_20px_rgba(230,126,34,0.4)]">Flavvora</span>
          </h1>
          
          <p className="font-display text-xl md:text-2xl text-muted-foreground italic mb-6 animate-fade-in drop-shadow-lg" style={{ animationDelay: "0.2s" }}>
            Savor the Flavor
          </p>

          {/* Enhanced description with better contrast */}
          <p className="text-base md:text-lg text-foreground/90 max-w-2xl mx-auto mb-10 animate-fade-in leading-relaxed drop-shadow-md font-medium" style={{ animationDelay: "0.3s" }}>
            Experience the finest Indian bakery delights. From traditional sweets to gourmet cakes, 
            every bite tells a story of authentic flavors and artisanal craftsmanship.
          </p>

          {/* CTA Buttons with enhanced effects */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button variant="gold" size="xl" className="shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300" asChild>
              <Link to="/orders">Explore Menu</Link>
            </Button>
            <Button variant="outline" size="xl" className="backdrop-blur-sm bg-background/80 hover:bg-background/90 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300" asChild>
              <Link to="/about">Our Story</Link>
            </Button>
          </div>

          {/* Scroll Indicator with enhanced styling */}
          <div className="animate-float">
            <a href="#menu" className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 drop-shadow-md">
              <span className="text-xs uppercase tracking-widest font-semibold">Scroll to explore</span>
              <ArrowDown className="w-5 h-5 drop-shadow-lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent" />
      
      {/* Subtle pattern overlay for texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
    </section>
  );
};

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Clock, Heart } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "25+ Years",
    description: "Of authentic baking tradition",
  },
  {
    icon: Heart,
    title: "Handcrafted",
    description: "Made fresh daily with love",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Only the finest ingredients",
  },
];

export const AboutPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&h=600&fit=crop" 
                  alt="Flavvora Bakery Interior" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-background border border-border rounded-2xl p-6 shadow-xl max-w-[200px]">
                <p className="text-4xl font-bold text-foreground mb-1">10K+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3 block">
                  ABOUT FLAVVORA
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                  A Legacy of Sweet Traditions
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Founded in 1998 by the Sharma family, Flavvora began as a humble bakery 
                  in the heart of the city. Today, we blend traditional Indian flavors with 
                  modern baking techniques to create unique treats.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 gap-4 py-4">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-2">
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="group"
                >
                  <Link to="/about">
                    Read Our Full Story
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

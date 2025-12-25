import { Cake, Heart, Star, Users } from "lucide-react";

const stats = [
  { icon: Cake, label: "Years of Tradition", value: "25+" },
  { icon: Heart, label: "Happy Customers", value: "10K+" },
  { icon: Star, label: "Signature Recipes", value: "100+" },
  { icon: Users, label: "Expert Bakers", value: "15+" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-widest text-primary font-medium mb-4 block">
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              A Legacy of <span className="text-gradient">Sweet Traditions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              What started as a small family kitchen has grown into a beloved destination 
              for those who appreciate the art of authentic Indian baking.
            </p>
          </div>

          {/* Story Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden shadow-lg">
                  <div className="text-center p-6">
                    <span className="font-display text-6xl text-primary">🍰</span>
                    <p className="text-sm text-muted-foreground mt-2 font-medium">Artisan Cakes</p>
                  </div>
                </div>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-terracotta/20 to-terracotta/5 flex items-center justify-center overflow-hidden shadow-lg">
                  <div className="text-center p-6">
                    <span className="font-display text-5xl">🥧</span>
                    <p className="text-sm text-muted-foreground mt-2 font-medium">Fresh Pastries</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center overflow-hidden shadow-lg">
                  <div className="text-center p-6">
                    <span className="font-display text-5xl">🍪</span>
                    <p className="text-sm text-muted-foreground mt-2 font-medium">Classic Sweets</p>
                  </div>
                </div>
                <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-saffron/20 to-saffron/5 flex items-center justify-center overflow-hidden shadow-lg">
                  <div className="text-center p-6">
                    <span className="font-display text-6xl">☕</span>
                    <p className="text-sm text-muted-foreground mt-2 font-medium">Premium Coffee</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                Crafted with Love, <br />Served with Pride
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 1998 by the Sharma family, Flavvora began as a humble bakery 
                in the heart of the city. Our grandmother's secret recipes, passed down 
                through generations, form the soul of every creation we make.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we blend traditional Indian flavors with modern baking techniques 
                to create unique treats that celebrate our heritage while embracing 
                innovation. From our signature Gulab Jamun Cake to fusion chaats, 
                every item is made fresh daily with premium ingredients.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're celebrating a milestone or simply craving something sweet, 
                Flavvora is here to make every moment special. We believe that good food 
                brings people together, and we're honored to be part of your celebrations.
              </p>
              
              {/* Values */}
              <div className="flex flex-wrap gap-3 pt-4">
                {["100% Fresh", "No Preservatives", "Family Recipes", "Daily Baked"].map((value) => (
                  <span 
                    key={value}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-background shadow-sm border border-border/50 hover:shadow-md transition-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import { useState } from "react";
import { menuCategories, MenuCategory, MenuItem } from "@/data/menuData";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const MenuItemCard = ({ item }: { item: MenuItem }) => {
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<string | undefined>(
    item.variants?.[0]?.name
  );

  const currentPrice = selectedVariant
    ? item.variants?.find((v) => v.name === selectedVariant)?.price || item.price
    : item.price;

  return (
    <div className="group bg-card border border-border rounded-xl p-4 hover:border-primary/30 hover:shadow-lg transition-all duration-300 menu-item-hover">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
            {item.name}
          </h4>
          {item.variants && item.variants.length > 1 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {item.variants.map((variant) => (
                <button
                  key={variant.name}
                  onClick={() => setSelectedVariant(variant.name)}
                  className={cn(
                    "text-xs px-2 py-1 rounded-full border transition-all",
                    selectedVariant === variant.name
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:border-primary/50"
                  )}
                >
                  {variant.name}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="text-primary font-semibold whitespace-nowrap">
            ₹{currentPrice}
          </span>
          <Button
            variant="gold"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => addItem(item, selectedVariant)}
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const CategoryTab = ({
  category,
  isActive,
  onClick,
}: {
  category: MenuCategory;
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={cn(
      "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300",
      isActive
        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
        : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
    )}
  >
    {category.name}
  </button>
);

export const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const currentCategory = menuCategories.find((c) => c.id === activeCategory);

  return (
    <section id="menu" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Our Menu
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Delicious <span className="text-gradient">Offerings</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From savory chaats to decadent cakes, explore our curated selection of 
            authentic Indian flavors and international favorites.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-8 scrollbar-hide justify-start md:justify-center">
          {menuCategories.map((category) => (
            <CategoryTab
              key={category.id}
              category={category}
              isActive={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            />
          ))}
        </div>

        {/* Menu Items */}
        {currentCategory && (
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
              <h3 className="font-display text-2xl font-semibold text-foreground">
                {currentCategory.name}
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentCategory.items.map((item, index) => (
                <div
                  key={item.name}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <MenuItemCard item={item} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

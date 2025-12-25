export interface MenuItem {
  name: string;
  price: number;
  variants?: { name: string; price: number }[];
  description?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "chaat",
    name: "Chaat",
    items: [
      { name: "Bhel Puri/Sookhari", price: 60 },
      { name: "Dahi Sookhari", price: 80 },
      { name: "Pani Puri", price: 40, variants: [{ name: "6 Pcs", price: 40 }] },
      { name: "Dahi Puri", price: 50, variants: [{ name: "6 Pcs", price: 50 }] },
      { name: "Ragda Patties", price: 70 },
      { name: "Ragda Samosa", price: 80 },
      { name: "Chole Samosa", price: 80 },
      { name: "Veg Cutlet", price: 40, variants: [{ name: "2 Pcs", price: 40 }] },
      { name: "Corn Chaat", price: 90 },
      { name: "Vada Pav", price: 30 },
      { name: "Samosa", price: 25 },
      { name: "Aloo Tikki", price: 20 },
      { name: "Pav Bhaji", price: 90 },
      { name: "Masala Pav", price: 50 },
      { name: "Aloo Puri", price: 70, variants: [{ name: "3 Pcs", price: 70 }] },
      { name: "Chana Masala Puri", price: 70, variants: [{ name: "3 Pcs", price: 70 }] },
    ],
  },
  {
    id: "sandwiches",
    name: "Rotary Sandwiches",
    items: [
      { name: "Veg Sandwich", price: 70 },
      { name: "Veg Cheese Sandwich", price: 90 },
      { name: "Coleslaw Sandwich", price: 80 },
      { name: "Coleslaw Cheese Sandwich", price: 100 },
      { name: "Cheese Corn Sandwich", price: 100 },
      { name: "Paneer Sandwich", price: 100 },
      { name: "Paneer Cheese Sandwich", price: 120 },
      { name: "Cheese Chilli Sandwich", price: 110 },
      { name: "Schezwan Corn Sandwich", price: 100 },
    ],
  },
  {
    id: "coffee",
    name: "Barista Coffee",
    items: [
      { name: "Cafe Latte", price: 100 },
      { name: "Cappuccino", price: 90 },
      { name: "Café Mocha", price: 110 },
      { name: "Plain Mocha", price: 100 },
      { name: "Americano", price: 90 },
      { name: "Espresso", price: 60 },
      { name: "Double Espresso", price: 90 },
      { name: "Classic Cold Coffee", price: 130 },
      { name: "Mocha Cold Coffee", price: 140 },
      { name: "Caramel Cold Coffee", price: 140 },
      { name: "Classic Cold Coffee with Ice Cream", price: 170 },
    ],
  },
  {
    id: "tea-coolers",
    name: "Tea & Coolers",
    items: [
      { name: "Masala Tea", price: 30 },
      { name: "Lemon Tea", price: 35 },
      { name: "Green Tea", price: 40 },
      { name: "Black Tea", price: 30 },
      { name: "Lemon Fresh", price: 60 },
      { name: "Orange Squash", price: 70 },
      { name: "Mango Squash", price: 70 },
      { name: "Virgin Mojito", price: 80 },
      { name: "Blue Lagoon", price: 80 },
    ],
  },
  {
    id: "fruit-cakes",
    name: "Fruit Cakes",
    items: [
      { name: "Fruit Vanilla", price: 900, variants: [{ name: "1kg", price: 900 }, { name: "500g", price: 500 }] },
      { name: "Exotic Fruits", price: 1000, variants: [{ name: "1kg", price: 1000 }, { name: "500g", price: 550 }] },
      { name: "Classic Strawberry", price: 950, variants: [{ name: "1kg", price: 950 }, { name: "500g", price: 520 }] },
      { name: "Classic Blueberry", price: 950, variants: [{ name: "1kg", price: 950 }, { name: "500g", price: 520 }] },
      { name: "Pineapple & Nuts", price: 920, variants: [{ name: "1kg", price: 920 }, { name: "500g", price: 510 }] },
      { name: "Fruit Fantasy", price: 980, variants: [{ name: "1kg", price: 980 }, { name: "500g", price: 540 }] },
      { name: "Cranberry Crunch", price: 1000, variants: [{ name: "1kg", price: 1000 }, { name: "500g", price: 550 }] },
    ],
  },
  {
    id: "chocolate-cakes",
    name: "Chocolate Cakes",
    items: [
      { name: "Chocolate Truffle", price: 900, variants: [{ name: "1kg", price: 900 }, { name: "500g", price: 500 }] },
      { name: "Dark Choco Truffle", price: 950, variants: [{ name: "1kg", price: 950 }, { name: "500g", price: 520 }] },
      { name: "Swiss Chocolate", price: 1000, variants: [{ name: "1kg", price: 1000 }, { name: "500g", price: 550 }] },
      { name: "Choco Caramel", price: 980, variants: [{ name: "1kg", price: 980 }, { name: "500g", price: 540 }] },
      { name: "Ferrero Rocher", price: 1200, variants: [{ name: "1kg", price: 1200 }, { name: "500g", price: 650 }] },
      { name: "Kitkat Chocolate", price: 1100, variants: [{ name: "1kg", price: 1100 }, { name: "500g", price: 600 }] },
      { name: "Oreo Chocolate", price: 1050, variants: [{ name: "1kg", price: 1050 }, { name: "500g", price: 580 }] },
    ],
  },
  {
    id: "cheese-cakes",
    name: "Cheese Cakes",
    items: [
      { name: "Baked Blueberry Cheese", price: 1200, variants: [{ name: "1kg", price: 1200 }, { name: "500g", price: 650 }] },
      { name: "Lotus Biscoff Cheese", price: 1100, variants: [{ name: "1kg", price: 1100 }, { name: "500g", price: 600 }] },
      { name: "Mango Cheese", price: 1100, variants: [{ name: "1kg", price: 1100 }, { name: "500g", price: 600 }] },
      { name: "Red Velvet Cheese", price: 1000, variants: [{ name: "1kg", price: 1000 }, { name: "500g", price: 550 }] },
      { name: "Strawberry Cheese", price: 1150, variants: [{ name: "1kg", price: 1150 }, { name: "500g", price: 620 }] },
    ],
  },
  {
    id: "indian-sweets",
    name: "Indian Sweet Cakes",
    items: [
      { name: "Rasmalai Cake", price: 1100, variants: [{ name: "1kg", price: 1100 }, { name: "500g", price: 600 }] },
      { name: "Rabdi Cake", price: 1000, variants: [{ name: "1kg", price: 1000 }, { name: "500g", price: 550 }] },
      { name: "Gulab Jamun Cake", price: 1050, variants: [{ name: "1kg", price: 1050 }, { name: "500g", price: 580 }] },
      { name: "Paan Cake", price: 1100, variants: [{ name: "1kg", price: 1100 }, { name: "500g", price: 600 }] },
      { name: "Kaju Katli Cake", price: 1200, variants: [{ name: "1kg", price: 1200 }, { name: "500g", price: 650 }] },
    ],
  },
  {
    id: "brownies-desserts",
    name: "Brownies, Cupcakes & Desserts",
    items: [
      { name: "Classic Brownie", price: 60 },
      { name: "Nutella Brownie", price: 80 },
      { name: "Walnut Brownie", price: 75 },
      { name: "Chocolate Cupcake", price: 50 },
      { name: "Red Velvet Cupcake", price: 55 },
      { name: "Vanilla Cupcake", price: 45 },
      { name: "Tiramisu", price: 150 },
      { name: "Chocolate Mousse", price: 120 },
      { name: "Panna Cotta", price: 130 },
    ],
  },
];

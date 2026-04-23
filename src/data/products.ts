import chocoLava from "@/assets/products/choco-lava.jpg";
import chocolateCake from "@/assets/products/chocolate-cake.jpg";
import redVelvet from "@/assets/products/red-velvet.jpg";
import blackForest from "@/assets/products/black-forest.jpg";
import pineappleCake from "@/assets/products/pineapple-cake.jpg";
import butterscotchCake from "@/assets/products/butterscotch-cake.jpg";
import fruitCake from "@/assets/products/fruit-cake.jpg";
import vanillaCake from "@/assets/products/vanilla-cake.jpg";
import coffeeCake from "@/assets/products/coffee-cake.jpg";
import chocolatePastry from "@/assets/products/chocolate-pastry.jpg";
import pineapplePastry from "@/assets/products/pineapple-pastry.jpg";
import blackForestPastry from "@/assets/products/black-forest-pastry.jpg";
import butterscotchPastry from "@/assets/products/butterscotch-pastry.jpg";
import strawberryPastry from "@/assets/products/strawberry-pastry.jpg";
import glazedDonut from "@/assets/products/glazed-donut.jpg";
import chocolateDonut from "@/assets/products/chocolate-donut.jpg";
import strawberryDonut from "@/assets/products/strawberry-donut.jpg";
import creamDonut from "@/assets/products/cream-donut.jpg";
import blueberryCheesecake from "@/assets/products/blueberry-cheesecake.jpg";
import oreoCheesecake from "@/assets/products/oreo-cheesecake.jpg";
import chocolateCheesecake from "@/assets/products/chocolate-cheesecake.jpg";
import nyCheesecake from "@/assets/products/ny-cheesecake.jpg";
import vanillaCupcake from "@/assets/products/vanilla-cupcake.jpg";
import chocolateCupcake from "@/assets/products/chocolate-cupcake.jpg";
import redVelvetCupcake from "@/assets/products/red-velvet-cupcake.jpg";
import strawberryCupcake from "@/assets/products/strawberry-cupcake.jpg";
import chocolateBrownie from "@/assets/products/chocolate-brownie.jpg";
import walnutBrownie from "@/assets/products/walnut-brownie.jpg";
import fudgeBrownie from "@/assets/products/fudge-brownie.jpg";
import creamRoll from "@/assets/products/cream-roll.jpg";
import chocolateRoll from "@/assets/products/chocolate-roll.jpg";
import whiteChocWaffle from "@/assets/products/white-choc-waffle.jpg";
import darkChocWaffle from "@/assets/products/dark-choc-waffle.jpg";
import oreoWaffle from "@/assets/products/oreo-waffle.jpg";
import chocoChipCookies from "@/assets/products/choco-chip-cookies.jpg";
import butterCookies from "@/assets/products/butter-cookies.jpg";

export type Category =
  | "Cakes"
  | "Pastries"
  | "Donuts"
  | "Cheesecakes"
  | "Cupcakes"
  | "Brownies"
  | "Rolls"
  | "Waffles"
  | "Cookies";

export const CATEGORIES: Category[] = [
  "Cakes",
  "Pastries",
  "Donuts",
  "Cheesecakes",
  "Cupcakes",
  "Brownies",
  "Rolls",
  "Waffles",
  "Cookies",
];

export type Product = {
  id: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  description: string;
  tags?: string[];
};

export const PRODUCTS: Product[] = [
  // Cakes
  { id: "choco-lava", name: "Choco Lava Cake", category: "Cakes", price: 449, image: chocoLava, description: "Warm chocolate sponge with a molten dark chocolate heart.", tags: ["Bestseller"] },
  { id: "chocolate-cake", name: "Chocolate Cake", category: "Cakes", price: 599, image: chocolateCake, description: "Rich layers of cocoa sponge with silken ganache." },
  { id: "red-velvet", name: "Red Velvet Cake", category: "Cakes", price: 649, image: redVelvet, description: "Velvety crimson sponge with whipped cream cheese frosting.", tags: ["Bestseller"] },
  { id: "black-forest", name: "Black Forest Cake", category: "Cakes", price: 629, image: blackForest, description: "Cherries, kirsch cream and dark chocolate shavings." },
  { id: "pineapple-cake", name: "Pineapple Cake", category: "Cakes", price: 549, image: pineappleCake, description: "Light vanilla sponge with caramelised pineapple cream." },
  { id: "butterscotch-cake", name: "Butterscotch Cake", category: "Cakes", price: 569, image: butterscotchCake, description: "Buttery caramel sponge crowned with praline crunch." },
  { id: "fruit-cake", name: "Fresh Fruit Cake", category: "Cakes", price: 679, image: fruitCake, description: "Cloud-like sponge piled with seasonal fresh fruit.", tags: ["New"] },
  { id: "vanilla-cake", name: "Vanilla Cake", category: "Cakes", price: 519, image: vanillaCake, description: "Madagascan vanilla sponge with delicate buttercream." },
  { id: "coffee-cake", name: "Coffee Cake", category: "Cakes", price: 589, image: coffeeCake, description: "Espresso infused sponge with mocha mousse." },
  // Pastries
  { id: "chocolate-pastry", name: "Chocolate Pastry", category: "Pastries", price: 129, image: chocolatePastry, description: "Triple chocolate layered pastry, finished with curls." },
  { id: "pineapple-pastry", name: "Pineapple Pastry", category: "Pastries", price: 119, image: pineapplePastry, description: "Pillowy sponge with juicy pineapple compote." },
  { id: "black-forest-pastry", name: "Black Forest Pastry", category: "Pastries", price: 139, image: blackForestPastry, description: "Cherries, dark cocoa and clouds of cream." },
  { id: "butterscotch-pastry", name: "Butterscotch Pastry", category: "Pastries", price: 129, image: butterscotchPastry, description: "Caramel kissed sponge with praline drizzle." },
  { id: "strawberry-pastry", name: "Strawberry Pastry", category: "Pastries", price: 139, image: strawberryPastry, description: "Fresh strawberries layered with vanilla mousseline.", tags: ["New"] },
  // Donuts
  { id: "glazed-donut", name: "Glazed Donut", category: "Donuts", price: 89, image: glazedDonut, description: "Pillowy ring with a delicate sugar glaze." },
  { id: "chocolate-donut", name: "Chocolate Donut", category: "Donuts", price: 99, image: chocolateDonut, description: "Dark cocoa frosting with chocolate sprinkles." },
  { id: "strawberry-donut", name: "Strawberry Donut", category: "Donuts", price: 99, image: strawberryDonut, description: "Pink strawberry glaze with rainbow sprinkles." },
  { id: "cream-donut", name: "Cream Filled Donut", category: "Donuts", price: 109, image: creamDonut, description: "Soft brioche filled with vanilla bean cream." },
  // Cheesecakes
  { id: "blueberry-cheesecake", name: "Blueberry Cheesecake", category: "Cheesecakes", price: 219, image: blueberryCheesecake, description: "Silky cream cheese with wild blueberry compote." },
  { id: "oreo-cheesecake", name: "Oreo Cheesecake", category: "Cheesecakes", price: 229, image: oreoCheesecake, description: "Crushed cookies folded into vanilla cheese mousse.", tags: ["Bestseller"] },
  { id: "chocolate-cheesecake", name: "Chocolate Cheesecake", category: "Cheesecakes", price: 239, image: chocolateCheesecake, description: "Decadent dark chocolate cheese with cocoa crust." },
  { id: "ny-cheesecake", name: "New York Cheesecake", category: "Cheesecakes", price: 219, image: nyCheesecake, description: "The classic baked cheesecake on a graham base." },
  // Cupcakes
  { id: "vanilla-cupcake", name: "Vanilla Cupcake", category: "Cupcakes", price: 79, image: vanillaCupcake, description: "Soft vanilla sponge crowned with buttercream." },
  { id: "chocolate-cupcake", name: "Chocolate Cupcake", category: "Cupcakes", price: 89, image: chocolateCupcake, description: "Rich cocoa cup with whipped chocolate ganache." },
  { id: "red-velvet-cupcake", name: "Red Velvet Cupcake", category: "Cupcakes", price: 99, image: redVelvetCupcake, description: "Crimson sponge with cream cheese swirl." },
  { id: "strawberry-cupcake", name: "Strawberry Cupcake", category: "Cupcakes", price: 99, image: strawberryCupcake, description: "Sponge dotted with strawberries, topped with pink cream." },
  // Brownies
  { id: "chocolate-brownie", name: "Chocolate Brownie", category: "Brownies", price: 119, image: chocolateBrownie, description: "Crackle topped, fudgy in the centre." },
  { id: "walnut-brownie", name: "Walnut Brownie", category: "Brownies", price: 139, image: walnutBrownie, description: "Brownie loaded with toasted Californian walnuts." },
  { id: "fudge-brownie", name: "Fudge Brownie", category: "Brownies", price: 149, image: fudgeBrownie, description: "Warm fudge brownie with vanilla bean ice cream." },
  // Rolls
  { id: "cream-roll", name: "Cream Roll", category: "Rolls", price: 99, image: creamRoll, description: "Vanilla sponge swirled with whipped cream." },
  { id: "chocolate-roll", name: "Chocolate Cream Roll", category: "Rolls", price: 119, image: chocolateRoll, description: "Cocoa sponge rolled with silky chocolate cream." },
  // Waffles
  { id: "white-choc-waffle", name: "White Chocolate Waffle", category: "Waffles", price: 179, image: whiteChocWaffle, description: "Crisp Belgian waffle with white chocolate & berries." },
  { id: "dark-choc-waffle", name: "Dark Chocolate Waffle", category: "Waffles", price: 179, image: darkChocWaffle, description: "Belgian waffle drowned in dark chocolate sauce." },
  { id: "oreo-waffle", name: "Oreo Crunch Waffle", category: "Waffles", price: 199, image: oreoWaffle, description: "Waffle topped with cookie crumble and cream.", tags: ["New"] },
  // Cookies
  { id: "choco-chip-cookies", name: "Choco Chip Cookies", category: "Cookies", price: 69, image: chocoChipCookies, description: "Chewy cookies loaded with melting chocolate chips." },
  { id: "butter-cookies", name: "Butter Cookies", category: "Cookies", price: 59, image: butterCookies, description: "Crumbly French butter cookies, pure indulgence." },
];

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

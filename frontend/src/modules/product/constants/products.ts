import type { Product } from "../types/product";

/* Featured subset shown on the home page — same first 6 products
 * as the shared catalog so reviewers see consistent imagery. */
export const featuredProducts: Product[] = [
{
  id: 1,
  name: "Claude Pro",
  category: "AI",
  price: "180.000d",
  image: "https://images.unsplash.com/photo-1737019015667-2bbd1bf5b15f?auto=format&fit=crop&w=900&q=80",
  badge: "-28%"
},
{
  id: 2,
  name: "Claude Opus Advanced",
  category: "AI",
  price: "320.000d",
  image: "https://images.unsplash.com/photo-1675557009875-436f7a7bd49e?auto=format&fit=crop&w=900&q=80",
  badge: "Hot"
},
{
  id: 3,
  name: "AI Plus",
  category: "AI",
  price: "120.000d",
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
  badge: "New"
},
{
  id: 4,
  name: "AI Plus",
  category: "AI",
  price: "160.000d",
  image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&w=900&q=80",
  badge: "-27%"
},
{
  id: 5,
  name: "Claude-Opus Advanced",
  category: "AI",
  price: "150.000d",
  image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&w=900&q=80"
},
{
  id: 6,
  name: "Perplexity Pro",
  category: "AI",
  price: "130.000d",
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  badge: "Hot"
}
];
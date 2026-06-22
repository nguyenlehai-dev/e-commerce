export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  price: number;
  retail_price: number;
  wholesale_price: number;
  collaborator_price: number;
  warranty_days: number;
  min_wholesale_quantity: number;
  stock_available: number;
  variants: Array<{
    id: string;
    label: string;
    multiplier: number;
  }>;
};

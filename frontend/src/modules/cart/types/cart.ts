export type CartItem = {
  productId: number;
  name: string;
  quantity: number;
  unitPrice: number;
};

export type CartSummary = {
  items: CartItem[];
  subtotal: number;
};

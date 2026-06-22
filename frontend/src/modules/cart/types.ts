export type Credential = {
  id: string;
  username: string;
  password: string;
  cookie: string;
  expires_at: string;
};

export type Order = {
  id: string;
  user_id: string;
  product_id: string;
  quantity: number;
  unit_price: number;
  discount: number;
  total: number;
  final_total: number;
  status: string;
  purchased_at: string;
  warranty_until: string;
  credentials: Credential[];
};

export type OrderListItem = {
  id: string;
  product_id: string;
  quantity: number;
  status: string;
  final_total: number;
  warranty_until: string;
};

import { MessageCircle, ShieldCheck, ShoppingCart } from "lucide-react";
import { Product } from "./types";
import { formatVnd } from "../../shared/format";

type Props = {
  products: Product[];
  onBuy: (product: Product) => void;
  onChat: (product: Product) => void;
};

export function ProductGrid({ products, onBuy, onChat }: Props) {
  return (
    <section className="product-grid">
      {products.map((product) => (
        <article className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <div className="product-body">
            <div>
              <p className="eyebrow">{product.category}</p>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
            <div className="price-row">
              <strong>{formatVnd(product.price)}</strong>
              <span>{product.stock_available} acc san sang</span>
            </div>
            <div className="meta-row">
              <span><ShieldCheck size={16} /> BH {product.warranty_days} ngay</span>
              <span>Si tu {product.min_wholesale_quantity} acc</span>
            </div>
            <div className="variant-row">
              {product.variants.map((variant) => (
                <span key={variant.id}>{variant.label}</span>
              ))}
            </div>
            <div className="actions">
              <button type="button" className="primary" onClick={() => onBuy(product)}>
                <ShoppingCart size={18} />
                Mua ngay
              </button>
              <button type="button" className="ghost" onClick={() => onChat(product)} aria-label="Chat thuong luong">
                <MessageCircle size={18} />
              </button>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

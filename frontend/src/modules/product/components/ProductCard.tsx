import type { Product } from "../types/product";

type ProductCardProps = {
  addToCartLabel: string;
  product: Product;
};

const formatSold = (sold?: number): string => {
  if (sold === undefined) {
    return "";
  }
  if (sold >= 1000) {
    return `${(sold / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  }
  return String(sold);
};

/* Brand label override — short, on-card friendly */
const BRAND_LABEL: Record<string, string> = {
  "nhà cung cấp dịch vụ AI": "Claude",
  "VD AI Shop": "VD AI",
  Google: "Google",
  Perplexity: "Perplexity",
  Midjourney: "Midjourney",
  Canva: "Canva",
  Adobe: "Adobe",
  Figma: "Figma",
  Notion: "Notion",
  Microsoft: "Microsoft",
  Spotify: "Spotify",
  Netflix: "Netflix",
  GitHub: "GitHub"
};

export function ProductCard({ addToCartLabel, product }: ProductCardProps) {
  const brandLabel = BRAND_LABEL[product.brand ?? ""] ?? product.brand ?? "";
  const isHot = product.badge === "Hot" || product.badge === "Best";
  const isNew = product.badge === "New";

  return (
    <article className="product-card product-card--account">
      <div className="product-card-media">
        <img src={product.image} alt={product.name} loading="lazy" />

        {brandLabel ? <span className="brand-pill">{brandLabel}</span> : null}
        {product.badge ? (
          <span className={`discount-pill${isHot ? " is-hot" : ""}${isNew ? " is-new" : ""}`}>
            {product.badge}
          </span>
        ) : null}

        {product.rating !== undefined ? (
          <span className="rating-chip" aria-label={`${product.rating} / 5`}>
            <span aria-hidden="true">★</span> {product.rating.toFixed(1)}
          </span>
        ) : null}

        <button type="button" className="quick-buy" aria-label={addToCartLabel}>
          {addToCartLabel}
        </button>
      </div>

      <div className="product-card-body">
        <p>{product.category ? categoryLabel(product.category) : ""}</p>
        <h3>{product.name}</h3>

        {product.description ? <p className="product-card-desc">{product.description}</p> : null}

        <div className="product-card-meta">
          {product.sold !== undefined ? (
            <span className="meta-sold">
              <span className="meta-icon" aria-hidden="true">⟡</span>
              {formatSold(product.sold)} sold
            </span>
          ) : null}
          {product.duration ? <span className="meta-duration">{product.duration}</span> : null}
        </div>

        <div className="product-card-footer">
          <div className="price-stack">
            {product.originalPrice ? (
              <span className="price-original">{product.originalPrice}</span>
            ) : null}
            <strong>{product.price}</strong>
          </div>
          <button type="button" aria-label={`${addToCartLabel}: ${product.name}`}>
            {addToCartLabel}
          </button>
        </div>
      </div>
    </article>
  );
}

function categoryLabel(key: string): string {
  const map: Record<string, string> = {
    ai: "AI · Premium",
    design: "Design · Creative",
    office: "Office · Productivity",
    media: "Media · Entertainment",
    dev: "Dev · Tools"
  };
  return map[key] ?? key;
}

import { useEffect, useMemo, useState } from "react";
import type { ProductCategory, ProductItem } from "../../../shared/configs/i18n";
import { useI18n } from "../../../shared/hooks/useI18n";
import { useScrollReveal } from "../../../shared/hooks/useScrollReveal";
import { PRODUCT_CATALOG } from "../../../shared/configs/products";
import { ProductCard } from "../components/ProductCard";
import { SiteHeader } from "../../../shared/components/SiteHeader";

type CategoryFilter = ProductCategory | "all";

const CATEGORY_ORDER: CategoryFilter[] = ["all", "ai", "design", "office", "media", "dev"];

function parsePrice(value: string): number {
  return Number(value.replace(/[^0-9]/g, "")) || 0;
}

function sortProducts(items: ProductItem[], key: string): ProductItem[] {
  const copy = [...items];
  switch (key) {
    case "price-asc":
      return copy.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    case "price-desc":
      return copy.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    case "rating":
      return copy.sort((a, b) => b.rating - a.rating);
    case "newest":
      return copy.sort((a, b) => b.id - a.id);
    case "popular":
    default:
      return copy.sort((a, b) => b.sold - a.sold);
  }
}

function readCategoryFromHash(): CategoryFilter {
  if (typeof window === "undefined") {
    return "all";
  }
  const hash = window.location.hash.replace(/^#/, "");
  const queryIndex = hash.indexOf("?");
  if (queryIndex === -1) {
    return "all";
  }
  const params = new URLSearchParams(hash.slice(queryIndex + 1));
  const value = params.get("cat");
  if (value && (CATEGORY_ORDER as string[]).includes(value)) {
    return value as CategoryFilter;
  }
  return "all";
}

export function ProductsPage() {
  const { t } = useI18n();
  const pageRef = useScrollReveal<HTMLDivElement>();
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>(() => readCategoryFromHash());
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState("popular");

  useEffect(() => {
    const handleHashChange = () => setActiveCategory(readCategoryFromHash());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (activeCategory === "all") {
      return;
    }
    if (typeof window === "undefined") {
      return;
    }
    const currentHash = window.location.hash;
    if (!currentHash.includes(`cat=${activeCategory}`)) {
      window.history.replaceState(null, "", `#/products?cat=${activeCategory}`);
    }
  }, [activeCategory]);

  const filtered = useMemo(() => {
    const keyword = search.trim().toLowerCase();
    return PRODUCT_CATALOG.filter((item) => {
      if (activeCategory !== "all" && item.category !== activeCategory) {
        return false;
      }
      if (!keyword) {
        return true;
      }
      return (
        item.name.toLowerCase().includes(keyword) ||
        item.brand.toLowerCase().includes(keyword) ||
        item.description.toLowerCase().includes(keyword)
      );
    });
  }, [activeCategory, search]);

  const sorted = useMemo(() => sortProducts(filtered, sortKey), [filtered, sortKey]);

  return (
    <main className="beauty-page" ref={pageRef}>
      <SiteHeader active="products" />

      <section className="products-page-hero reveal">
        <p className="eyebrow">{t.productsPage.eyebrow}</p>
        <h1>{t.productsPage.title}</h1>
        <p>{t.productsPage.description}</p>

        <ul className="trust-row">
          <li>✓ {t.productsPage.delivery}</li>
          <li>✓ {t.productsPage.guarantee}</li>
          <li>✓ {t.productsPage.support}</li>
        </ul>
      </section>

      <section className="products-toolbar reveal">
        <div className="category-tabs" role="tablist">
          {CATEGORY_ORDER.map((key) => (
            <button
              aria-selected={activeCategory === key}
              className={`category-tab${activeCategory === key ? " is-active" : ""}`}
              key={key}
              onClick={() => setActiveCategory(key)}
              role="tab"
              type="button"
            >
              {key === "all" ? t.productsPage.categoryAllLabel : t.categoryLabels[key]}
            </button>
          ))}
        </div>

        <div className="toolbar-right">
          <div className="search-field">
            <input
              onChange={(event) => setSearch(event.target.value)}
              placeholder={t.productsPage.searchPlaceholder}
              type="search"
              value={search}
            />
          </div>
          <label className="sort-field">
            <span>{t.productsPage.sortLabel}</span>
            <select onChange={(event) => setSortKey(event.target.value)} value={sortKey}>
              {t.productsPage.sortOptions.map((option) => (
                <option key={option.key} value={option.key}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </section>

      <section className="products-page-grid-wrap reveal">
        <div className="result-bar">
          <span>{t.productsPage.resultCountLabel(sorted.length)}</span>
        </div>

        {sorted.length === 0 ? (
          <div className="empty-state">
            <h3>{t.productsPage.emptyTitle}</h3>
            <p>{t.productsPage.emptyDescription}</p>
          </div>
        ) : (
          <div className="product-grid product-grid--4">
            {sorted.map((product, index) => (
              <div data-reveal-delay={(index % 6) + 1} key={product.id}>
                <ProductCard addToCartLabel={t.products.buyNow} product={product} />
              </div>
            ))}
          </div>
        )}
      </section>

      <footer className="footer" id="contact">
        <div className="footer-band">
          <div className="footer-band-inner">
            <div className="footer-brand">
              <a className="logo logo-footer" href="#/">
                <span>L</span>
                <strong>{t.brand.name}</strong>
              </a>
              <p>{t.footer.description}</p>

              <ul className="footer-social" aria-label="Social links">
                <li>
                  <a aria-label="Facebook" href="#/">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.5 1.6-1.5h1.6V4.6c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.6H8.2V14h2.6v8h2.7z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a aria-label="YouTube" href="#/">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                      <path d="M23 7.2s-.2-1.6-.9-2.3c-.8-.9-1.8-.9-2.2-1C16.6 3.6 12 3.6 12 3.6s-4.6 0-7.9.3c-.4.1-1.4.1-2.2 1C1.2 5.6 1 7.2 1 7.2S.8 9 .8 10.9v1.8c0 1.8.2 3.6.2 3.6s.2 1.6.9 2.3c.8.9 1.9.9 2.4 1 1.7.2 7.7.3 7.7.3s4.6 0 7.9-.3c.4-.1 1.4-.1 2.2-1 .7-.7.9-2.3.9-2.3s.2-1.8.2-3.6v-1.8c0-1.8-.2-3.6-.2-3.6zM9.7 14.8V8.4l5.9 3.2-5.9 3.2z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a aria-label="Zalo" href="#/">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                      <path d="M12 2C6.5 2 2 6 2 11.1c0 2.7 1.5 5.2 3.9 6.8-.1.4-.6 2.3-.7 2.6 0 0-.1.4.2.5.3.1.5-.2.5-.2s2-1.4 2.9-2c1 .3 2.1.4 3.2.4 5.5 0 10-4 10-9.1C22 6 17.5 2 12 2z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a aria-label="Telegram" href="#/">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                      <path d="M9.5 15.4 9.4 19c.4 0 .6-.2.8-.4l2-1.9 4.1 3c.7.4 1.3.2 1.5-.7L21 4.7c.3-1.2-.4-1.6-1.1-1.4L2.4 10.6c-1.1.4-1.1 1.1-.2 1.4l4.4 1.4L16.8 5.8c.5-.3.9-.1.5.2L9.5 15.4z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h2>{t.footer.infoTitle}</h2>
              <ul>
                <li><a href="#/">{t.nav.home}</a></li>
                <li><a href="#/products">{t.footer.categoriesLink}</a></li>
                <li><a href="#/products">{t.footer.newProducts}</a></li>
                <li><a href="#/reviews">{t.footer.guide}</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h2>{t.footer.contactTitle}</h2>
              <ul className="contact-list">
                <li>
                  <span className="contact-icon" aria-hidden="true">☎</span>
                  <a href="tel:0988999888">0988 999 888</a>
                </li>
                <li>
                  <span className="contact-icon" aria-hidden="true">✉</span>
                  <a href="mailto:support@vd-ai.shop">support@vd-ai.shop</a>
                </li>
                <li>
                  <span className="contact-icon" aria-hidden="true">⌖</span>
                  <span>12 Nguyễn Trãi, Quận 1</span>
                </li>
                <li>
                  <span className="contact-icon" aria-hidden="true">⏱</span>
                  <span>{t.topNote.opening}</span>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h2>{t.footer.newsletterTitle}</h2>
              <p className="footer-col-note">{t.productsPage.description}</p>
              <form className="newsletter" onSubmit={(event) => event.preventDefault()}>
                <label htmlFor="email">{t.footer.emailLabel}</label>
                <div>
                  <input id="email" type="email" placeholder={t.footer.emailPlaceholder} />
                  <button type="submit" aria-label={t.footer.submit}>
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p>© 2026 {t.brand.name} — {t.brand.tagline}</p>
            <ul className="payment-icons" aria-label="Payment methods">
              <li><span aria-hidden="true">VISA</span></li>
              <li><span aria-hidden="true">MC</span></li>
              <li><span aria-hidden="true">JCB</span></li>
              <li><span aria-hidden="true">Momo</span></li>
              <li><span aria-hidden="true">ZaloPay</span></li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}

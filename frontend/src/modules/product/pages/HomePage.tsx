import { useI18n } from "../../../shared/hooks/useI18n";
import { useScrollReveal } from "../../../shared/hooks/useScrollReveal";
import { ProductCard } from "../components/ProductCard";
import { PRODUCT_CATALOG } from "../../../shared/configs/products";
import { SiteHeader } from "../../../shared/components/SiteHeader";
import type { ProductCategory } from "../../../shared/configs/i18n";

const CATEGORY_ICONS: Record<ProductCategory, string> = {
  ai: "✦",
  design: "◈",
  office: "▤",
  media: "▶",
  dev: "⌘"
};

const CATEGORY_HUES: Record<ProductCategory, string> = {
  ai: "linear-gradient(135deg, rgba(141, 79, 72, 0.92), rgba(45, 37, 34, 0.78))",
  design: "linear-gradient(135deg, rgba(196, 125, 114, 0.92), rgba(141, 79, 72, 0.78))",
  office: "linear-gradient(135deg, rgba(45, 37, 34, 0.88), rgba(127, 111, 105, 0.78))",
  media: "linear-gradient(135deg, rgba(217, 119, 87, 0.92), rgba(141, 79, 72, 0.78))",
  dev: "linear-gradient(135deg, rgba(60, 47, 43, 0.92), rgba(45, 37, 34, 0.85))"
};

const journalImages = [
  "photo-1737019015667-2bbd1bf5b15f",
  "photo-1620712943543-bcc4688e7485",
  "photo-1549490349-8643362247b5"
];

const localeLabels = {
  vi: "VI",
  en: "EN",
  ja: "JP"
};

/* Hand-picked hero & showcase imagery — fits the AI / digital accounts model */
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1737019015667-2bbd1bf5b15f?auto=format&fit=crop&w=1100&q=80";
const SHOWCASE_IMAGE =
  "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1100&q=80";
const PROMO_IMAGE =
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80";

export function HomePage() {
  const { locale, locales, setLocale, t } = useI18n();
  const pageRef = useScrollReveal<HTMLDivElement>();

  return (
    <main className="beauty-page" ref={pageRef}>
      <SiteHeader active="home" />


      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>{t.hero.title}</h1>
          <p>{t.hero.description}</p>
          <div className="hero-actions">
            <a href="#/products">{t.hero.primaryAction}</a>
            <a href="#categories">{t.hero.secondaryAction}</a>
          </div>
        </div>
        <div className="hero-image">
          <img
            src={HERO_IMAGE}
            alt={t.hero.imageAlt}
          />
          <div className="deal-card">
            <span>{t.deal.label}</span>
            <strong>{t.deal.value}</strong>
            <p>{t.deal.description}</p>
          </div>
        </div>
      </section>

      <section className="feature-row reveal" aria-label="Store benefits">
        {t.features.map((feature, index) => (
          <article key={feature.title} data-reveal-delay={index + 1}>
            <strong>{String(index + 1).padStart(2, "0")}</strong>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </article>
        ))}
      </section>

      <section className="section categories reveal" id="categories">
        <div className="section-heading">
          <p className="eyebrow">{t.categories.eyebrow}</p>
          <h2>{t.categories.title}</h2>
          <p className="section-sub">{t.productsPage.description}</p>
        </div>
        <div className="category-grid">
          {t.categories.items.map((category, index) => {
            const count = PRODUCT_CATALOG.filter(
              (item) => item.category === category.key
            ).length;
            const isFeatured = index === 0;
            return (
              <a
                className={`category-tile${isFeatured ? " is-featured" : ""}`}
                data-reveal-delay={index + 1}
                href={`#/products?cat=${category.key}`}
                key={category.key}
                style={{ background: CATEGORY_HUES[category.key as ProductCategory] }}
              >
                <img className="category-tile-bg" src={category.image} alt="" aria-hidden="true" />
                <div className="category-tile-overlay" />

                <div className="category-tile-body">
                  <div className="category-tile-head">
                    <span className="category-icon" aria-hidden="true">
                      {CATEGORY_ICONS[category.key as ProductCategory]}
                    </span>
                    <span className="category-count">
                      {count} {count === 1 ? "item" : "items"}
                    </span>
                  </div>

                  <h3>{category.name}</h3>
                  <p className="category-desc">{category.description}</p>

                  <div className="category-tile-cta">
                    <span>{t.categories.cta}</span>
                    <span className="arrow" aria-hidden="true">→</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section className="promo-banner reveal">
        <div>
          <p className="eyebrow">{t.promo.eyebrow}</p>
          <h2>{t.promo.title}</h2>
          <p>{t.promo.description}</p>
        </div>
        <a href="#/products">{t.promo.cta}</a>
      </section>

      <section className="section products reveal" id="products">
        <div className="section-heading">
          <p className="eyebrow">{t.products.eyebrow}</p>
          <h2>{t.products.title}</h2>
        </div>
        <div className="product-grid">
          {PRODUCT_CATALOG.slice(0, 6).map((product, index) => (
            <div data-reveal-delay={index + 1} key={product.id}>
              <ProductCard addToCartLabel={t.products.buyNow} product={product} />
            </div>
          ))}
        </div>
        <div className="section-cta">
          <a href="#/products">{t.hero.primaryAction} →</a>
        </div>
      </section>

      <section className="split-showcase reveal">
        <div className="showcase-image">
          <img
            src={SHOWCASE_IMAGE}
            alt={t.showcase.imageAlt}
          />
        </div>
        <div className="showcase-copy">
          <p className="eyebrow">{t.showcase.eyebrow}</p>
          <h2>{t.showcase.title}</h2>
          <p>{t.showcase.description}</p>
          <div className="collection-list">
            {t.showcase.collections.map((collection, index) => (
              <span data-reveal-delay={index + 1} key={collection}>
                {collection}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonial reveal">
        <div className="testimonial-copy">
          <p className="eyebrow">{t.testimonial.eyebrow}</p>
          <h2>{t.testimonial.title}</h2>
          <div className="testimonial-stats" aria-label="Customer rating">
            <span>4.9/5</span>
            <small>★★★★★</small>
          </div>
        </div>
        <article className="testimonial-card">
          <div className="quote-mark" aria-hidden="true">
            "
          </div>
          <blockquote>{t.testimonial.quote}</blockquote>
          <div className="testimonial-author">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=180&q=80"
              alt={t.testimonial.author}
            />
            <div>
              <strong>{t.testimonial.author}</strong>
              <p>{t.testimonial.role}</p>
            </div>
          </div>
        </article>
      </section>

      <section className="section journal reveal" id="journal">
        <div className="section-heading">
          <p className="eyebrow">{t.journal.eyebrow}</p>
          <h2>{t.journal.title}</h2>
        </div>
        <div className="post-grid">
          {t.journal.posts.map((post, index) => (
            <article className="post-card" data-reveal-delay={index + 1} key={post}>
              <img
                src={`https://images.unsplash.com/${journalImages[index]}?auto=format&fit=crop&w=800&q=80`}
                alt={post}
              />
              <div>
                <span>{t.journal.label}</span>
                <h3>{post}</h3>
                <a href="#/">{t.journal.cta}</a>
              </div>
            </article>
          ))}
        </div>
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
                <li><a href="#categories">{t.footer.categoriesLink}</a></li>
                <li><a href="#/products">{t.footer.newProducts}</a></li>
                <li><a href="#/products">{t.hero.primaryAction}</a></li>
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
              <p className="footer-col-note">
                {t.productsPage.description}
              </p>
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

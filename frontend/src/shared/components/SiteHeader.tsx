import { useI18n } from "../hooks/useI18n";

type SiteHeaderProps = {
  /**
   * Which tab is currently active. Used to mark the matching nav link as
   * `.is-active`. Falls back to "home" when omitted.
   */
  active?: "home" | "products" | "reviews";
};

const localeLabels = {
  vi: "VI",
  en: "EN",
  ja: "JP"
} as const;

type MenuItem = { key: string; labelKey: keyof NonNullable<ReturnType<typeof useI18n>["t"]["nav"]>; href: string };

const MENU_ITEMS: MenuItem[] = [
  { key: "home", labelKey: "home", href: "#/" },
  { key: "categories", labelKey: "categories", href: "#categories" },
  { key: "products", labelKey: "products", href: "#/products" },
  { key: "reviews", labelKey: "journal", href: "#/reviews" },
  { key: "contact", labelKey: "contact", href: "#contact" }
];

/**
 * Shared site header used on every page.
 * - Top announcement strip (hotline / shipping / opening hours)
 * - Logo
 * - Main menu (Home / Categories / Products / Journal / Contact)
 * - Right side: language switcher + search/cart/login
 *
 * The header is sticky and uses the same rose/cream palette across the app
 * so it stays consistent when navigating between routes.
 */
export function SiteHeader({ active = "home" }: SiteHeaderProps) {
  const { locale, locales, setLocale, t } = useI18n();

  return (
    <header className="site-header" id="top">
      <div className="top-note">
        <span>{t.topNote.hotline}</span>
        <span>{t.topNote.shipping}</span>
        <span>{t.topNote.opening}</span>
      </div>

      <nav className="navbar" aria-label="Main navigation">
        <a className="logo" href="#/" aria-label={t.brand.name}>
          <span>L</span>
          <strong>{t.brand.name}</strong>
        </a>

        <div className="menu">
          {MENU_ITEMS.map((item) => {
            const isActive =
              (item.key === "home" && active === "home") ||
              (item.key === "products" && active === "products") ||
              (item.key === "reviews" && active === "reviews");
            return (
              <a
                className={isActive ? "is-active" : ""}
                href={item.href}
                key={item.key}
              >
                {t.nav[item.labelKey]}
              </a>
            );
          })}
        </div>

        <div className="nav-actions">
          <select
            aria-label="Select language"
            className="language-select"
            onChange={(event) => setLocale(event.target.value as typeof locale)}
            value={locale}
          >
            {locales.map((item) => (
              <option key={item} value={item}>
                {localeLabels[item]}
              </option>
            ))}
          </select>
          <button type="button" aria-label={t.nav.search}>
            {t.nav.search}
          </button>
          <button type="button" aria-label={t.nav.cart}>
            {t.nav.cart}
          </button>
          <a className="login-btn" href="#/">
            {t.nav.login}
          </a>
        </div>
      </nav>
    </header>
  );
}

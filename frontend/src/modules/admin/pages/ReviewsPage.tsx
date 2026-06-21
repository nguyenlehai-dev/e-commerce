import { useI18n } from "../../../shared/hooks/useI18n";
import { useScrollReveal } from "../../../shared/hooks/useScrollReveal";
import { SiteHeader } from "../../../shared/components/SiteHeader";

/* Hero illustration for the Reviews page — happy customer with
 * laptop + coffee, warm rose-compatible tones. */
const REVIEWS_HERO_IMAGE =
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=80";

const reviewAvatars = [
  "photo-1507003211169-0a1dd7228f2d",
  "photo-1573497019940-1c28c88b4f3e",
  "photo-1500648767791-00dcc994a43e",
  "photo-1438761681033-6461ffad8d80",
  "photo-1472099645785-5658abf4ff4e",
  "photo-1487412720507-e7ab37603c6f"
];

const reviews = [
  {
    stars: 5,
    titleKey: {
      vi: "Tài khoản ổn định",
      en: "Stable account",
      ja: "アカウントが安定"
    },
    bodyKey: {
      vi: "Mua combo Claude Pro + Canva Pro dùng được 8 tháng vẫn ổn, có lần bị lỗi được đổi mới trong ngày.",
      en: "Bought the Claude Pro + Canva Pro combo 8 months ago and it still works. Got a replacement the same day when one had an issue.",
      ja: "Claude Pro + Canva Pro を8ヶ月使っていますが安定。問題があった日も即日交換してもらえました。"
    },
    name: "Hồng Phúc",
    role: { vi: "Designer — Đà Nẵng", en: "Designer — Da Nang", ja: "デザイナー — ダナン" }
  },
  {
    stars: 5,
    titleKey: { vi: "Giao tài khoản cực nhanh", en: "Lightning-fast delivery", ja: "即日配信" },
    bodyKey: {
      vi: "Thanh toán xong 3 phút có tài khoản trong email. Hỗ trợ qua Telegram phản hồi ngay cả 11 giờ đêm.",
      en: "Account arrived in my inbox 3 minutes after payment. Telegram support replied even at 11 PM.",
      ja: "支払いから3分でメールにアカウントが届きました。Telegram サポートは深夜でも即対応。"
    },
    name: "Lan Anh",
    role: { vi: "Content creator — Hà Nội", en: "Content creator — Hanoi", ja: "コンテンツクリエイター — ハノイ" }
  },
  {
    stars: 4.8,
    titleKey: { vi: "Rẻ hơn đăng ký trực tiếp", en: "Cheaper than direct", ja: "直接契約より安い" },
    bodyKey: {
      vi: "Mình tính ra mua ở đây rẻ hơn đăng ký chính hãng tầm 60-70%, mà bảo hành vẫn đầy đủ.",
      en: "Around 60-70% cheaper than subscribing directly, with full warranty still included.",
      ja: "直接契約より 60-70% ほど安く、保証もフルで付いています。"
    },
    name: "Trung Kiên",
    role: { vi: "Developer — TP.HCM", en: "Developer — HCMC", ja: "開発者 — ホーチミン" }
  },
  {
    stars: 5,
    titleKey: { vi: "Bảo hành đổi mới thật sự", en: "Real warranty", ja: "本物の保証" },
    bodyKey: {
      vi: "Tài khoản bị khóa giữa chừng do lỗi nhà cung cấp, shop đổi cái mới ngay trong ngày không hỏi nhiều.",
      en: "Account was locked mid-cycle due to a vendor issue — got a fresh replacement the same day, no questions asked.",
      ja: "途中でアカウントが停止されましたが、当日中に無償交換してもらえました。"
    },
    name: "Mai Chi",
    role: { vi: "Marketer — Hải Phòng", en: "Marketer — Hai Phong", ja: "マーケター — ハイフォン" }
  },
  {
    stars: 5,
    titleKey: { vi: "Đa dạng sản phẩm", en: "Wide selection", ja: "豊富なラインナップ" },
    bodyKey: {
      vi: "Cùng lúc mua Claude, Canva và Midjourney — mỗi gói đều có hướng dẫn sử dụng rõ ràng.",
      en: "Got Claude, Canva and Midjourney at once — each plan came with clear setup instructions.",
      ja: "Claude、Canva、Midjourney をまとめて購入。各プランに丁寧な案内が付いていました。"
    },
    name: "Quốc Bảo",
    role: { vi: "Founder — Bình Dương", en: "Founder — Binh Duong", ja: "創業者 — ビンズオン" }
  },
  {
    stars: 5,
    titleKey: { vi: "Hỗ trợ cực kỳ nhiệt tình", en: "Wonderful support", ja: "とても親切" },
    bodyKey: {
      vi: "Hỏi về cách dùng AI Plus hiệu quả, support chỉ cả prompt mẫu và workflow. Quá tốt!",
      en: "Asked how to get the most out of AI Plus — the team shared sample prompts and a workflow. Above and beyond!",
      ja: "AI Plus の活用法を相談したら、サンプルプロンプトとワークフローまで教えてくれました。"
    },
    name: "Thảo Vy",
    role: { vi: "Editor — Cần Thơ", en: "Editor — Can Tho", ja: "編集者 — カントー" }
  }
];

export function ReviewsPage() {
  const { t, locale } = useI18n();
  const pageRef = useScrollReveal<HTMLDivElement>();

  return (
    <main className="beauty-page" ref={pageRef}>
      <SiteHeader active="reviews" />

      <section className="products-page-hero reviews-hero reveal">
        <div className="reviews-hero-text">
          <p className="eyebrow">{t.testimonial.eyebrow}</p>
          <h1>{t.testimonial.title}</h1>
          <p>{t.testimonial.quote}</p>
        </div>
        <div className="reviews-hero-media" aria-hidden="true">
          <img src={REVIEWS_HERO_IMAGE} alt="" />
          <div className="reviews-hero-overlay" />
        </div>
      </section>

      <section className="reviews-grid reveal">
        {reviews.map((review, index) => (
          <article className="review-card" data-reveal-delay={(index % 6) + 1} key={review.name}>
            <div className="review-stars" aria-label={`${review.stars} / 5`}>
              {"★".repeat(Math.round(review.stars))}
              {"☆".repeat(5 - Math.round(review.stars))}
            </div>
            <h3>{review.titleKey[locale]}</h3>
            <p>{review.bodyKey[locale]}</p>
            <div className="review-author">
              <img
                alt={review.name}
                src={`https://images.unsplash.com/photo-${reviewAvatars[index % reviewAvatars.length]}?auto=format&fit=crop&w=120&q=80`}
              />
              <div>
                <strong>{review.name}</strong>
                <small>{review.role[locale]}</small>
              </div>
            </div>
          </article>
        ))}
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

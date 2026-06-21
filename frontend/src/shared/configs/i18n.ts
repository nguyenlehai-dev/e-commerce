export const supportedLocales = ["vi", "en", "ja"] as const;

export type Locale = (typeof supportedLocales)[number];

export type ProductCategory = "ai" | "design" | "office" | "media" | "dev";

export type ProductItem = {
  id: number;
  slug: string;
  name: string;
  category: ProductCategory;
  brand: string;
  duration: string;
  price: string;
  originalPrice?: string;
  image: string;
  badge?: string;
  rating: number;
  sold: number;
  description: string;
};

export type CategoryItem = {
  key: ProductCategory;
  name: string;
  image: string;
  description: string;
};

export type TranslationResource = {
  brand: { name: string; tagline: string };
  topNote: { hotline: string; shipping: string; opening: string };
  nav: {
    home: string;
    categories: string;
    products: string;
    journal: string;
    contact: string;
    search: string;
    cart: string;
    login: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryAction: string;
    secondaryAction: string;
    imageAlt: string;
  };
  deal: { label: string; value: string; description: string };
  features: Array<{ title: string; description: string }>;
  categories: { eyebrow: string; title: string; cta: string; items: CategoryItem[] };
  promo: { eyebrow: string; title: string; description: string; cta: string };
  products: { eyebrow: string; title: string; addToCart: string; buyNow: string; items: ProductItem[] };
  showcase: { eyebrow: string; title: string; description: string; imageAlt: string; collections: string[] };
  testimonial: { eyebrow: string; title: string; quote: string; author: string; role: string };
  journal: { eyebrow: string; title: string; label: string; cta: string; posts: string[] };
  footer: {
    description: string;
    infoTitle: string;
    categoriesLink: string;
    newProducts: string;
    guide: string;
    contactTitle: string;
    newsletterTitle: string;
    emailLabel: string;
    emailPlaceholder: string;
    submit: string;
  };
  productsPage: {
    eyebrow: string;
    title: string;
    description: string;
    searchPlaceholder: string;
    sortLabel: string;
    sortOptions: { key: string; label: string }[];
    categoryAllLabel: string;
    emptyTitle: string;
    emptyDescription: string;
    resultCountLabel: (count: number) => string;
    soldLabel: string;
    durationLabel: string;
    guarantee: string;
    delivery: string;
    support: string;
  };
  categoryLabels: Record<ProductCategory, string>;
};

const CATEGORY_COVERS: Record<ProductCategory, string> = {
  // AI — futuristic brain / neural network
  ai: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
  // Design — creative workspace with art tools
  design: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=900&q=80",
  // Office — minimal desk with notebook & laptop
  office: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=900&q=80",
  // Media — headphones on warm background
  media: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=900&q=80",
  // Dev — code on screen, dark theme
  dev: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80"
};

const CATEGORY_KEYS: ProductCategory[] = ["ai", "design", "office", "media", "dev"];

const CATEGORY_LABELS_VI: Record<ProductCategory, string> = {
  ai: "Trí tuệ nhân tạo",
  design: "Thiết kế & Sáng tạo",
  office: "Văn phòng & Năng suất",
  media: "Giải trí & Media",
  dev: "Công cụ lập trình"
};
const CATEGORY_LABELS_EN: Record<ProductCategory, string> = {
  ai: "Artificial Intelligence",
  design: "Design & Creative",
  office: "Office & Productivity",
  media: "Entertainment & Media",
  dev: "Developer Tools"
};
const CATEGORY_LABELS_JA: Record<ProductCategory, string> = {
  ai: "AI・人工知能",
  design: "デザイン・クリエイティブ",
  office: "オフィス・仕事効率化",
  media: "エンタメ・メディア",
  dev: "開発ツール"
};

const CATEGORY_DESC_VI: Record<ProductCategory, string> = {
  ai: "Claude, GPT, Claude-Opus và các gói AI cao cấp",
  design: "Canva, Adobe, Figma, Midjourney",
  office: "Notion, Microsoft 365 và bộ công cụ văn phòng",
  media: "YouTube, Spotify, Netflix Premium",
  dev: "GitHub Copilot, IDE và tool cho lập trình viên"
};
const CATEGORY_DESC_EN: Record<ProductCategory, string> = {
  ai: "Claude, GPT, Claude-Opus and other premium AI tools",
  design: "Canva, Adobe, Figma and Midjourney",
  office: "Notion, Microsoft 365 and productivity suites",
  media: "YouTube, Spotify and Netflix Premium",
  dev: "GitHub Copilot, IDEs and dev utilities"
};
const CATEGORY_DESC_JA: Record<ProductCategory, string> = {
  ai: "Claude、GPT、Claude-Opus などの AI プレミアム",
  design: "Canva、Adobe、Figma、Midjourney",
  office: "Notion、Microsoft 365 など業務ツール",
  media: "YouTube、Spotify、Netflix Premium",
  dev: "GitHub Copilot、IDE、開発ツール"
};

const FEATURES_VI = [
  { title: "Giao tai khoan qua email", description: "Tai khoan duoc giao ngay sau khi thanh toan trong vong 5 phut." },
  { title: "Bao hanh doi moi", description: "Loi mat khau, tai khoan loi vao su dung duoc thay mien phi." },
  { title: "Ho tro 24/7", description: "Zalo, Telegram va email - luon co nguoi ho tro truc tiep." }
];

const FEATURES_EN = [
  { title: "Instant delivery", description: "Your account arrives by email within 5 minutes of payment." },
  { title: "1-for-1 warranty", description: "Wrong password or revoked account? Get a free replacement." },
  { title: "24/7 human support", description: "Reach us any time on Zalo, Telegram or email." }
];

const FEATURES_JA = [
  { title: "即時配信", description: "お支払い後、5分以内にメールでアカウントをお届けします。" },
  { title: "1 対 1 保証", description: "パスワード相違、早期失効なども利用期間中ずっと無料で交換対応。" },
  { title: "24 時間サポート", description: "Zalo・Telegram・メールでいつでも人が対応します。" }
];

const JOURNAL_POSTS_VI = [
  "Cách chọn gói Claude Pro phù hợp với công việc",
  "So sánh Claude, AI Plus và AI Plus cho content",
  "Top 5 combo AI cho dân thiết kế năm nay"
];
const JOURNAL_POSTS_EN = [
  "How to pick the right Claude Pro plan",
  "Claude vs AI Plus vs AI Plus for content creators",
  "Top 5 AI bundles for designers this year"
];
const JOURNAL_POSTS_JA = [
  "Claude Pro プランの選び方",
  "Claude と AI Plus と AI Plus の比較",
  "デザイナー向け AI コンボ TOP 5"
];

const buildCategories = (
  labels: Record<ProductCategory, string>,
  descriptions: Record<ProductCategory, string>
): CategoryItem[] =>
  CATEGORY_KEYS.map((key) => ({
    key,
    name: labels[key],
    image: CATEGORY_COVERS[key],
    description: descriptions[key]
  }));

import { PRODUCT_CATALOG } from "./products";

export const translations: Record<Locale, TranslationResource> = {
  vi: {
    brand: { name: "VD AI Shop", tagline: "Cửa hàng tài khoản AI, phần mềm premium và dịch vụ số" },
    topNote: { hotline: "Hotline: 0988 999 888", shipping: "Giao tài khoản trong 5 phút", opening: "Hỗ trợ: 8:00 - 22:00" },
    nav: { home: "Trang chủ", categories: "Danh mục", products: "Sản phẩm", journal: "Tin tức", contact: "Liên hệ", search: "Tìm kiếm", cart: "Giỏ hàng", login: "Đăng nhập" },
    hero: {
      eyebrow: "Tài khoản AI & phần mềm premium",
      title: "Nâng tầm hiệu suất với tài khoản AI chính hãng",
      description: "Claude Pro, Claude Opus Advanced, AI Plus, Canva Pro, Adobe, GitHub Copilot… Tài khoản giao ngay, bảo hành đổi trong toàn thời gian sử dụng.",
      primaryAction: "Xem sản phẩm",
      secondaryAction: "Khám phá danh mục",
      imageAlt: "Minh hoạ tài khoản AI"
    },
    deal: { label: "Flash sale", value: "-40%", description: "Combo AI cho creator" },
    features: FEATURES_VI,
    categories: { eyebrow: "Danh mục nổi bật", title: "Chọn nhanh theo nhu cầu công việc", cta: "Khám phá", items: buildCategories(CATEGORY_LABELS_VI, CATEGORY_DESC_VI) },
    promo: {
      eyebrow: "Combo creator",
      title: "Bộ công cụ AI cho creator giảm đến 40%",
      description: "Claude Pro + Canva Pro + Midjourney — đủ để viết bài, thiết kế và sản xuất ảnh mỗi ngày.",
      cta: "Nhận ưu đãi"
    },
    products: { eyebrow: "Sản phẩm bán chạy", title: "Top tài khoản được mua nhiều tuần này", addToCart: "Thêm giỏ", buyNow: "Mua ngay", items: PRODUCT_CATALOG.slice(0, 6) },
    showcase: {
      eyebrow: "Quy trình mua hàng",
      title: "Mua tài khoản premium chỉ trong 3 bước",
      description: "Chọn gói, thanh toán và nhận tài khoản qua email — toàn bộ quy trình được tự động hoá và có hỗ trợ trực tiếp.",
      imageAlt: "Minh hoạ quy trình mua tài khoản",
      collections: ["AI cho content", "Công cụ designer", "Bộ Office doanh nghiệp", "Combo creator"]
    },
    testimonial: {
      eyebrow: "Khách hàng nói gì",
      title: "Hơn 12.000 khách đã dùng qua dịch vụ",
      quote: "Mình dùng combo Claude + Canva để viết bài và làm ảnh blog. Tài khoản ổn định, support phản hồi cực nhanh, giá hợp lý hơn rất nhiều so với đăng ký trực tiếp.",
      author: "Minh Quân",
      role: "Content creator — TP.HCM"
    },
    journal: { eyebrow: "Cẩm nang AI", title: "Mẹo và cập nhật mới nhất", label: "AI tips", cta: "Đọc tiếp", posts: JOURNAL_POSTS_VI },
    footer: {
      description: "Chuyên tài khoản AI, phần mềm bản quyền và dịch vụ số — giao tức thì, bảo hành dài hạn.",
      infoTitle: "Thông tin",
      categoriesLink: "Danh mục",
      newProducts: "Sản phẩm mới",
      guide: "Cẩm nang",
      contactTitle: "Liên hệ",
      newsletterTitle: "Đăng ký nhận ưu đãi",
      emailLabel: "Email",
      emailPlaceholder: "Email của bạn",
      submit: "Gửi"
    },
    productsPage: {
      eyebrow: "Tất cả sản phẩm",
      title: "Danh sách tài khoản AI & phần mềm premium",
      description: "Lọc theo danh mục, sắp xếp theo giá hoặc độ phổ biến — chọn gói phù hợp với nhu cầu của bạn.",
      searchPlaceholder: "Tìm theo tên hoặc hãng…",
      sortLabel: "Sắp xếp",
      sortOptions: [
        { key: "popular", label: "Phổ biến nhất" },
        { key: "price-asc", label: "Giá tăng dần" },
        { key: "price-desc", label: "Giá giảm dần" },
        { key: "rating", label: "Đánh giá cao" },
        { key: "newest", label: "Mới nhất" }
      ],
      categoryAllLabel: "Tất cả",
      emptyTitle: "Không tìm thấy sản phẩm phù hợp",
      emptyDescription: "Thử đổi từ khoá hoặc chọn một danh mục khác.",
      resultCountLabel: (count) => `${count} sản phẩm`,
      soldLabel: "Đã bán",
      durationLabel: "Thời hạn",
      guarantee: "Bảo hành đổi mới",
      delivery: "Giao tài khoản tức thì",
      support: "Hỗ trợ 24/7"
    },
    categoryLabels: CATEGORY_LABELS_VI
  },
  en: {
    brand: { name: "VD AI Shop", tagline: "AI accounts, premium software and digital services" },
    topNote: { hotline: "Hotline: 0988 999 888", shipping: "Account delivered in 5 minutes", opening: "Support: 8:00 AM - 10:00 PM" },
    nav: { home: "Home", categories: "Categories", products: "Products", journal: "Journal", contact: "Contact", search: "Search", cart: "Cart", login: "Sign in" },
    hero: {
      eyebrow: "AI accounts & premium software",
      title: "Level up your workflow with authentic AI subscriptions",
      description: "Claude Pro, Claude Opus Advanced, AI Plus, Canva Pro, Adobe, GitHub Copilot — instant delivery, full warranty for the entire subscription.",
      primaryAction: "Browse products",
      secondaryAction: "View categories",
      imageAlt: "AI account illustration"
    },
    deal: { label: "Flash sale", value: "-40%", description: "Creator AI bundle" },
    features: FEATURES_EN,
    categories: { eyebrow: "Featured categories", title: "Shop faster by workflow", cta: "Explore", items: buildCategories(CATEGORY_LABELS_EN, CATEGORY_DESC_EN) },
    promo: {
      eyebrow: "Creator bundle",
      title: "AI toolkit for creators up to 40% off",
      description: "Claude Pro + Canva Pro + Midjourney — write, design and ship visuals every single day.",
      cta: "Get the deal"
    },
    products: { eyebrow: "Best sellers", title: "Top accounts purchased this week", addToCart: "Add cart", buyNow: "Buy now", items: PRODUCT_CATALOG.slice(0, 6) },
    showcase: {
      eyebrow: "How it works",
      title: "Get a premium account in 3 steps",
      description: "Pick a plan, pay and receive credentials by email — fully automated and supported by a real human.",
      imageAlt: "Account purchase flow illustration",
      collections: ["AI for content", "Designer tools", "Business office suite", "Creator combo"]
    },
    testimonial: {
      eyebrow: "What customers say",
      title: "Trusted by 12,000+ customers",
      quote: "I use the Claude + Canva combo for blog writing and visuals. Accounts stay stable, support replies in minutes, and the price is way better than subscribing directly.",
      author: "Minh Quan",
      role: "Content creator — HCMC"
    },
    journal: { eyebrow: "AI playbook", title: "Latest tips and updates", label: "AI tips", cta: "Read more", posts: JOURNAL_POSTS_EN },
    footer: {
      description: "AI accounts, licensed software and digital services — instant delivery, long-term warranty.",
      infoTitle: "Information",
      categoriesLink: "Categories",
      newProducts: "New products",
      guide: "Playbook",
      contactTitle: "Contact",
      newsletterTitle: "Subscribe for deals",
      emailLabel: "Email",
      emailPlaceholder: "Your email",
      submit: "Send"
    },
    productsPage: {
      eyebrow: "All products",
      title: "AI accounts & premium software catalog",
      description: "Filter by category, sort by price or popularity — pick the plan that fits your workflow.",
      searchPlaceholder: "Search by name or vendor…",
      sortLabel: "Sort by",
      sortOptions: [
        { key: "popular", label: "Most popular" },
        { key: "price-asc", label: "Price low to high" },
        { key: "price-desc", label: "Price high to low" },
        { key: "rating", label: "Top rated" },
        { key: "newest", label: "Newest" }
      ],
      categoryAllLabel: "All",
      emptyTitle: "No products match your filters",
      emptyDescription: "Try a different keyword or pick another category.",
      resultCountLabel: (count) => `${count} products`,
      soldLabel: "Sold",
      durationLabel: "Duration",
      guarantee: "1-for-1 warranty",
      delivery: "Instant delivery",
      support: "24/7 support"
    },
    categoryLabels: CATEGORY_LABELS_EN
  },
  ja: {
    brand: { name: "VD AI Shop", tagline: "AI アカウント・プレミアムソフト・デジタルサービス" },
    topNote: { hotline: "ホットライン: 0988 999 888", shipping: "5分以内にアカウントをお届け", opening: "対応時間: 8:00 - 22:00" },
    nav: { home: "ホーム", categories: "カテゴリ", products: "商品", journal: "ニュース", contact: "お問い合わせ", search: "検索", cart: "カート", login: "ログイン" },
    hero: {
      eyebrow: "AI アカウント・プレミアムソフト",
      title: "本物の AI サブスクで仕事をレベルアップ",
      description: "Claude Pro、Claude Opus Advanced、AI Plus、Canva Pro、Adobe、GitHub Copilot — 即時配信、利用期間中はフル保証。",
      primaryAction: "商品を見る",
      secondaryAction: "カテゴリを見る",
      imageAlt: "AI アカウントのイラスト"
    },
    deal: { label: "フラッシュセール", value: "-40%", description: "クリエイター向け AI セット" },
    features: FEATURES_JA,
    categories: { eyebrow: "注目カテゴリ", title: "仕事のニーズからすぐ選ぶ", cta: "見る", items: buildCategories(CATEGORY_LABELS_JA, CATEGORY_DESC_JA) },
    promo: {
      eyebrow: "クリエイターセット",
      title: "AI ツールセットが最大 40% オフ",
      description: "Claude Pro + Canva Pro + Midjourney — 記事作成、デザイン、画像生成を毎日これ一つで。",
      cta: "特典を見る"
    },
    products: { eyebrow: "人気商品", title: "今週最も購入されたアカウント", addToCart: "カートへ", buyNow: "今すぐ購入", items: PRODUCT_CATALOG.slice(0, 6) },
    showcase: {
      eyebrow: "ご利用の流れ",
      title: "3 ステップでプレミアムアカウントを取得",
      description: "プランを選び、支払いを行い、メールでアカウントを受け取る — 全工程を自動化しつつ、有人サポートも万全です。",
      imageAlt: "アカウント購入フローのイラスト",
      collections: ["コンテンツ向け AI", "デザイナーツール", "ビジネスオフィス", "クリエイターコンボ"]
    },
    testimonial: {
      eyebrow: "お客様の声",
      title: "12,000 名以上にご利用いただいています",
      quote: "Claude + Canva のコンボでブログ記事と画像を作っています。アカウントは安定、サポートも迅速で、直接契約するより圧倒的にコストパフォーマンスが良いです。",
      author: "Minh Quan",
      role: "コンテンツクリエイター — ホーチミン"
    },
    journal: { eyebrow: "AI ガイド", title: "最新のヒントとアップデート", label: "AI tips", cta: "続きを読む", posts: JOURNAL_POSTS_JA },
    footer: {
      description: "AI アカウント、ライセンスソフト、デジタルサービス — 即時配信、長期保証。",
      infoTitle: "情報",
      categoriesLink: "カテゴリ",
      newProducts: "新商品",
      guide: "ガイド",
      contactTitle: "お問い合わせ",
      newsletterTitle: "お得情報を受け取る",
      emailLabel: "メール",
      emailPlaceholder: "メールアドレス",
      submit: "送信"
    },
    productsPage: {
      eyebrow: "全商品",
      title: "AI アカウント・プレミアムソフト一覧",
      description: "カテゴリで絞り込み、価格や人気順で並び替え — 用途に合うプランを見つけてください。",
      searchPlaceholder: "名前または提供元で検索…",
      sortLabel: "並び替え",
      sortOptions: [
        { key: "popular", label: "人気順" },
        { key: "price-asc", label: "価格が安い順" },
        { key: "price-desc", label: "価格が高い順" },
        { key: "rating", label: "評価が高い順" },
        { key: "newest", label: "新着順" }
      ],
      categoryAllLabel: "すべて",
      emptyTitle: "該当する商品が見つかりません",
      emptyDescription: "キーワードを変えるか、別のカテゴリを選んでください。",
      resultCountLabel: (count) => `${count} 件`,
      soldLabel: "販売数",
      durationLabel: "利用期間",
      guarantee: "1 対 1 保証",
      delivery: "即時配信",
      support: "24 時間サポート"
    },
    categoryLabels: CATEGORY_LABELS_JA
  }
};

export function normalizeLocale(value: string | undefined): Locale | null {
  if (!value) {
    return null;
  }

  const locale = value.toLowerCase();

  if (locale.startsWith("vi")) {
    return "vi";
  }

  if (locale.startsWith("ja") || locale.startsWith("jp")) {
    return "ja";
  }

  if (locale.startsWith("en")) {
    return "en";
  }

  return null;
}

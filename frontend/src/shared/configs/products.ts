/**
 * Shared product catalog — same data across all locales.
 * Names/prices/durations are formatted per locale in `configs/i18n.ts`,
 * but the underlying identity (slug, brand, category, image, badge,
 * rating, sold, description, prices) lives here so every page renders
 * the same 16 products.
 */
import type { ProductItem } from "./i18n";

/* ============================================================
   Curated Unsplash images for each product.
   Each one is picked to be visually meaningful — the picture
   literally tells you what the product does, instead of being
   a generic abstract texture.

   AI         → chat / dashboard / neural net / search UI
   Design     → canvas / artwork / creative workspace / UI design
   Office     → documents / spreadsheets / notes
   Media      → headphones / cinema / streaming screen
   Dev        → code editor with syntax highlight
   ============================================================ */
const IMG = {
  // AI ---------------------------------------------------------------------
  // Claude Pro — conversational AI chat interface
  claudePro:
    "https://images.unsplash.com/photo-1737019015667-2bbd1bf5b15f?auto=format&fit=crop&w=900&q=80",
  // Claude Opus — abstract data/AI core, dramatic
  claudeOpus:
    "https://images.unsplash.com/photo-1675557009875-436f7a7bd49e?auto=format&fit=crop&w=900&q=80",
  // AI Plus (VD AI Shop) — futuristic robot/AI assistant
  aiPlus:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
  // AI Plus (Google) — AI assistant face / chatbot
  aiPlus2:
    "https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&w=900&q=80",
  // Claude-Opus Advanced — Google AI / colorful
  claudeOpusAi:
    "https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&w=900&q=80",
  // Perplexity Pro — search / information
  perplexity:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",

  // Design ------------------------------------------------------------------
  // Midjourney — AI-generated artwork
  midjourney:
    "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=900&q=80",
  // Canva — design canvas / templates grid
  canva:
    "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80",
  // Adobe CC — photographer / creative pro workspace
  adobe:
    "https://images.unsplash.com/photo-1561070791-2526d30994b8?auto=format&fit=crop&w=900&q=80",
  // Figma — UI wireframe on screen
  figma:
    "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=900&q=80",

  // Office ------------------------------------------------------------------
  // Notion — minimalist notes / notebook
  notion:
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=900&q=80",
  // Microsoft 365 — productivity / spreadsheets
  office365:
    "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=900&q=80",

  // Media -------------------------------------------------------------------
  // YouTube Premium — video creation / streaming setup
  youtube:
    "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=900&q=80",
  // Spotify — headphones listening to music
  spotify:
    "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=900&q=80",
  // Netflix — cinema / dark red seats
  netflix:
    "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=900&q=80",

  // Dev ---------------------------------------------------------------------
  // GitHub Copilot — code on screen with syntax highlighting
  copilot:
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80"
} as const;

export const PRODUCT_CATALOG: ProductItem[] = [
  {
    id: 1,
    slug: "claude-pro",
    name: "Claude Pro",
    category: "ai",
    brand: "nhà cung cấp dịch vụ AI",
    duration: "1 tháng",
    price: "180.000đ",
    originalPrice: "250.000đ",
    image: IMG.claudePro,
    badge: "-28%",
    rating: 4.9,
    sold: 1284,
    description: "Tài khoản Claude Pro chính hãng, dùng ổn định cho cá nhân và team nhỏ."
  },
  {
    id: 2,
    slug: "Claude-Opus",
    name: "Claude Opus Advanced",
    category: "ai",
    brand: "nhà cung cấp dịch vụ AI",
    duration: "1 tháng",
    price: "320.000đ",
    originalPrice: "450.000đ",
    image: IMG.claudeOpus,
    badge: "Hot",
    rating: 5.0,
    sold: 942,
    description: "Gói Claude Opus 4.5 — model mạnh nhất, ưu tiên truy cập và tốc độ phản hồi cao."
  },
  {
    id: 3,
    slug: "ai-plus",
    name: "AI Plus",
    category: "ai",
    brand: "VD AI Shop",
    duration: "1 tháng",
    price: "120.000đ",
    image: IMG.aiPlus,
    badge: "New",
    rating: 4.7,
    sold: 612,
    description: "Gói AI tổng hợp: Claude, GPT, Claude-Opus, Perplexity trong một tài khoản duy nhất."
  },
  {
    id: 4,
    slug: "AI-plus",
    name: "AI Plus",
    category: "ai",
    brand: "nhà cung cấp dịch vụ AI",
    duration: "1 tháng",
    price: "160.000đ",
    originalPrice: "220.000đ",
    image: IMG.aiPlus2,
    badge: "-27%",
    rating: 4.8,
    sold: 2105,
    description: "Tài khoản AI Plus, truy cập Claude-Opus, DALL·E, tạo ảnh và phân tích dữ liệu."
  },
  {
    id: 5,
    slug: "Claude-Opus",
    name: "Claude-Opus Advanced",
    category: "ai",
    brand: "Google",
    duration: "1 tháng",
    price: "150.000đ",
    image: IMG.claudeOpusAi,
    rating: 4.6,
    sold: 488,
    description: "Google Claude-Opus Advanced — tích hợp Gmail, Docs, Sheets và xử lý ảnh/video."
  },
  {
    id: 6,
    slug: "perplexity-pro",
    name: "Perplexity Pro",
    category: "ai",
    brand: "Perplexity",
    duration: "1 tháng",
    price: "130.000đ",
    image: IMG.perplexity,
    badge: "Hot",
    rating: 4.7,
    sold: 357,
    description: "Perplexity Pro với Claude-Opus và Claude — tìm kiếm AI chính xác và trích dẫn nguồn."
  },
  {
    id: 7,
    slug: "midjourney",
    name: "Midjourney Standard",
    category: "design",
    brand: "Midjourney",
    duration: "1 tháng",
    price: "210.000đ",
    originalPrice: "300.000đ",
    image: IMG.midjourney,
    badge: "-30%",
    rating: 4.9,
    sold: 826,
    description: "Midjourney Standard Plan — tạo ảnh AI chất lượng cao cho designer và content."
  },
  {
    id: 8,
    slug: "canva-pro",
    name: "Canva Pro",
    category: "design",
    brand: "Canva",
    duration: "1 năm",
    price: "290.000đ",
    originalPrice: "1.200.000đ",
    image: IMG.canva,
    badge: "-76%",
    rating: 4.9,
    sold: 3140,
    description: "Canva Pro 1 năm — toàn bộ template premium, brand kit và xóa nền không giới hạn."
  },
  {
    id: 9,
    slug: "adobe-cc",
    name: "Adobe Creative Cloud",
    category: "design",
    brand: "Adobe",
    duration: "1 tháng",
    price: "380.000đ",
    image: IMG.adobe,
    rating: 4.8,
    sold: 274,
    description: "Adobe CC All Apps — Photoshop, Illustrator, Premiere, After Effects đầy đủ."
  },
  {
    id: 10,
    slug: "figma-pro",
    name: "Figma Professional",
    category: "design",
    brand: "Figma",
    duration: "1 năm",
    price: "520.000đ",
    originalPrice: "2.400.000đ",
    image: IMG.figma,
    badge: "Best",
    rating: 4.9,
    sold: 519,
    description: "Figma Professional 1 năm — team library, dev mode và unlimited file version."
  },
  {
    id: 11,
    slug: "notion-ai",
    name: "Notion Plus AI",
    category: "office",
    brand: "Notion",
    duration: "1 tháng",
    price: "110.000đ",
    image: IMG.notion,
    rating: 4.6,
    sold: 401,
    description: "Notion Plus + AI — ghi chú, quản lý dự án và AI viết nội dung tích hợp."
  },
  {
    id: 12,
    slug: "office-365",
    name: "Microsoft 365",
    category: "office",
    brand: "Microsoft",
    duration: "1 năm",
    price: "690.000đ",
    originalPrice: "2.100.000đ",
    image: IMG.office365,
    badge: "-67%",
    rating: 4.8,
    sold: 1672,
    description: "Microsoft 365 Personal 1 năm — Word, Excel, PowerPoint, OneDrive 1TB."
  },
  {
    id: 13,
    slug: "youtube-premium",
    name: "YouTube Premium",
    category: "media",
    brand: "Google",
    duration: "1 tháng",
    price: "55.000đ",
    image: IMG.youtube,
    badge: "Hot",
    rating: 4.7,
    sold: 4521,
    description: "YouTube Premium — xem không quảng cáo, YouTube Music và phát nền."
  },
  {
    id: 14,
    slug: "spotify",
    name: "Spotify Premium",
    category: "media",
    brand: "Spotify",
    duration: "3 tháng",
    price: "160.000đ",
    originalPrice: "240.000đ",
    image: IMG.spotify,
    badge: "-33%",
    rating: 4.8,
    sold: 2890,
    description: "Spotify Premium 3 tháng — nghe nhạc không quảng cáo, tải về nghe offline."
  },
  {
    id: 15,
    slug: "netflix",
    name: "Netflix Premium 4K",
    category: "media",
    brand: "Netflix",
    duration: "1 tháng",
    price: "120.000đ",
    image: IMG.netflix,
    rating: 4.6,
    sold: 1354,
    description: "Netflix Premium 4K UHD — 1 profile riêng, xem phim chất lượng cao."
  },
  {
    id: 16,
    slug: "github-copilot",
    name: "GitHub Copilot Pro",
    category: "dev",
    brand: "GitHub",
    duration: "1 tháng",
    price: "190.000đ",
    originalPrice: "260.000đ",
    image: IMG.copilot,
    badge: "-27%",
    rating: 4.9,
    sold: 388,
    description: "GitHub Copilot Pro — gợi ý code AI trong VS Code, JetBrains và Neovim."
  }
];

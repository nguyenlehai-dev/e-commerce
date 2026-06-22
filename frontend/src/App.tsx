import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  Banknote,
  Headphones,
  LayoutDashboard,
  RefreshCw,
  Ticket,
  WalletCards,
} from "lucide-react";
import { apiGet, apiPost, Role } from "./core/network/apiClient";
import { AdminDashboard } from "./modules/admin/AdminDashboard";
import { OrderPanel } from "./modules/cart/OrderPanel";
import { Order, OrderListItem } from "./modules/cart/types";
import { ProductGrid } from "./modules/product/ProductGrid";
import { Product } from "./modules/product/types";
import { formatVnd } from "./shared/format";

type UserProfile = {
  id: string;
  name: string;
  email: string;
  role: Role;
  balance: number;
  commission_balance: number;
};

type FinanceSummary = {
  revenue: number;
  expense: number;
  net_profit: number;
  wallet_liability: number;
};

type AdminMetrics = {
  users: number;
  orders: number;
  available_credentials: number;
  pending_warranty_tickets: number;
  active_coupons: number;
  sold_credentials: number;
};

type Coupon = {
  code: string;
  type: string;
  value: number;
  allowed_roles: string[];
  min_order_value: number;
  active: boolean;
  description: string;
};

type WarrantyTicket = {
  id: string;
  order_id: string;
  status: string;
  reason: string;
  replacement_credential_id?: string | null;
};

type ChatThread = {
  id: string;
  user_id: string;
  product_id: string;
  messages: Array<{ sender: string; text: string; created_at: string }>;
  offer?: { id: string; price: number; expires_at: string } | null;
};

type LedgerEntry = {
  id: string;
  type: string;
  amount: number;
  note: string;
};

const roleOptions: Array<{ value: Role; label: string }> = [
  { value: "retailer", label: "Khach le" },
  { value: "wholesaler", label: "Khach si" },
  { value: "collaborator", label: "CTV" },
  { value: "admin", label: "Admin" },
];

export function App() {
  const [role, setRole] = useState<Role>("retailer");
  const [products, setProducts] = useState<Product[]>([]);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [order, setOrder] = useState<Order | null>(null);
  const [orders, setOrders] = useState<OrderListItem[]>([]);
  const [finance, setFinance] = useState<FinanceSummary | null>(null);
  const [metrics, setMetrics] = useState<AdminMetrics | null>(null);
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [tickets, setTickets] = useState<WarrantyTicket[]>([]);
  const [threads, setThreads] = useState<ChatThread[]>([]);
  const [ledger, setLedger] = useState<LedgerEntry[]>([]);
  const [selectedCoupon, setSelectedCoupon] = useState("WELCOME10");
  const [topupAmount, setTopupAmount] = useState("200000");
  const [negotiatedPrice, setNegotiatedPrice] = useState("400000");
  const [status, setStatus] = useState("San sang ban tai khoan AI.");

  const activeUserId = useMemo(() => {
    if (role === "admin") return "u-admin";
    if (role === "collaborator") return "u-ctv";
    return "u-retail";
  }, [role]);

  async function loadData(nextRole = role) {
    setStatus("Dang dong bo du lieu...");
    const [nextProducts, nextProfile, nextFinance, nextCoupons, nextOrders, nextTickets, nextThreads, nextLedger] =
      await Promise.all([
        apiGet<Product[]>("/api/products", nextRole),
        apiGet<UserProfile>("/api/auth/me", nextRole),
        apiGet<FinanceSummary>("/api/finance/summary", nextRole),
        apiGet<Coupon[]>("/api/coupons", nextRole),
        apiGet<OrderListItem[]>(`/api/orders?user_id=${activeUserId}`, nextRole),
        apiGet<WarrantyTicket[]>("/api/orders/warranty", nextRole).catch(() => []),
        apiGet<ChatThread[]>("/api/chat/threads", nextRole),
        apiGet<LedgerEntry[]>("/api/finance/ledger", nextRole),
      ]);

    setProducts(nextProducts);
    setProfile(nextProfile);
    setFinance(nextFinance);
    setCoupons(nextCoupons);
    setOrders(nextOrders);
    setTickets(nextTickets);
    setThreads(nextThreads);
    setLedger(nextLedger);

    if (nextRole === "admin") {
      setMetrics(await apiGet<AdminMetrics>("/api/admin/dashboard", "admin"));
    }
    setStatus("Du lieu da dong bo.");
  }

  useEffect(() => {
    loadData(role).catch((error) => setStatus(error.message));
  }, [role]);

  async function buyProduct(product: Product) {
    setStatus(`Dang xuat kho ${product.name}...`);
    const nextOrder = await apiPost<Order>("/api/orders/checkout", role, {
      user_id: activeUserId,
      product_id: product.id,
      quantity: 1,
      affiliate_code: role === "collaborator" ? "CTV-DEMO" : null,
      coupon_code: selectedCoupon || null,
    });
    setOrder(nextOrder);
    setStatus("Thanh toan thanh cong, credential da giao ngay.");
    await loadData(role);
  }

  async function openWarrantyTicket(targetOrder: Order) {
    const ticket = await apiPost<{ id: string }>(`/api/orders/${targetOrder.id}/warranty`, role, {
      reason: "Tai khoan bi loi dang nhap",
    });
    setStatus(`Da tao ticket bao hanh ${ticket.id}.`);
    await loadData(role);
  }

  async function startChat(product: Product) {
    const thread = await apiPost<{ id: string }>("/api/chat/threads", role, {
      user_id: activeUserId,
      product_id: product.id,
      message: "Toi muon thuong luong gia cho don so luong lon.",
    });
    await apiPost("/api/chat/offers", role, {
      thread_id: thread.id,
      product_id: product.id,
      user_id: activeUserId,
      negotiated_price: Number(negotiatedPrice),
      expires_minutes: 30,
    });
    setStatus(`Da mo chat thuong luong ${thread.id}.`);
    await loadData(role);
  }

  async function topupWallet() {
    const amount = Number(topupAmount);
    if (!Number.isFinite(amount) || amount <= 0) return;
    await apiPost("/api/finance/wallet/topup", role, {
      user_id: activeUserId,
      amount,
      provider: "bank_qr",
    });
    setStatus(`Da nap vi ${formatVnd(amount)}.`);
    await loadData(role);
  }

  return (
    <main>
      <header className="topbar">
        <div>
          <p className="eyebrow">AI Account Commerce</p>
          <h1>Ban tai khoan AI, giao credential tu dong</h1>
        </div>
        <div className="role-switcher" aria-label="Chon vai tro">
          {roleOptions.map((option) => (
            <button
              type="button"
              key={option.value}
              className={role === option.value ? "active" : ""}
              onClick={() => setRole(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </header>

      <section className="status-band">
        <div>
          <span>Trang thai</span>
          <strong>{status}</strong>
        </div>
        <div>
          <span>Vi hien tai</span>
          <strong>{profile ? formatVnd(profile.balance) : "..."}</strong>
        </div>
        <button type="button" className="ghost text-button" onClick={() => loadData(role)}>
          <RefreshCw size={18} />
          Dong bo
        </button>
      </section>

      <section className="control-strip">
        <div className="control-card">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Coupon</p>
              <h2>Ma giam gia</h2>
            </div>
            <Ticket size={22} />
          </div>
          <select value={selectedCoupon} onChange={(event) => setSelectedCoupon(event.target.value)}>
            {coupons.map((coupon) => (
              <option key={coupon.code} value={coupon.code}>
                {coupon.code} - {coupon.description}
              </option>
            ))}
          </select>
        </div>
        <div className="control-card">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Nap vi</p>
              <h2>QR / bank</h2>
            </div>
            <Banknote size={22} />
          </div>
          <div className="inline-form">
            <input value={topupAmount} onChange={(event) => setTopupAmount(event.target.value)} />
            <button type="button" className="primary" onClick={topupWallet}>
              Nap
            </button>
          </div>
        </div>
        <div className="control-card">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Thuong luong</p>
              <h2>Gia rieng cho chat</h2>
            </div>
            <Headphones size={22} />
          </div>
          <div className="inline-form">
            <input value={negotiatedPrice} onChange={(event) => setNegotiatedPrice(event.target.value)} />
            <span className="muted">Gia de xuat</span>
          </div>
        </div>
      </section>

      <section className="workspace">
        <div className="catalog">
          <div className="section-title">
            <div>
              <p className="eyebrow">Catalog</p>
              <h2>Gia tu dong theo nhom khach</h2>
            </div>
            <div className="tiny-note">
              <WalletCards size={18} />
              Retail / Si / CTV
            </div>
          </div>
          <ProductGrid products={products} onBuy={buyProduct} onChat={startChat} />
        </div>

        <aside className="side-stack">
          <OrderPanel order={order} onWarranty={openWarrantyTicket} />
          <section className="panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">Lich su don</p>
                <h2>{orders.length} don gan nhat</h2>
              </div>
              <Activity size={22} />
            </div>
            <div className="history-list">
              {orders.map((item) => (
                <div className="history-item" key={item.id}>
                  <strong>{item.product_id}</strong>
                  <span>{formatVnd(item.final_total)}</span>
                  <small>{item.status}</small>
                </div>
              ))}
            </div>
          </section>
          <section className="panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">Chat</p>
                <h2>{threads.length} thread thuong luong</h2>
              </div>
              <Headphones size={24} />
            </div>
            <div className="history-list">
              {threads.slice(-3).map((thread) => (
                <div className="history-item" key={thread.id}>
                  <strong>{thread.product_id}</strong>
                  <span>{thread.offer ? formatVnd(thread.offer.price) : "No offer"}</span>
                  <small>{thread.messages.length} messages</small>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </section>

      <section className="finance-band">
        <div className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Tai chinh</p>
              <h2>Thu, chi, loi nhuan</h2>
            </div>
            <LayoutDashboard size={24} />
          </div>
          <div className="finance-grid">
            <div>
              <span>Doanh thu</span>
              <strong>{finance ? formatVnd(finance.revenue) : "..."}</strong>
            </div>
            <div>
              <span>Chi phi</span>
              <strong>{finance ? formatVnd(finance.expense) : "..."}</strong>
            </div>
            <div>
              <span>Loi nhuan</span>
              <strong>{finance ? formatVnd(finance.net_profit) : "..."}</strong>
            </div>
            <div>
              <span>Nghia vu vi</span>
              <strong>{finance ? formatVnd(finance.wallet_liability) : "..."}</strong>
            </div>
          </div>
          <div className="ledger-list">
            {ledger.slice(-5).map((entry) => (
              <div className="ledger-item" key={entry.id}>
                <span>{entry.type}</span>
                <strong>{formatVnd(entry.amount)}</strong>
                <small>{entry.note}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {role === "admin" && (
        <section className="admin-section">
          <div className="section-title">
            <div>
              <p className="eyebrow">Admin</p>
              <h2>Tai chinh, kho va bao hanh</h2>
            </div>
            <LayoutDashboard size={24} />
          </div>
          <AdminDashboard finance={finance} metrics={metrics} />
          <div className="panel admin-extra">
            <h3>Ticket bao hanh</h3>
            <div className="history-list">
              {tickets.map((ticket) => (
                <div className="history-item" key={ticket.id}>
                  <strong>{ticket.order_id}</strong>
                  <span>{ticket.status}</span>
                  <small>{ticket.reason}</small>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

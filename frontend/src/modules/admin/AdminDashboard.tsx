import { BarChart3, CircleDollarSign, UsersRound, Warehouse } from "lucide-react";
import { formatVnd } from "../../shared/format";

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

type Props = {
  finance: FinanceSummary | null;
  metrics: AdminMetrics | null;
};

export function AdminDashboard({ finance, metrics }: Props) {
  return (
    <section className="admin-grid">
      <div className="metric">
        <CircleDollarSign size={22} />
        <span>Doanh thu</span>
        <strong>{finance ? formatVnd(finance.revenue) : "..."}</strong>
      </div>
      <div className="metric">
        <BarChart3 size={22} />
        <span>Loi nhuan rong</span>
        <strong>{finance ? formatVnd(finance.net_profit) : "..."}</strong>
      </div>
      <div className="metric">
        <Warehouse size={22} />
        <span>Kho kha dung</span>
        <strong>{metrics?.available_credentials ?? "..."}</strong>
      </div>
      <div className="metric">
        <BarChart3 size={22} />
        <span>Da ban</span>
        <strong>{metrics?.sold_credentials ?? "..."}</strong>
      </div>
      <div className="metric">
        <UsersRound size={22} />
        <span>Nguoi dung</span>
        <strong>{metrics?.users ?? "..."}</strong>
      </div>
      <div className="metric">
        <CircleDollarSign size={22} />
        <span>Coupon dang mo</span>
        <strong>{metrics?.active_coupons ?? "..."}</strong>
      </div>
    </section>
  );
}

import { KeyRound, ShieldAlert } from "lucide-react";
import { formatVnd } from "../../shared/format";
import { Order } from "./types";

type Props = {
  order: Order | null;
  onWarranty: (order: Order) => void;
};

export function OrderPanel({ order, onWarranty }: Props) {
  if (!order) {
    return (
      <section className="panel empty-panel">
        <KeyRound size={26} />
        <h2>Chua co don hang</h2>
        <p>Thong tin tai khoan se hien ngay sau khi thanh toan thanh cong.</p>
      </section>
    );
  }

  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <p className="eyebrow">Don hang {order.status}</p>
          <h2>{formatVnd(order.final_total)}</h2>
        </div>
        <button type="button" className="ghost text-button" onClick={() => onWarranty(order)}>
          <ShieldAlert size={18} />
          Bao loi
        </button>
      </div>
      <div className="order-stats">
        <div>
          <span>Gia goc</span>
          <strong>{formatVnd(order.total)}</strong>
        </div>
        <div>
          <span>Giam gia</span>
          <strong>{formatVnd(order.discount)}</strong>
        </div>
        <div>
          <span>Thanh toan</span>
          <strong>{formatVnd(order.final_total)}</strong>
        </div>
      </div>
      <p className="muted">Bao hanh den {new Date(order.warranty_until).toLocaleDateString("vi-VN")}</p>
      <div className="credential-list">
        {order.credentials.map((credential) => (
          <div className="credential" key={credential.id}>
            <span>Username</span>
            <strong>{credential.username}</strong>
            <span>Password</span>
            <strong>{credential.password}</strong>
            <span>Cookie</span>
            <code>{credential.cookie}</code>
          </div>
        ))}
      </div>
    </section>
  );
}

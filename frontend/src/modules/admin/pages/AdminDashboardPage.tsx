import { AdminMetricCard } from "../components/AdminMetricCard";

export function AdminDashboardPage() {
  return <AdminMetricCard metric={{ label: "Orders today", value: "12" }} />;
}

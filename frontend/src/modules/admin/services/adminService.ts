import type { AdminMetric } from "../types/admin";

export async function getDashboardMetrics(): Promise<AdminMetric[]> {
  return [
    { label: "Orders today", value: "12" },
    { label: "Revenue", value: "8.4M" }
  ];
}

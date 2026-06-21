import type { AdminMetric } from "../types/admin";

type AdminMetricCardProps = {
  metric: AdminMetric;
};

export function AdminMetricCard({ metric }: AdminMetricCardProps) {
  return <article><span>{metric.label}</span><strong>{metric.value}</strong></article>;
}

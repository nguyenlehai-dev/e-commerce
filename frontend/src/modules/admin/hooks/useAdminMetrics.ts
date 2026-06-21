import { useState } from "react";
import type { AdminMetric } from "../types/admin";

export function useAdminMetrics() {
  const [metrics, setMetrics] = useState<AdminMetric[]>([]);

  return { metrics, setMetrics };
}

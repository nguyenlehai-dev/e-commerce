import { useState } from "react";

export function useProductFilters() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("all");

  return { category, keyword, setCategory, setKeyword };
}

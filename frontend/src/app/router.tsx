import { useEffect, useState } from "react";
import { HomePage } from "../modules/product/pages/HomePage";
import { ProductsPage } from "../modules/product/pages/ProductsPage";
import { ReviewsPage } from "../modules/admin/pages/ReviewsPage";

type Route = "home" | "products" | "reviews";

function readHashRoute(): Route {
  if (typeof window === "undefined") {
    return "home";
  }
  const raw = window.location.hash.replace(/^#/, "").replace(/^\/+/, "");
  if (raw === "products") {
    return "products";
  }
  if (raw === "reviews") {
    return "reviews";
  }
  return "home";
}

export function AppRouter() {
  const [route, setRoute] = useState<Route>(readHashRoute);

  useEffect(() => {
    const handleHashChange = () => {
      const next = readHashRoute();
      setRoute(next);
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (route === "products") {
    return <ProductsPage />;
  }

  if (route === "reviews") {
    return <ReviewsPage />;
  }

  return <HomePage />;
}

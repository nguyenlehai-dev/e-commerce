import { useEffect, useRef } from "react";

const REVEAL_SELECTOR = ".reveal";
const VISIBLE_CLASS = "is-visible";

/**
 * Reveals any `.reveal` element inside the returned ref when it scrolls
 * into view. Works without any external dependencies and respects
 * `prefers-reduced-motion` by skipping the observer (CSS already
 * short-circuits animation durations in that case).
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const containerRef = useRef<T | null>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || typeof IntersectionObserver === "undefined") {
      root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((el) => {
        el.classList.add(VISIBLE_CLASS);
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(VISIBLE_CLASS);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return containerRef;
}

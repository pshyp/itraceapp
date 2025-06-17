"use client";

import { useEffect } from "react";

/**
 * Adds .is-visible to every .section-block when it scrolls into view.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        }),
      { threshold: 0.15 }
    );

    document
      .querySelectorAll(".section-block")
      .forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
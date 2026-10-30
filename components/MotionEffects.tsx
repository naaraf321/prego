"use client";

import { useEffect } from "react";

export default function MotionEffects() {
  useEffect(() => {
    document.body.classList.add("loaded");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document
        .querySelectorAll(".reveal,.lines,.img-reveal")
        .forEach((el) => el.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -4% 0px" },
    );

    document
      .querySelectorAll(".reveal,.lines,.img-reveal")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}

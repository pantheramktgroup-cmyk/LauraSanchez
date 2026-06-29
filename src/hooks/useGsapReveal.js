import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP, registerGsap } from "./gsapSetup.js";
import { useReducedMotion } from "./useReducedMotion.js";

registerGsap();

// Reveals elements marked with [data-reveal] inside the scoped container as
// they scroll into view. Respects prefers-reduced-motion by skipping animation.
//
// Per-element overrides via data attributes:
//   data-reveal="up" | "left" | "right" | "scale" | "fade"
//   data-reveal-delay="0.1"
export function useGsapReveal(options = {}) {
  const scope = useRef(null);
  const reduced = useReducedMotion();
  const { start = "top 85%", y = 48 } = options;

  useGSAP(
    () => {
      const targets = gsap.utils.toArray("[data-reveal]");
      if (!targets.length) return;

      if (reduced) {
        gsap.set(targets, { opacity: 1, x: 0, y: 0, scale: 1, clearProps: "all" });
        return;
      }

      targets.forEach((el) => {
        const type = el.dataset.reveal || "up";
        const delay = parseFloat(el.dataset.revealDelay || "0") || 0;
        const from = { opacity: 0, willChange: "transform, opacity" };

        if (type === "up") from.y = y;
        else if (type === "left") {
          from.y = y * 0.7;
        }
        else if (type === "right") {
          from.y = y * 0.7;
        }
        else if (type === "scale") {
          from.scale = 0.94;
          from.y = 24;
        }

        gsap.from(el, {
          ...from,
          duration: 0.85,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: "play none none none",
          },
        });
      });
    },
    { scope, dependencies: [reduced] }
  );

  return scope;
}

// Animate a staggered group of [data-reveal-group-item] elements inside scope.
export function useGsapStagger(selector, options = {}) {
  const scope = useRef(null);
  const reduced = useReducedMotion();
  const { stagger = 0.12, start = "top 80%", y = 56 } = options;

  useGSAP(
    () => {
      const items = gsap.utils.toArray(selector);
      if (!items.length) return;

      if (reduced) {
        gsap.set(items, { opacity: 1, y: 0, scale: 1, clearProps: "all" });
        return;
      }

      gsap.from(items, {
        opacity: 0,
        y,
        scale: 0.97,
        duration: 0.8,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: scope.current,
          start,
        },
      });
    },
    { scope, dependencies: [reduced] }
  );

  return scope;
}

export { gsap, ScrollTrigger };

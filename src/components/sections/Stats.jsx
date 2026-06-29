import { useRef } from "react";
import { stats } from "../../content/lauraCopy.js";
import { gsap, useGSAP, registerGsap } from "../../hooks/gsapSetup.js";
import { useReducedMotion } from "../../hooks/useReducedMotion.js";

registerGsap();

// Splits a stat value like "+300" or "94%" into prefix, number and suffix.
function parseValue(value) {
  const match = value.match(/^([^\d]*)(\d+)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: value };
  return { prefix: match[1], number: parseInt(match[2], 10), suffix: match[3] };
}

export function Stats() {
  const scope = useRef(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      const numbers = gsap.utils.toArray(".stat__number");

      if (reduced) {
        gsap.set(".stat", { opacity: 1, y: 0 });
        numbers.forEach((el) => {
          el.textContent = el.dataset.full;
        });
        return;
      }

      gsap.from(".stat", {
        opacity: 0,
        y: 50,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: scope.current, start: "top 80%" },
      });

      numbers.forEach((el) => {
        const prefix = el.dataset.prefix;
        const suffix = el.dataset.suffix;
        const target = parseInt(el.dataset.number, 10);
        const counter = { value: 0 };

        gsap.to(counter, {
          value: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: scope.current, start: "top 80%" },
          onUpdate: () => {
            el.textContent = `${prefix}${Math.round(counter.value)}${suffix}`;
          },
        });
      });
    },
    { scope, dependencies: [reduced] }
  );

  return (
    <section className="stats" ref={scope} aria-label="Resultados en números">
      <div className="stats__inner">
        {stats.map((stat) => {
          const { prefix, number, suffix } = parseValue(stat.value);
          return (
            <div className="stat" key={stat.label}>
              <span
                className="stat__number"
                data-prefix={prefix}
                data-suffix={suffix}
                data-number={number}
                data-full={stat.value}
              >
                {stat.value}
              </span>
              <span className="stat__label">{stat.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

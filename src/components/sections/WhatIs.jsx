import { whatIs } from "../../content/lauraCopy.js";
import { Button } from "../ui/Button.jsx";
import { useGsapReveal } from "../../hooks/useGsapReveal.js";

export function WhatIs() {
  const scope = useGsapReveal();

  return (
    <section className="what-is" id="what-is" ref={scope} aria-label="Qué es el Coaching de Alto Impacto">
      <div className="what-is__inner">
        <div className="what-is__content">
          <h2 className="what-is__title" data-reveal="up">
            {whatIs.title}
          </h2>

          {whatIs.paragraphs.map((segments, pIndex) => (
            <p className="what-is__paragraph" key={pIndex} data-reveal="up" data-reveal-delay={pIndex * 0.05}>
              {segments.map((seg, sIndex) =>
                seg.strong ? (
                  <strong key={sIndex}>{seg.text}</strong>
                ) : (
                  <span key={sIndex}>{seg.text}</span>
                )
              )}
            </p>
          ))}

          <div className="what-is__cta" data-reveal="up">
            <Button />
          </div>
        </div>

        <div className="what-is__media" data-reveal="right">
          <div className="what-is__halo" aria-hidden="true" />
          <img
            className="what-is__image"
            src={whatIs.image}
            alt={whatIs.imageAlt}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

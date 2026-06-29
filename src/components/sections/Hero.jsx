import { useRef } from "react";
import { hero, nav } from "../../content/lauraCopy.js";
import { Button } from "../ui/Button.jsx";
import { gsap, useGSAP, registerGsap } from "../../hooks/gsapSetup.js";
import { useReducedMotion } from "../../hooks/useReducedMotion.js";

registerGsap();

export function Hero() {
  const scope = useRef(null);
  const imageRef = useRef(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced) {
        gsap.set("[data-hero]", { opacity: 1, x: 0, y: 0, scale: 1 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero__top", { opacity: 0, y: 14, duration: 0.55 })
        .from(
          ".hero__headline .hero__line",
          {
            opacity: 0,
            y: 44,
            clipPath: "inset(0 0 100% 0)",
            duration: 0.75,
            stagger: 0.08,
          },
          "-=0.15"
        )
        .from(".hero__sub", { opacity: 0, y: 22, duration: 0.6 }, "-=0.3")
        .from(
          ".hero__cta",
          { opacity: 0, y: 18, duration: 0.75, ease: "back.out(1.5)" },
          "-=0.22"
        )
        .from(
          imageRef.current,
          { opacity: 0, y: 14, scale: 0.99, duration: 0.9 },
          "-=0.9"
        );

      const mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        gsap.to(imageRef.current, {
          yPercent: 2,
          ease: "none",
          scrollTrigger: {
            trigger: scope.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope, dependencies: [reduced] }
  );

  return (
    <section
      className="hero"
      ref={scope}
      aria-label="Presentación"
      style={{
        height: "100svh",
        minHeight: "100svh",
        maxHeight: "100svh",
        overflow: "hidden",
        paddingBottom: 0,
        boxSizing: "border-box",
      }}
    >
      <style>
  {`
    @media (max-width: 768px) {
      .hero {
        height: auto !important;
        min-height: 100svh !important;
        max-height: none !important;
        overflow: hidden !important;
        padding: 0 !important;
      }

      .hero__inner {
        min-height: 100svh !important;
        height: auto !important;
        max-height: none !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: stretch !important;
        padding: 24px 24px 0 !important;
        box-sizing: border-box !important;
      }

      .hero__top {
        width: 100% !important;
        display: flex !important;
        justify-content: flex-start !important;
        align-items: flex-start !important;
        margin: 0 !important;
      }

      .hero__eyebrow {
        display: none !important;
      }

      .hero__brand {
        margin: 0 !important;
        text-align: left !important;
        justify-self: flex-start !important;
        align-self: flex-start !important;
        font-size: clamp(0.95rem, 3.5vw, 1.12rem) !important;
        line-height: 1.05 !important;
        letter-spacing: 0.035em !important;
      }

      .hero__content {
        width: 100% !important;
        max-width: 100% !important;
        align-self: stretch !important;
        padding-top: clamp(2.4rem, 6vh, 3.5rem) !important;
        padding-bottom: 0 !important;
        z-index: 2 !important;
      }

      .hero__headline {
        font-size: clamp(2.15rem, 9.4vw, 3.25rem) !important;
        line-height: 1.22 !important;
        letter-spacing: -0.035em !important;
        margin-bottom: clamp(1.35rem, 3.4vh, 2rem) !important;
      }

      .hero__headline .hero__line {
        line-height: 1.22 !important;
      }

      .hero__sub {
        max-width: 100% !important;
        font-size: clamp(0.98rem, 3.8vw, 1.08rem) !important;
        line-height: 1.48 !important;
        margin-bottom: clamp(1.45rem, 3.6vh, 2rem) !important;
      }

      .hero__cta {
        width: 100% !important;
        display: flex !important;
        justify-content: flex-start !important;
        margin-bottom: 0 !important;
      }

      .hero__media {
        width: 100% !important;
        flex: 0 0 auto !important;
        min-height: 0 !important;
        height: auto !important;
        max-height: none !important;
        display: flex !important;
        align-items: flex-end !important;
        justify-content: center !important;
        margin-top: clamp(1.35rem, 3.5vh, 2.2rem) !important;
        padding-bottom: 0 !important;
        overflow: visible !important;
        z-index: 1 !important;
      }

      .hero__image {
        width: min(108vw, 500px) !important;
        max-width: none !important;
        height: auto !important;
        max-height: 43svh !important;
        object-fit: contain !important;
        object-position: bottom center !important;
        align-self: flex-end !important;
        margin-bottom: -3px !important;
        display: block !important;
        filter:
          drop-shadow(0 0 1px rgba(255, 213, 76, 0.28))
          drop-shadow(0 10px 20px rgba(0, 0, 0, 0.16))
          drop-shadow(0 0 18px rgba(255, 203, 31, 0.12)) !important;
        -webkit-filter:
          drop-shadow(0 0 1px rgba(255, 213, 76, 0.28))
          drop-shadow(0 10px 20px rgba(0, 0, 0, 0.16))
          drop-shadow(0 0 18px rgba(255, 203, 31, 0.12)) !important;
      }
    }
  `}
</style>

      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div
        className="hero__inner"
        style={{
          height: "100%",
          minHeight: 0,
          maxHeight: "100%",
          alignItems: "stretch",
          boxSizing: "border-box",
        }}
      >
        <div
          className="hero__top"
          data-hero
          style={{
            alignItems: "flex-start",
          }}
        >
          <span className="hero__eyebrow">{hero.eyebrow}</span>

          <a
            className="hero__brand"
            href="#top"
            style={{
              marginTop: "0.25rem",
            }}
          >
            {nav.wordmark}
          </a>
        </div>

        <div
          className="hero__content"
          style={{
            alignSelf: "start",
            paddingTop: "clamp(0.75rem, 1.6vh, 1.5rem)",
            paddingBottom: "clamp(2.5rem, 5vh, 4rem)",
            maxWidth: "820px",
            zIndex: 2,
          }}
        >
          <h1
            className="hero__headline"
            data-hero
            style={{
              fontSize: "clamp(3rem, 4.15vw, 5.25rem)",
              lineHeight: 1.24,
              letterSpacing: "-0.035em",
              marginBottom: "clamp(1rem, 1.8vh, 1.5rem)",
            }}
          >
            <span
              className="hero__line"
              style={{
                display: "block",
                lineHeight: 1.24,
              }}
            >
              {hero.headlineParts.map((part, index) => (
                <span
                  key={index}
                  className={part.highlight ? "is-gold" : undefined}
                >
                  {part.text}
                </span>
              ))}
            </span>
          </h1>

          <p
            className="hero__sub"
            data-hero
            style={{
              maxWidth: "760px",
              marginBottom: "clamp(1.05rem, 2vh, 1.5rem)",
              fontSize: "clamp(0.98rem, 1.12vw, 1.12rem)",
              lineHeight: 1.45,
            }}
          >
            {hero.subheadline}
          </p>

          <div className="hero__cta" data-hero>
            <Button />
          </div>
        </div>

        <div
          className="hero__media"
          data-hero
          style={{
            alignSelf: "stretch",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            height: "100%",
            minHeight: 0,
            maxHeight: "100%",
            marginBottom: 0,
            paddingBottom: 0,
            overflow: "visible",
            zIndex: 1,
          }}
        >
          <img
            ref={imageRef}
            className="hero__image"
            src={hero.image}
            alt={hero.imageAlt}
            fetchPriority="high"
            decoding="async"
            style={{
              width: "min(64vw, 980px)",
              maxWidth: "none",
              height: "auto",
              maxHeight: "97svh",
              objectFit: "contain",
              objectPosition: "bottom center",
              alignSelf: "flex-end",
              marginBottom: "-2px",
              display: "block",
              filter:
                "drop-shadow(0 0 1px rgba(255, 213, 76, 0.34)) drop-shadow(0 10px 22px rgba(0, 0, 0, 0.18)) drop-shadow(0 0 20px rgba(255, 203, 31, 0.14))",
              WebkitFilter:
                "drop-shadow(0 0 1px rgba(255, 213, 76, 0.34)) drop-shadow(0 10px 22px rgba(0, 0, 0, 0.18)) drop-shadow(0 0 20px rgba(255, 203, 31, 0.14))",
              imageRendering: "auto",
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
            }}
          />
        </div>
      </div>
    </section>
  );
}
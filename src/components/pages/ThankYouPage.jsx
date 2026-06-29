import { useEffect, useRef } from "react";
import { gsap, useGSAP, registerGsap } from "../../hooks/gsapSetup.js";
import { useReducedMotion } from "../../hooks/useReducedMotion.js";

registerGsap();

const VIDEO_SRC =
  "https://assets.cdn.filesafe.space/S3NTeawtJuotMEQPSKpi/media/68e6a94f0650b544f014be19.mp4";

const doItems = [
  "Esperamos poder hablar con vos sobre tu situación actual y lo que estás buscando lograr.",
  "Te recomendamos estar en un lugar tranquilo/calmado, sin interrupciones.",
  "Es una videollamada, asegurate de tener una buena conexión a Internet.",
  "Asegurate de que tu micrófono y tu cámara funcionen correctamente, para que podamos escucharte con claridad.",
];

const dontItems = [
  "Es muy importante que si necesitás de una persona para tomar decisiones financieras, vengas con esta persona a la llamada, o si no nos reservamos el derecho de tomar la llamada.",
  "Si no podés dedicar toda tu atención y de pronto estás en otra actividad, no continuaremos con la llamada.",
  "Si no podés asistir, tenés que cancelar o reprogramar tu llamada con un mínimo de 24 horas de antelación, o no podrás reprogramar.",
];

function IconCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconX() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function ThankYouPage() {
  const scope = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const prev = document.title;
    document.title = "Gracias por agendar | Laura Sanchez Coach";
    window.scrollTo(0, 0);
    return () => {
      document.title = prev;
    };
  }, []);

  useGSAP(
    () => {
      if (reduced) return;

      gsap.from(".ty-hero", {
        opacity: 0,
        y: 44,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(".ty-video-section", {
        opacity: 0,
        y: 52,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".ty-video-section",
          start: "top 85%",
        },
      });

      gsap.from(".ty-checklist-card", {
        opacity: 0,
        y: 36,
        duration: 0.75,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".ty-checklist",
          start: "top 85%",
        },
      });

      gsap.from(".ty-cta", {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".ty-cta",
          start: "top 90%",
        },
      });
    },
    { scope }
  );

  return (
    <div className="ty-page" ref={scope}>
      {/* ── Progress bar ── */}
      <div className="ty-progress-bar" role="status" aria-label="Últimos pasos para confirmar tu llamada">
        <div className="ty-progress-bar__inner">
          <span className="ty-progress-bar__text">
            ÚLTIMOS PASOS PARA CONFIRMAR TU LLAMADA
          </span>
        </div>
      </div>

      <main className="ty-main">
        {/* ── 1. Hero card ── */}
        <section className="ty-hero" aria-label="Confirmación de agenda">
          <div className="ty-hero-card">
            <p className="ty-hero-card__eyebrow">CONFIRMACIÓN RECIBIDA</p>
            <h1 className="ty-hero-card__title">ATENCIÓN: NO CIERRES ESTA PÁGINA</h1>
            <div className="ty-hero-card__body">
              <p className="ty-hero-card__line">
                <strong>TU LLAMADA HA SIDO AGENDADA</strong>, pero para confirmar
                tu reserva, es{" "}
                <strong className="ty-hero-card__obligatorio">OBLIGATORIO</strong> que
                veas el video que hay debajo.
              </p>
              <p className="ty-hero-card__line ty-hero-card__line--sub">
                <strong>IMPORTANTE:</strong> Te estaremos contactando para confirmar
                tu sesión.
              </p>
              <p className="ty-hero-card__line ty-hero-card__line--warn">
                Si no contestas, tendremos que{" "}
                <span className="ty-hero-card__cancel">cancelar</span> tu sesión y
                darle el cupo a otra persona en la lista.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. Video ── */}
        <section className="ty-video-section" aria-label="Video de preparación">
          <h2 className="ty-video-section__title">
            <span className="ty-step-label">PASO #1:</span>
            {" "}MIRA ESTE VIDEO PARA PREPARARTE PARA LA LLAMADA 👇
          </h2>

          <div className="ty-video-card">
            <video
              className="ty-video"
              controls
              playsInline
              preload="metadata"
            >
              <source src={VIDEO_SRC} type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </video>
          </div>
        </section>

        {/* ── 3. Checklist ── */}
        <section className="ty-checklist" aria-label="Checklist para la llamada">
          <h2 className="ty-checklist__title">CHECKLIST PARA LA LLAMADA</h2>

          <div className="ty-checklist__grid">
            {/* DO */}
            <div className="ty-checklist-card ty-checklist-card--do">
              <h3 className="ty-checklist-card__title">
                LO QUE SÍ TENÉS QUE HACER
              </h3>
              <ul className="ty-checklist-card__list">
                {doItems.map((item, i) => (
                  <li key={i} className="ty-checklist-item ty-checklist-item--do">
                    <span className="ty-checklist-item__icon">
                      <IconCheck />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* DON'T */}
            <div className="ty-checklist-card ty-checklist-card--dont">
              <h3 className="ty-checklist-card__title">
                LO QUE NO PUEDE PASAR
              </h3>
              <ul className="ty-checklist-card__list">
                {dontItems.map((item, i) => (
                  <li key={i} className="ty-checklist-item ty-checklist-item--dont">
                    <span className="ty-checklist-item__icon">
                      <IconX />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── 4. CTA ── */}
        <section className="ty-cta" aria-label="Cierre">
          <p className="ty-cta__text">
            Te esperamos en la llamada.<br />
            Llegá con foco, contexto y disposición para trabajar sobre decisiones concretas.
          </p>
          <a href="/" className="ty-cta-btn" aria-label="Volver al inicio">
            VOLVER AL INICIO
          </a>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="ty-footer" role="contentinfo">
        <div className="ty-footer__inner">
          <span className="ty-footer__wordmark">LAURA SÁNCHEZ COACH</span>
          <p className="ty-footer__copy">
            <span>© 2026 Laura Sanchez.</span>
            <span>Todos los derechos reservados.</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

import { howItWorks } from "../../content/lauraCopy.js";
import { SectionTitle } from "../ui/SectionTitle.jsx";
import { Button } from "../ui/Button.jsx";
import { useGsapReveal } from "../../hooks/useGsapReveal.js";

export function HowItWorks() {
  const scope = useGsapReveal();

  return (
    <section className="how" id="how-it-works" ref={scope} aria-label="Cómo funciona el programa">
      <div className="how__inner">
        <SectionTitle align="center" tone="light">
          {howItWorks.title}
        </SectionTitle>

        <ol className="how__timeline">
          {howItWorks.steps.map((step, index) => (
            <li
              className="how__step"
              key={step.number}
              data-reveal={index % 2 === 0 ? "left" : "right"}
            >
              <span className="how__step-number" aria-hidden="true">
                {step.number}
              </span>
              <div className="how__step-body">
                <h3 className="how__step-title">{step.title}</h3>
                <p className="how__step-text">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="how__cta" data-reveal="up">
          <Button />
        </div>
      </div>
    </section>
  );
}

import { situations } from "../../content/lauraCopy.js";
import { SectionTitle } from "../ui/SectionTitle.jsx";
import { Button } from "../ui/Button.jsx";
import { useGsapReveal } from "../../hooks/useGsapReveal.js";

function CrossIcon() {
  return (
    <span className="situation__icon situation__icon--x" aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M7 7l10 10M17 7L7 17" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function CheckIcon() {
  return (
    <span className="situation__icon situation__icon--check" aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function Situations() {
  const scope = useGsapReveal();

  return (
    <section className="situations" ref={scope} aria-label="Situaciones que vivís">
      <div className="situations__inner">
        <SectionTitle align="center" tone="dark">
          {situations.title}
        </SectionTitle>

        <div className="situations__card" data-reveal="scale">
          <div className="situations__col situations__col--pains">
            <h3 className="situations__col-title">
              <strong>{situations.painsTitle}</strong>
            </h3>
            <ul className="situations__list">
              {situations.pains.map((item, index) => (
                <li className="situation" key={index} data-reveal="left" data-reveal-delay={index * 0.05}>
                  <CrossIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="situations__divider" aria-hidden="true" />

          <div className="situations__col situations__col--desires">
            <h3 className="situations__col-title">
              <strong>{situations.desiresTitle}</strong>
            </h3>
            <ul className="situations__list">
              {situations.desires.map((item, index) => (
                <li className="situation" key={index} data-reveal="right" data-reveal-delay={index * 0.05}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="situations__closing" data-reveal="up">
          {situations.closing}
        </p>

        <div className="situations__cta" data-reveal="up">
          <Button />
        </div>
      </div>
    </section>
  );
}

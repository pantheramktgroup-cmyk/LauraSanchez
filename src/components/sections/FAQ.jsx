import { useRef, useState } from "react";
import { faq } from "../../content/lauraCopy.js";
import { SectionTitle } from "../ui/SectionTitle.jsx";
import { useGsapStagger } from "../../hooks/useGsapReveal.js";

function FaqRow({ item, index, open, onToggle }) {
  const panelRef = useRef(null);
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className={`faq__item ${open ? "is-open" : ""}`.trim()}>
      <h3 className="faq__question-wrap">
        <button
          type="button"
          id={buttonId}
          className="faq__question"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span>{item.question}</span>
          <span className="faq__indicator" aria-hidden="true" />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="faq__panel"
        ref={panelRef}
        style={{ maxHeight: open ? `${panelRef.current?.scrollHeight ?? 1200}px` : "0px" }}
      >
        <div className="faq__answer">
          {item.answer.map((paragraph, pIndex) => (
            <p key={pIndex}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const scope = useGsapStagger(".faq__item", { y: 32, stagger: 0.08 });

  return (
    <section className="faq" ref={scope} aria-label="Preguntas frecuentes">
      <div className="faq__inner">
        <SectionTitle align="center" tone="invert">
          {faq.title}
        </SectionTitle>

        <div className="faq__list">
          {faq.items.map((item, index) => (
            <FaqRow
              key={index}
              item={item}
              index={index}
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

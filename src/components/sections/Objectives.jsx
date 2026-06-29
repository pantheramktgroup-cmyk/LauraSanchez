import { objectives } from "../../content/lauraCopy.js";
import { SectionTitle } from "../ui/SectionTitle.jsx";
import { PremiumCard } from "../ui/PremiumCard.jsx";
import { Button } from "../ui/Button.jsx";
import { useGsapReveal } from "../../hooks/useGsapReveal.js";

export function Objectives() {
  const scope = useGsapReveal();

  const introLines = objectives.intro
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <section
      className="objectives"
      id="objectives"
      ref={scope}
      aria-label="Objetivos del programa"
    >
      <div className="objectives__inner">
        <SectionTitle align="center" tone="dark">
          {objectives.title}
        </SectionTitle>

        <div className="objectives__statement" data-reveal="up">
          <span className="objectives__statement-label">
            Ingeniería inversa
          </span>

          <div className="objectives__statement-copy">
            {introLines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>

        <div className="objectives__grid">
          {objectives.items.map((item, index) => (
            <PremiumCard
              key={item.number}
              tone="dark"
              className="objective"
              data-reveal="scale"
              data-reveal-delay={index * 0.08}
            >
              <span className="objective__number" aria-hidden="true">
                {item.number}
              </span>

              <h3 className="objective__title">{item.title}</h3>
              <p className="objective__text">{item.text}</p>
            </PremiumCard>
          ))}
        </div>

        <div className="objectives__cta" data-reveal="up">
          <Button />
        </div>
      </div>
    </section>
  );
}
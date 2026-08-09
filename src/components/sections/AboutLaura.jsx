import { aboutLaura } from "../../content/lauraCopy.js";
import { Button } from "../ui/Button.jsx";
import { useGsapReveal } from "../../hooks/useGsapReveal.js";

export function AboutLaura() {
  const scope = useGsapReveal();

  return (
    <section className="about" ref={scope} aria-label="Sobre Laura Sánchez">
      <div className="about__inner">
        <div className="about__media" data-reveal="left">
          <div className="about__halo" aria-hidden="true" />
          <img
            className="about__image"
            src={aboutLaura.image}
            alt={aboutLaura.imageAlt}
            width={3360}
            height={5040}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="about__content">
          <h2 className="about__title" data-reveal="up">
            {aboutLaura.title}
          </h2>

          {aboutLaura.paragraphs.map((text, index) => (
            <p className="about__paragraph" key={index} data-reveal="up" data-reveal-delay={index * 0.05}>
              {text}
            </p>
          ))}

          <ul className="about__milestones">
            {aboutLaura.milestones.map((milestone, index) => (
              <li className="about__milestone" key={index} data-reveal="up" data-reveal-delay={index * 0.06}>
                <span className="about__milestone-text">
                  <strong>{milestone.title}:</strong> {milestone.text}
                </span>
              </li>
            ))}
          </ul>

          <div className="about__cta" data-reveal="up">
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
}

import { logos } from "../../content/lauraCopy.js";

export function LogoMarquee() {
  const marqueeLogos = [...logos.items, ...logos.items];

  return (
    <section
      className="marquee"
      aria-label="Empresas y líderes que confiaron en el proceso"
    >
      <p className="marquee__caption">{logos.caption}</p>

      <div className="marquee__viewport">
        <ul className="marquee__track">
          {marqueeLogos.map((logo, index) => (
            <li className="marquee__item" key={`${logo.alt}-${index}`}>
              <img
                className="marquee__logo"
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
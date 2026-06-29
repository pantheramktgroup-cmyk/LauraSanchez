import { calendar, CALENDAR_ID } from "../../content/lauraCopy.js";
import { useGsapReveal } from "../../hooks/useGsapReveal.js";

// Loads the booking embed script a single time and renders the iframe inside a
// premium container. The iframe itself is cross-origin and not styled directly.
export function CalendarSection() {
  const scope = useGsapReveal();

  return (
    <section className="calendar" id={CALENDAR_ID} ref={scope} aria-label="Agendá tu llamada">
      <div className="calendar__inner">
        <header className="calendar__head" data-reveal="up">
          <h2 className="calendar__title">{calendar.title}</h2>
          <p className="calendar__subtitle">{calendar.subtitle}</p>
        </header>

        <div className="calendar__card" data-reveal="scale">
          <aside className="calendar__side">
            <div className="calendar__avatar">
              <img
                src={calendar.avatar}
                alt={calendar.avatarAlt}
                loading="lazy"
                decoding="async"
              />
            </div>
            <span className="calendar__duration">{calendar.duration}</span>
            {calendar.sideText.map((text, index) => (
              <p className="calendar__side-text" key={index}>
                {text}
              </p>
            ))}
          </aside>

          <div className="calendar__embed">
            <iframe
              src={calendar.iframeSrc}
              style={{ width: "100%", border: "none" }}
              scrolling="yes"
              id={calendar.iframeId}
              title="Calendario Laura Sánchez"
              className="calendar-iframe"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

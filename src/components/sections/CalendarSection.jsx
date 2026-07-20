import { calendar, CALENDAR_ID } from "../../content/lauraCopy.js";
import { useGsapReveal } from "../../hooks/useGsapReveal.js";

export function CalendarSection({ variant = "A" }) {
  const scope = useGsapReveal();
  const separator = calendar.iframeSrc.includes("?") ? "&" : "?";
  const iframeSrc = `${calendar.iframeSrc}${separator}landing_variant=${variant}`;

  return (
    <section className="calendar" id={CALENDAR_ID} ref={scope} aria-label="Agendá tu llamada">
      <div className="calendar__inner">
        <div className="calendar__card" data-reveal="up">
          <aside className="calendar__side">
            <div className="calendar__avatar">
              <img
                src={calendar.avatar}
                alt={calendar.avatarAlt}
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="calendar__side-title">Agendá tu llamada estratégica</p>
            <span className="calendar__duration">{calendar.duration}</span>
            <p className="calendar__side-text">
              Si tu negocio depende 100% de vos, si necesitas reorganizar tu
              proyecto, o si querés cambiar la forma en la que vivís y trabajas,
              llegaste al lugar indicado.
            </p>
            <p className="calendar__side-text">
              Trabajamos para que emprendedores y empresarios vivan como
              realmente anhelan vivir.
            </p>
          </aside>

          <div className="calendar__embed">
            <iframe
              src={iframeSrc}
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

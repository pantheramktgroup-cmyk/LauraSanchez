// Reusable section heading with optional eyebrow and alignment.
export function SectionTitle({
  children,
  eyebrow,
  align = "left",
  tone = "dark",
  className = "",
}) {
  return (
    <header className={`section-title section-title--${align} section-title--${tone} ${className}`.trim()}>
      {eyebrow ? (
        <span className="section-title__eyebrow" data-reveal="fade">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="section-title__heading" data-reveal="up">
        {children}
      </h2>
    </header>
  );
}

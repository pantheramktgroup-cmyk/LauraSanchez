import { CALENDAR_ID, CTA_LABEL } from "../../content/lauraCopy.js";
import { scrollToSection } from "../../utils/scroll.js";

// Primary call-to-action button. Always scrolls to the calendar section.
// `variant` controls visual weight; `label` defaults to the global CTA copy.
export function Button({
  label = CTA_LABEL,
  variant = "primary",
  size = "lg",
  targetId = CALENDAR_ID,
  className = "",
  ...rest
}) {
  return (
    <button
      type="button"
      className={`btn btn--${variant} btn--${size} ${className}`.trim()}
      onClick={() => scrollToSection(targetId)}
      {...rest}
    >
      <span className="btn__label">{label}</span>
      <svg
        className="btn__arrow"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 12h14M13 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

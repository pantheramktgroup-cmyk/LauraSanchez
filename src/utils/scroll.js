// Smoothly scrolls to a section by id, accounting for the fixed header height.
export function scrollToSection(id) {
  if (typeof document === "undefined") return;
  const target = document.getElementById(id);
  if (!target) return;

  const header = document.querySelector(".site-header");
  const offset = header ? header.offsetHeight : 0;
  const top = target.getBoundingClientRect().top + window.scrollY - offset + 8;

  const prefersReduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.scrollTo({
    top,
    behavior: prefersReduced ? "auto" : "smooth",
  });
}

export function handleAnchorClick(event, id) {
  event.preventDefault();
  scrollToSection(id);
}

import { useEffect } from "react";
import { Footer } from "./Footer.jsx";
import { useReducedMotion } from "../../hooks/useReducedMotion.js";

// App-level shell: header, main content, footer, and the interactive
// mouse-follow light overlay (desktop only, disabled for reduced motion).
export function PageShell({ children }) {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const fine = window.matchMedia && window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    let frame = 0;
    const onMove = (event) => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        document.body.style.setProperty("--mouse-x", `${event.clientX}px`);
        document.body.style.setProperty("--mouse-y", `${event.clientY}px`);
        frame = 0;
      });
    };

    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [reduced]);

  return (
    <div className="page-shell" id="top">
      <main>{children}</main>
      <Footer />
    </div>
  );
}

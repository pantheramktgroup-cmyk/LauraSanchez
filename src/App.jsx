import { PageShell } from "./components/layout/PageShell.jsx";
import { Hero } from "./components/sections/Hero.jsx";
import { LogoMarquee } from "./components/sections/LogoMarquee.jsx";
import { Stats } from "./components/sections/Stats.jsx";
import { Situations } from "./components/sections/Situations.jsx";
import { WhatIs } from "./components/sections/WhatIs.jsx";
import { HowItWorks } from "./components/sections/HowItWorks.jsx";
import { Objectives } from "./components/sections/Objectives.jsx";
import { CalendarSection } from "./components/sections/CalendarSection.jsx";
import { AboutLaura } from "./components/sections/AboutLaura.jsx";
import { FAQ } from "./components/sections/FAQ.jsx";
import { ThankYouPage } from "./components/pages/ThankYouPage.jsx";

function getVariant() {
  if (typeof window === "undefined") return "A";
  const params = new URLSearchParams(window.location.search);
  const forced = params.get("variant");
  if (forced === "A" || forced === "B") {
    localStorage.setItem("landing_variant", forced);
    return forced;
  }
  const stored = localStorage.getItem("landing_variant");
  if (stored === "A" || stored === "B") return stored;
  const assigned = Math.random() < 0.5 ? "A" : "B";
  localStorage.setItem("landing_variant", assigned);
  return assigned;
}

const variant = getVariant();

export default function App() {
  const pathname =
    typeof window !== "undefined"
      ? window.location.pathname.replace(/\/+$/, "") || "/"
      : "/";

  if (pathname === "/thank-you-page-page") {
    if (typeof window !== "undefined") {
      const nextUrl = `/thank-you-page${window.location.search}${window.location.hash}`;
      window.history.replaceState({}, "", nextUrl);
    }
    return <ThankYouPage />;
  }

  if (pathname === "/thank-you-page") {
    return <ThankYouPage />;
  }

  // Variante B: funnel corto
  if (variant === "B") {
    return (
      <PageShell>
        <Hero />
        <LogoMarquee />
        <CalendarSection variant={variant} />
        <AboutLaura />
        <Stats />
        <FAQ />
      </PageShell>
    );
  }

  // Variante A: página completa — Stats movido debajo de Situations
  return (
    <PageShell>
      <Hero />
      <LogoMarquee />
      <Situations />
      <Stats />
      <div className="insight-block">
        <WhatIs />
        <HowItWorks />
      </div>
      <Objectives />
      <CalendarSection variant={variant} />
      <AboutLaura />
      <FAQ />
    </PageShell>
  );
}

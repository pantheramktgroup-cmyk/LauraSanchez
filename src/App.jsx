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

  return (
    <PageShell>
      <Hero />
      <Stats />
      <Situations />
      <LogoMarquee />
      <div className="insight-block">
        <WhatIs />
        <HowItWorks />
      </div>
      <Objectives />
      <CalendarSection />
      <AboutLaura />
      <FAQ />
    </PageShell>
  );
}

import { useEffect, useState } from "react";
import { Logo } from "./components/Logo";
import { Cursor } from "./components/Cursor";
import { ScrollProgress } from "./components/ScrollProgress";
import { HeroCarousel, CaseStudiesSection } from "./components/HeroCarousel";
import { CaseStudyDetail } from "./components/CaseStudyDetail";
import { About } from "./components/About";
import { AboutReveal } from "./components/AboutReveal";
import { Contact } from "./components/Contact";
import { IntroOverlay } from "./components/IntroOverlay";
import { GraphicDesignGallery } from "./components/GraphicDesignGallery";
import { LiveWebsites } from "./components/LiveWebsites";
import { ToolsCarousel } from "./components/ToolsCarousel";
import { caseStudies } from "./data/caseStudies";

export default function App() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [introComplete, setIntroComplete] = useState(false);
  const active = caseStudies.find((c) => c.id === openId) ?? null;

  useEffect(() => {
    const prevHtml = document.documentElement.style.position;
    const prevBody = document.body.style.position;
    document.documentElement.style.position = "relative";
    document.body.style.position = "relative";
    return () => {
      document.documentElement.style.position = prevHtml;
      document.body.style.position = prevBody;
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-white text-[#111]" style={{ fontFamily: "Inter, sans-serif" }}>
      <IntroOverlay onComplete={() => setIntroComplete(true)} />
      <a href="#top" aria-label="Home" className="fixed top-6 left-8 z-50">
        <Logo size={32} />
      </a>
      <Cursor />
      <ScrollProgress />
      <main className="relative">
        <HeroCarousel introComplete={introComplete} />
        <CaseStudiesSection onOpen={setOpenId} />
        <AboutReveal>
          <About />
        </AboutReveal>
        <GraphicDesignGallery />
        <LiveWebsites />
        <Contact />
      </main>
      <CaseStudyDetail cs={active} onClose={() => setOpenId(null)} />
    </div>
  );
}

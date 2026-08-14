import { useEffect } from "react";
import AboutSection from "./components/AboutSection";
import ContactCTA from "./components/ContactCTA";
import DockNav from "./components/DockNav";
import EducationSection from "./components/EducationSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LeadershipRecognition from "./components/LeadershipRecognition";
import SelectedWork from "./components/SelectedWork";
import SkillsGrid from "./components/SkillsGrid";

function App() {
  useEffect(() => {
    const scrollToHashTarget = () => {
      const id = window.location.hash.slice(1);

      if (!id) {
        return;
      }

      window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" });
      });
    };

    scrollToHashTarget();
    window.addEventListener("hashchange", scrollToHashTarget);

    return () => window.removeEventListener("hashchange", scrollToHashTarget);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-text">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-md bg-text px-4 py-3 text-sm font-medium text-background shadow-lg transition-transform focus:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-text focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        Skip to main content
      </a>
      <DockNav />
      <main id="main-content" tabIndex={-1} className="pb-20 outline-none md:pb-0">
        <Hero />
        <SelectedWork />
        <ExperienceTimeline />
        <AboutSection />
        <EducationSection />
        <LeadershipRecognition />
        <SkillsGrid />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

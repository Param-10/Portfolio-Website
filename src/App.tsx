import { useEffect } from "react";
import ContactCTA from "./components/ContactCTA";
import DockNav from "./components/DockNav";
import EducationSection from "./components/EducationSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
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
    <div className="min-h-screen bg-background text-text font-sans">
      <DockNav />
      <main className="pb-20 md:pb-0">
        <Hero />
        <ExperienceTimeline />
        <EducationSection />
        <SelectedWork />
        <SkillsGrid />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

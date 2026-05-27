import ContactCTA from "./components/ContactCTA";
import DockNav from "./components/DockNav";
import EducationSection from "./components/EducationSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import SkillsGrid from "./components/SkillsGrid";

function App() {
  return (
    <div className="min-h-screen bg-background text-text font-sans">
      <DockNav />
      <main className="pb-20 md:pb-0">
        <Hero />
        <SelectedWork />
        <ExperienceTimeline />
        <EducationSection />
        <SkillsGrid />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

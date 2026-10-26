import HeroSection from "../components/HeroSection.jsx";
import SkillsMarquee from "../components/SkillsMarquee.jsx";
import Experience from "../components/Experience.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";

export function Home() {
  return (
    <main>
      {/* Hero-Section */}
      <HeroSection />

      {/* Moving technology logos */}
      <SkillsMarquee />

      {/* Experiences */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Contact - Section */}
      <Contact />
    </main>
  );
}

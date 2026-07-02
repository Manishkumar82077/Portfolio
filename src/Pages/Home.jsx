import { useCallback, useEffect, useRef, useState } from "react";
import DockingNav from "../Components/DockingNav";
import Sidebar from "../Components/Sidebar";
import Intro from "../Section/Intro";
import RecentProjects from "../Section/RecentProjects";
import Experience from "../Section/Experience";
import Skills from "../Section/Skills";
import Contact from "../Section/Contact";
import Footer from "../Section/Footer";

function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const introRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToSection = useCallback((sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const sectionRefs = [
      introRef,
      projectsRef,
      experienceRef,
      skillsRef,
      contactRef,
    ];
    const elements = sectionRefs
      .map((sectionRef) => sectionRef.current)
      .filter(Boolean);
    if (!elements.length) return;

    elements.forEach((element, index) => {
      element.classList.add("reveal-section");
      element.style.setProperty("--reveal-delay", `${index * 90}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Logic for Navbar active state
            const idMap = {
              "Intro": "home",
              "RecentProjects": "projects",
              "Experience": "experience",
              "Skills": "skills",
              "Contact": "contact"
            };
            const componentName = entry.target.tagName === 'SECTION' ? entry.target.getAttribute('data-name') : '';
            if (idMap[componentName]) {
              setActiveSection(idMap[componentName]);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col lg:items-center">
      <DockingNav
        activeSection={activeSection}
        onHomeClick={() => scrollToSection(introRef)}
        onProjectsClick={() => scrollToSection(projectsRef)}
        onExperienceClick={() => scrollToSection(experienceRef)}
        onSkillsClick={() => scrollToSection(skillsRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <div className="w-full max-w-2xl xl:max-w-6xl mx-auto px-4 pt-2 lg:pt-24 flex flex-col xl:flex-row items-center xl:items-stretch gap-16 lg:gap-10">
        <div className="w-full xl:w-auto flex justify-center items-start shrink-0">
          <Sidebar />
        </div>
        <div className="flex flex-col gap-10 md:gap-20 w-full min-w-0">
          <Intro ref={introRef} />
          <RecentProjects ref={projectsRef} />
          <Experience ref={experienceRef} />
          <Skills ref={skillsRef} />
          <Contact ref={contactRef} />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;

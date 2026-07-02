import { useEffect, useState } from "react";
import Navbar from "./Navbar";

// Wraps the Navbar with the scroll-to-dock behavior: centered at the top
// initially, then docks to the right edge (vertical) after scrolling down on
// large screens. Shared by the Home page and the detail pages.
function DockingNav({
  activeSection,
  onHomeClick,
  onProjectsClick,
  onExperienceClick,
  onSkillsClick,
  onContactClick,
}) {
  const [isDocked, setIsDocked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsDocked(window.scrollY > 120);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`relative z-50 px-4 pt-2 flex justify-center lg:pt-0 lg:fixed lg:transition-all lg:duration-500 lg:ease-out lg:left-0 lg:w-1/4 ${isDocked
        ? "lg:left-auto lg:right-6 lg:top-1/2 lg:w-auto lg:px-0 lg:justify-end lg:-translate-y-1/2"
        : "lg:top-4 lg:left-0 lg:right-0 lg:w-full lg:px-4 lg:justify-center lg:translate-y-0"
        }`}
    >
      <Navbar
        isDocked={isDocked}
        activeSection={activeSection}
        onHomeClick={onHomeClick}
        onProjectsClick={onProjectsClick}
        onExperienceClick={onExperienceClick}
        onSkillsClick={onSkillsClick}
        onContactClick={onContactClick}
      />
    </div>
  );
}

export default DockingNav;

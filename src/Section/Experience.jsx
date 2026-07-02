import React from "react";
import Heading from "../Components/Heading";
import ExperienceCard from "../Components/ExperienceCard";
import { experiences } from "../data/experiences";

const Experience = React.forwardRef(function Experience(props, ref) {
  return (
    <section ref={ref} data-name="Experience" className="scroll-mt-28">
      <div>
        <Heading FWord="RELEVANT" LWord="EXPERIENCE" />
      </div>
      <div className="mt-10 stagger-reveal">
        {experiences.map((exp) => (
          <ExperienceCard
            key={exp.id}
            heading={exp.heading}
            company={exp.company}
            para={exp.para}
            date={exp.date}
            logoUrl={exp.logoUrl}
            active={exp.active}
            redirectRoute={exp.redirectRoute}
          />
        ))}
      </div>
    </section>
  );
});

export default Experience;

import React from "react";
import Heading from "../Components/Heading";
import { skillCategories } from "../data/skills.jsx";

const Skills = React.forwardRef(function Skills(props, ref) {
  return (
    <section ref={ref} data-name="Skills" className="scroll-mt-28">
      <div className="mb-8">
        <Heading FWord="TECHNICAL" LWord="SKILLS" />
      </div>

      {/* All skills as small icon + name chips, grouped by category */}
      <div className="flex flex-col gap-7 stagger-reveal">
        {skillCategories.map((category) => (
          <div key={category.title} className="flex flex-col gap-3">
            <h3 className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {category.items.map((item) => (
                <span
                  key={item.name}
                  className="group flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-white/[0.04] border border-white/[0.06] text-gray-300 hover:bg-white/[0.07] hover:border-orange-500/40 hover:text-white transition-all duration-300"
                >
                  <span
                    className="text-base flex items-center transition-transform duration-300 group-hover:scale-110"
                    style={{ color: item.color }}
                  >
                    {item.icon}
                  </span>
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Skills;

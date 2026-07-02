import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import HighlightText from "./HighlightText";

function RecentProjectCard({ pic, heading, discr, tags = [], active = false }) {
  const handleMouseMove = (e) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`flex flex-col sm:flex-row p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2.5rem] gap-6 sm:gap-8 items-start sm:items-center group relative border bg-[#1c1b19]/20 transition-all duration-700 hover:bg-white/[0.04] hover:border-white/[0.08] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] cursor-pointer backdrop-blur-md mb-4 overflow-hidden ${
        active ? "border-orange-500/30" : "border-white/[0.04]"
      }`}
    >
      {/* Spotlight highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(249,115,22,0.06),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Image Container with Perspective */}
      <div className="w-full sm:w-auto shrink-0 relative z-10 overflow-hidden rounded-xl sm:rounded-2xl border border-white/[0.05] shadow-2xl transition-all duration-700 group-hover:scale-[1.03] group-hover:-rotate-1">
        <img
          src={pic}
          alt={heading}
          className="h-40 sm:h-32 w-full sm:w-48 object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Info Section */}
      <div className="flex-1 space-y-2 sm:space-y-3 relative z-10 w-full">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-orange-500/50 block group-hover:w-10 transition-all duration-500" />
            <span className="text-[9px] sm:text-[10px] text-orange-500 font-bold tracking-[0.2em] uppercase opacity-70">Featured Project</span>
            {/* {active && (
              <span className="flex items-center gap-1.5 text-[9px] sm:text-[10px] text-green-400 font-bold tracking-[0.15em] uppercase">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
                </span>
                Active
              </span>
            )} */}
          </div>

          {/* Arrow action (matches Experience card) */}
          <div className="transition-all duration-500 lg:-translate-x-4 lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100">
            <div className="h-10 w-10 flex items-center justify-center rounded-full border border-orange-500/30 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
              <IoIosArrowForward size={20} />
            </div>
          </div>
        </div>
        <h1 className="text-white font-bold text-xl sm:text-2xl tracking-tight transition-all duration-500 group-hover:translate-x-1">{heading}</h1>
        <p className="text-gray-500 text-base sm:text-lg font-inter leading-relaxed max-w-full sm:max-w-[90%]"><HighlightText text={discr} /></p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/[0.05] text-gray-400 group-hover:border-orange-500/30 group-hover:text-orange-500/80 transition-all duration-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentProjectCard;

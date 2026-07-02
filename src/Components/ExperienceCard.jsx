import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { BsBriefcase } from "react-icons/bs";
import HighlightText from "./HighlightText";

function ExperienceCard({ heading, company, para, date, active, logoUrl, redirectRoute }) {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] group border border-transparent transition-all duration-500 hover:bg-white/[0.03] hover:border-white/[0.08] mb-3 backdrop-blur-sm relative overflow-hidden">
      {/* Subtle background glow on hover */}
      <div className={`absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-transparent ${active ? 'opacity-100' : 'opacity-0'}  group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}/>

      {/* Logo / icon badge */}
      <div className={`shrink-0 p-1 rounded-lg sm:rounded-lg ${active ? 'bg-orange-500' : ' bg-orange-500/10'} ${active ? 'text-white' : 'text-orange-500'} border border-orange-500/20 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(249,115,22,0.1)]`}>
        {logoUrl ? (
          <img
            src={logoUrl}
            alt={company ? `${company} logo` : "Company logo"}
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded"
          />
        ) : (
          <BsBriefcase className="w-8 h-8 sm:w-6 sm:h-6" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 space-y-2 sm:space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-white text-xl sm:text-2xl tracking-tight transition-colors duration-300 group-hover:text-orange-500">{heading}</h1>
            {company && (
              <span className="text-gray-400 text-sm sm:text-base font-medium">{company}</span>
            )}
          </div>
          {redirectRoute && (
            <Link
              to={redirectRoute}
              aria-label={`View full details for ${heading}`}
              className="relative z-10 transition-all duration-500 lg:-translate-x-4 lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100"
            >
              <div className="h-10 w-10 flex items-center justify-center rounded-full border border-orange-500/30 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                <IoIosArrowForward size={20} />
              </div>
            </Link>
          )}
        </div>
        <p className="text-gray-500 text-base sm:text-lg leading-relaxed font-inter"><HighlightText text={para} /></p>
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
          <span className="text-orange-500 font-semibold text-xs sm:text-sm tracking-wider uppercase">{date}</span>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;

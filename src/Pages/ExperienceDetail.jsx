import { Link, useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
import DockingNav from "../Components/DockingNav";
import Footer from "../Section/Footer";
import HighlightText from "../Components/HighlightText";
import { getExperienceById } from "../data/experiences";

function ExperienceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const experience = getExperienceById(id);

  const goHome = () => navigate("/");

  return (
    <div className="flex flex-col items-center min-h-screen">
      <DockingNav
        activeSection="experience"
        onHomeClick={goHome}
        onProjectsClick={goHome}
        onExperienceClick={goHome}
        onSkillsClick={goHome}
        onContactClick={goHome}
      />

      <div className="flex-1 w-full max-w-3xl px-4 sm:px-6 pt-8 lg:pt-28 pb-16">
        {!experience ? (
          <div className="flex flex-col items-center justify-center gap-6 py-20 text-center">
            <h1 className="text-2xl font-bold text-white">Experience not found</h1>
            <Link
              to="/"
              className="flex items-center gap-2 text-orange-500 font-semibold hover:underline"
            >
              <IoIosArrowBack size={20} /> Back to home
            </Link>
          </div>
        ) : (
          <div className="w-full">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-orange-500 font-semibold mb-8 hover:gap-3 transition-all duration-300"
            >
              <IoIosArrowBack size={20} /> Back
            </Link>

            {/* Header card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-[#1c1b19]/40 backdrop-blur-xl p-6 sm:p-8 mb-8">
              <div className="absolute -top-16 -right-16 w-52 h-52 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" />

              <div className="relative flex flex-col sm:flex-row sm:items-center gap-5">
                <div className="shrink-0 p-1 rounded-2xl bg-orange-500 border border-orange-500/20 shadow-[0_0_25px_rgba(249,115,22,0.2)] w-fit">
                  {experience.logoUrl && (
                    <img
                      src={experience.logoUrl}
                      alt={experience.company ? `${experience.company} logo` : "Company logo"}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-xl"
                    />
                  )}
                </div>

                <div className="flex-1">
                  <h1 className="font-bold text-white text-2xl sm:text-3xl tracking-tight">
                    {experience.heading}
                  </h1>
                  {experience.company && (
                    <p className="text-orange-500 text-lg font-semibold mt-0.5">
                      {experience.company}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 mt-3 text-gray-400 text-sm">
                    {experience.location && (
                      <span className="flex items-center gap-1.5">
                        <FaMapMarkerAlt className="text-orange-500/80" size={13} />
                        {experience.location}
                      </span>
                    )}
                    <span className="flex items-center gap-1.5">
                      <FaRegCalendarAlt className="text-orange-500/80" size={13} />
                      {experience.date}
                    </span>
                  </div>
                </div>
              </div>

              {experience.para && (
                <p className="relative text-gray-400 text-base sm:text-lg leading-relaxed font-inter mt-6">
                  {experience.para}
                </p>
              )}
            </div>

            {/* Tech stack */}
            {experience.tags?.length > 0 && (
              <div className="mb-10">
                <h2 className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {experience.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className="group flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-white/[0.04] border border-white/[0.06] text-gray-300 hover:bg-white/[0.07] hover:border-orange-500/40 hover:text-white transition-all duration-300"
                    >
                      <span className="text-base flex items-center transition-transform duration-300 group-hover:scale-110">
                        {tag.icon}
                      </span>
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Contributions */}
            <h2 className="text-white/80 text-lg font-semibold mb-4">
              Key Contributions
            </h2>
            <ul className="space-y-4">
              {(experience.contributions || []).map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 rounded-2xl border border-white/[0.04] bg-white/[0.02] p-4 hover:border-orange-500/20 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                  <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-inter">
                    <HighlightText text={item} />
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default ExperienceDetail;

import { Link, useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Navbar from "../Components/Navbar";
import Footer from "../Section/Footer";
import HighlightText from "../Components/HighlightText";
import ImageCarousel from "../Components/ImageCarousel";
import { getProjectById } from "../data/projects.jsx";

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(id);
  // Inactive (or missing) projects are not viewable.
  const available = Boolean(project?.active);

  const goHome = () => navigate("/");

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="relative z-50 px-4 pt-2 flex justify-center lg:pt-4 lg:fixed lg:top-4 lg:left-0 lg:right-0 lg:w-full lg:px-4">
        <Navbar
          isDocked={false}
          activeSection="projects"
          onHomeClick={goHome}
          onProjectsClick={goHome}
          onExperienceClick={goHome}
          onSkillsClick={goHome}
          onContactClick={goHome}
        />
      </div>

      <div className="flex-1 w-full max-w-3xl px-4 sm:px-6 pt-8 lg:pt-28 pb-16">
        {!available ? (
          <div className="flex flex-col items-center justify-center gap-6 py-20 text-center">
            <h1 className="text-2xl font-bold text-white">Project not found</h1>
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
              className="inline-flex items-center gap-2 text-orange-500 font-semibold mb-10 hover:gap-3 transition-all duration-300"
            >
              <IoIosArrowBack size={20} /> Back
            </Link>

            {/* Image carousel — one at a time with prev/next controls */}
            <ImageCarousel images={project.images} alt={project.heading} />

            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-6 bg-orange-500/50 block" />
              <span className="text-[10px] text-orange-500 font-bold tracking-[0.2em] uppercase opacity-70">
                Featured Project
              </span>
            </div>

            <div className="flex items-start justify-between gap-4 mb-4">
              <h1 className="font-bold text-white text-2xl sm:text-3xl tracking-tight">
                {project.heading}
              </h1>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open live demo for ${project.heading}`}
                  className="shrink-0 h-10 w-10 flex items-center justify-center rounded-full border border-orange-500/30 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300"
                >
                  <IoIosArrowForward size={20} />
                </a>
              )}
            </div>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-inter mb-6">
              {project.discr}
            </p>

            {/* Tech stack */}
            {project.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/5 text-gray-300"
                  >
                    {tag.icon} {tag.name}
                  </span>
                ))}
              </div>
            )}

            {/* Rich details */}
            {project.details?.length > 0 && (
              <>
                <h2 className="text-white/80 text-lg font-semibold mb-4">
                  Project Details
                </h2>
                <ul className="space-y-4">
                  {project.details.map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                      <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-inter">
                        <HighlightText text={item} />
                      </p>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default ProjectDetail;

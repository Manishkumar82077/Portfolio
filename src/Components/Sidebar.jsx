import React, { useState } from "react";
import { profile, socialLinks } from "../data/profile";
import HighlightText from "./HighlightText";

function Sidebar() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="animated-border relative flex flex-col w-full lg:w-100 p-[2px] rounded-2xl lg:sticky top-4 shadow-2xl">
      <div className="bg-[#1a1816] p-5 lg:p-10 rounded-2xl items-center gap-8 flex flex-col">
        {/* Full image — no cropping, with reserved space & skeleton */}
        <div
          className="relative group w-full overflow-hidden rounded-2xl"
          style={{ aspectRatio: "200 / 200" }}
        >
          {/* Skeleton shimmer — visible until image loads */}
          {!imgLoaded && (
            <div className="sidebar-skeleton absolute inset-0 rounded-2xl" />
          )}
          <img
            src={profile.avatar}
            alt={profile.name}
            width={200}
            height={200}
            loading="eager"
            fetchpriority="high"
            onLoad={() => setImgLoaded(true)}
            className={`w-full h-full object-cover rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-[1.03] ${
              imgLoaded ? "sidebar-img-visible" : "sidebar-img-hidden"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />
          <span className="absolute bottom-3 left-3 text-white text-xs font-medium bg-orange-500/80 px-2.5 py-1 rounded-full backdrop-blur-sm">
            {profile.availabilityLabel}
          </span>
        </div>

        {/* Name */}
        <div className="text-center">
          <h1 className="font-poppins font-bold text-3xl text-white">
            {profile.name}
          </h1>
          <div className="h-0.5 w-10 bg-orange-500 rounded-full mx-auto mt-2" />
        </div>

        {/* Bio */}
        <div className="px-2">
          <p className="font-medium leading-relaxed text-gray-400 text-center text-lg">
            <HighlightText text={profile.cardIntro} />
          </p>
        </div>

        {/* Social icons — show original brand color on hover */}
        <div className="flex gap-4 text-2xl text-gray-500">
          {socialLinks.map(({ Icon, href, hoverColor }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-120 hover:-translate-y-1 drop-shadow-[0_0_8px_rgba(249,115,22,0.3)]"
              onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Download CV — white default, orange on hover */}
        <a
          href={profile.cvUrl}
          download
          className="relative overflow-hidden group text-center w-full bg-white text-black font-semibold py-3 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg active:scale-95 block uppercase tracking-widest text-sm"
        >
          <span className="relative z-10">{profile.cvLabel}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-white/20 to-orange-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;

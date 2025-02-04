import React from "react";

function Intro() {
  return (
    <div className="flex items-start justify-center min-h-screen bg-gradient-to-r from-pink-100 to-pink-200 text-light-blue-100 px-4 py-10">
      <div className="text-center mt-10">
        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 text-light-blue-200">
          Manish Kumar
        </h1>

        {/* Designation */}
        <p className="text-xl sm:text-2xl md:text-3xl font-medium text-light-blue-200">
          Full Stack Developer, Software Developer
        </p>

        {/* Optional additional content */}
        <div className="mt-6 text-lg sm:text-xl md:text-2xl text-light-blue-200">
          <p>Building modern web applications with passion and creativity.</p>
        </div>
      </div>
    </div>
  );
}

export default Intro;

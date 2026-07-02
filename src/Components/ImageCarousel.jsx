import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Shows one image at a time with prev/next controls.
// Handles mixed aspect ratios (laptop + mobile) via object-contain on a dark frame.
function ImageCarousel({ images = [], alt = "Screenshot" }) {
  const [current, setCurrent] = useState(0);

  if (!images.length) return null;

  const count = images.length;
  const go = (dir) => setCurrent((c) => (c + dir + count) % count);

  return (
    <div className="mb-8">
      <div className="relative w-full h-64 sm:h-96 rounded-2xl border border-white/5 bg-black/40 overflow-hidden shadow-2xl">
        <img
          src={images[current]}
          alt={`${alt} screenshot ${current + 1}`}
          className="w-full h-full object-contain"
        />

        {count > 1 && (
          <>
            {/* Prev */}
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-black/50 border border-white/10 text-white hover:bg-orange-500 hover:border-orange-500 transition-colors duration-300 backdrop-blur-sm"
            >
              <IoIosArrowBack size={22} />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-black/50 border border-white/10 text-white hover:bg-orange-500 hover:border-orange-500 transition-colors duration-300 backdrop-blur-sm"
            >
              <IoIosArrowForward size={22} />
            </button>

            {/* Counter */}
            <span className="absolute bottom-3 right-3 text-white text-xs font-medium bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-sm">
              {current + 1} / {count}
            </span>
          </>
        )}
      </div>

      {/* Dots */}
      {count > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-orange-500" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageCarousel;

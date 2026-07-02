import React from "react";

// Renders a string with **key phrases** highlighted.
// Wrap important words in double asterisks in the data, e.g. "using **Next.js**".
function HighlightText({ text }) {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g);

  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <span key={i} className="text-white font-semibold">
            {part.slice(2, -2)}
          </span>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </>
  );
}

export default HighlightText;

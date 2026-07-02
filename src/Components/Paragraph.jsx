import React from "react";
import HighlightText from "./HighlightText";

function Paragraph({ para }) {
  return (
    <p className="text-gray-500 lg:text-xl text-center lg:text-left">
      <HighlightText text={para} />
    </p>
  );
}

export default Paragraph;

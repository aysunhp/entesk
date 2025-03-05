import React, { useState } from "react";

const TextExpander = ({
  children,
  className = "",
  expanded = false,
  collapsedNumWords = 10,
  buttonColor,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
}) => {
  const buttonStyles = {
    color: buttonColor,
  };

  const [isExpanded, setIsExpanded] = useState(expanded);
  const displayedText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";
  return (
    <div className={className}>
      <span>{displayedText}</span>
      <button
        onClick={() => setIsExpanded((expanded) => !expanded)}
        style={buttonStyles}
      >
        {}
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
};

export default TextExpander;

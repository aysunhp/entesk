import React, { useState } from "react";

const TextExpander = ({
  children,
  className = "",
  expanded = false,
  collapsedNumWords = 10,
  buttonColor = "blue",
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
}) => {
  const buttonStyles = {
    color: buttonColor,
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "4px",
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

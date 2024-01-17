import React from "react";

const TapButton = ({ children, onSelect, isSelected }) => {
  return (
    <div>
      <button
        className={isSelected ? "active" : undefined}
        onClick={onSelect}
        type="button"
      >
        {children}
      </button>
    </div>
  );
};

export default TapButton;

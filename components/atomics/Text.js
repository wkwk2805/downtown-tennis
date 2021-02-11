import React from "react";

const Text = ({ size, weight, family, color, children, style }) => {
  return (
    <div
      style={{
        ...style,
        fontFamily: family || "AppleSDGothicNeoEB",
        fontWeight: weight || 400,
        fontSize: size || "1em",
        letterSpacing: "1px",
        color: color || "black",
      }}
    >
      {children}
    </div>
  );
};

export default Text;

import React from "react";

const Text = ({ size, weight, family, color, children, style }) => {
  return (
    <div
      style={{
        ...style,
        fontFamily: family || "AppleSDGothicNeoL",
        fontWeight: weight || 400,
        fontSize: size || "1rem",
        letterSpacing: "1px",
        color: color || "black",
      }}
    >
      {children}
    </div>
  );
};

export default Text;

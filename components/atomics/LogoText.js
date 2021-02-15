import React from "react";

const LogoText = ({ url, style }) => {
  return (
    <img
      src={url || "./logos/logo-text.png"}
      style={{ height: "10rem", ...style }}
    />
  );
};

export default LogoText;

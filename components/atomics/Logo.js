import React from "react";

const Logo = ({ url }) => {
  return (
    <img
      src={url || "./logos/logo.png"}
      style={{ width: "5em", height: "5em", padding: "10px" }}
    />
  );
};

export default Logo;

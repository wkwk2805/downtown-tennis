import React from "react";

const Logo = ({ url }) => {
  return (
    <img
      src={url || "./logos/logo.png"}
      style={{ width: "5rem", height: "5rem", padding: "0 0 3rem 0" }}
    />
  );
};

export default Logo;

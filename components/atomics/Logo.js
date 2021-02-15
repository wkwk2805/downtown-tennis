import React from "react";

const Logo = ({ url }) => {
  return (
    <img
      src={url || "./logos/logo.svg"}
      style={{
        width: "10rem",
        height: "10rem",
        padding: "0 0 3rem 0",
        margin: "0 -2rem",
      }}
    />
  );
};

export default Logo;

import React from "react";

const LogoText = ({ url }) => {
  return (
    <img src={url || "./logos/logo-text.png"} style={{ height: "10rem" }} />
  );
};

export default LogoText;

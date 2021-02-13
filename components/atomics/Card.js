import React from "react";

const Card = ({ url }) => {
  return (
    <div
      style={{
        flexGrow: 1,
        background: `url("${url}") no-repeat`,
        height: "25vw",
        width: "25vw",
        margin: "1rem",
        backgroundSize: "100% 100%",
      }}
    ></div>
  );
};

export default Card;

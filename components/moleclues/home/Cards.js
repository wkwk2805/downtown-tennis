import React from "react";
import Card from "../../atomics/Card";

const Cards = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "70%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexGrow: 1,
        }}
      >
        <Card url="/images/Tennis1.png" />
        <Card url="/images/Tennis1.png" />
        <Card url="/images/Tennis1.png" />
        <Card url="/images/Tennis1.png" />
      </div>
      <div
        style={{
          display: "flex",
          flexGrow: 1,
        }}
      >
        <Card url="/images/Tennis1.png" />
        <Card url="/images/Tennis1.png" />
        <Card url="/images/Tennis1.png" />
        <Card url="/images/Tennis1.png" />
      </div>
    </div>
  );
};

export default Cards;

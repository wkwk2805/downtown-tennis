import React from "react";
import LogoText from "../../atomics/LogoText";
import NormalText from "../../atomics/NormalText";

const FirstView = () => {
  return (
    <div
      style={{
        background: 'url("/images/Tennis1.png") no-repeat',
        backgroundSize: "100%",
        height: "calc(100vh - 7rem)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-around",
          padding: "5rem 5rem",
        }}
      >
        <LogoText />
        <NormalText
          style={{ margin: "5rem 0", fontSize: "2.5em", color: "white" }}
        >
          함께 하는 테니스, 다운타운 테니스 클럽
        </NormalText>
        <NormalText
          style={{
            border: "0.2rem solid white",
            display: "inline-block",
            padding: "1rem ",
            color: "white",
          }}
        >
          PROGRAM more
        </NormalText>
      </div>
    </div>
  );
};

export default FirstView;

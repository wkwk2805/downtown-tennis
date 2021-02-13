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
        }}
      >
        <LogoText />
        <NormalText>함께 하는 테니스, 다운타운 테니스 클럽</NormalText>
        <NormalText
          style={{
            border: "3px solid white",
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

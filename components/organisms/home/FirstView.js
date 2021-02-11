import React from "react";
import LogoText from "../../atomics/LogoText";
import Text from "../../atomics/Text";

const FirstView = () => {
  return (
    <div
      style={{
        background: 'url("/images/Tennis1.png") no-repeat',
        backgroundSize: "100% 100%",
        height: "calc(100vh - 7rem)",
      }}
    >
      <div
        style={{
          display: "inline",
          top: "7rem",
          left: "3rem",
          position: "relative",
        }}
      >
        <LogoText />
        <Text size="2rem" color="white" style={{ margin: "3rem 0" }}>
          함께 하는 테니스, 다운타운 테니스 클럽
        </Text>
        <Text
          style={{
            border: "3px solid white",
            display: "inline-block",
            padding: "1rem ",
          }}
          color="white"
        >
          PROGRAM more
        </Text>
      </div>
    </div>
  );
};

export default FirstView;

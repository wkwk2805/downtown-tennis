import React from "react";
import NormalText from "../../atomics/NormalText";

const ThirdView = () => {
  return (
    <div
      style={{
        display: "flex",
        margin: "2rem 0",
      }}
    >
      <div
        style={{
          flexGrow: 1,
          width: "100%",
          background: 'url("/images/Tennis3.png") no-repeat',
          height: "100vh",
          backgroundSize: "100%",
        }}
      ></div>
      <div
        style={{
          flexGrow: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <NormalText>PROGRAM</NormalText>
        <NormalText style={{ margin: "1rem 0" }}>
          함께 하는 테니스, 다운타운 테니스 클럽
        </NormalText>
        <NormalText
          style={{
            border: "2px solid",
            margin: "1rem 0",
            padding: "0.5rem 3rem",
          }}
        >
          프로그램 더보기
        </NormalText>
      </div>
    </div>
  );
};

export default ThirdView;

import React from "react";
import NormalText from "../../atomics/NormalText";

const SecondView = () => {
  return (
    <div
      style={{
        display: "flex",
        margin: "5rem 0",
      }}
    >
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
        <NormalText style={{ fontWeight: "bold", fontSize: "1.5em" }}>
          ABOUT
        </NormalText>
        <NormalText style={{ margin: "1rem 0" }}>
          함께 하는 테니스, 다운타운 테니스 클럽
        </NormalText>
        <NormalText
          style={{
            border: "1px solid",
            margin: "2rem 0",
            padding: "0.8rem 4rem",
          }}
        >
          브랜드 스토리 더보기
        </NormalText>
      </div>
      <div
        style={{
          flexGrow: 1,
          width: "100%",
          background: 'url("/images/Tennis2.png") no-repeat',
          height: "100vh",
          backgroundSize: "100%",
        }}
      ></div>
    </div>
  );
};

export default SecondView;

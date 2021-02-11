import React from "react";
import Text from "../../atomics/Text";

const ThirdView = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          flexGrow: 1,
          width: "100%",
          background: 'url("/images/Tennis3.png") no-repeat',
          height: "100vh",
          backgroundSize: "100% 100%",
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
        <Text weight="600" size="2rem">
          PROGRAM
        </Text>
        <Text style={{ margin: "1rem 0" }} size="1.5rem">
          함께 하는 테니스, 다운타운 테니스 클럽
        </Text>
        <Text
          style={{
            border: "2px solid",
            margin: "1rem 0",
            padding: "0.5rem 3rem",
          }}
        >
          프로그램 더보기
        </Text>
      </div>
    </div>
  );
};

export default ThirdView;

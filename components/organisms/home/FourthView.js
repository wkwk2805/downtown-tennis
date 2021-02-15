import React from "react";
import Logo from "../../atomics/Logo";
import NormalText from "../../atomics/NormalText";
import Cards from "../../moleclues/common/home/Cards";
import Notice from "../../moleclues/common/home/Notice";

const FourthView = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "110vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="/logos/insta-logo.png"
        style={{ width: "10rem", height: "10rem" }}
      />
      <NormalText
        style={{ fontSize: "1.2em", fontWeight: "bold", margin: "1.5rem 0" }}
      >
        @DT_TENNISCLUB
      </NormalText>
      <Cards />
      <Notice style={{ margin: "3rem 0" }} />
    </div>
  );
};

export default FourthView;

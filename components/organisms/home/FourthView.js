import React from "react";
import NormalText from "../../atomics/NormalText";
import Cards from "../../moleclues/common/home/Cards";
import Notice from "../../moleclues/common/home/Notice";

const FourthView = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src="/logos/insta-logo.png" alt="" />
      <NormalText size="1.2rem">@DT_TENNISCLUB</NormalText>
      <Cards />
      <Notice style={{ marginTop: "1rem" }} />
    </div>
  );
};

export default FourthView;

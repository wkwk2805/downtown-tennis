import React from "react";
import Division from "../../atomics/Division";
import Text from "../../atomics/Text";
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
      <Text size="1.2rem">@DT_TENNISCLUB</Text>
      <Cards />
      <Division />
      <Notice />
    </div>
  );
};

export default FourthView;

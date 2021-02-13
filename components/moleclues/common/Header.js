import React from "react";
import NormalText from "../../atomics/NormalText";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "2.5rem",
        right: "5.2rem",
        display: "flex",
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        height: "7rem",
      }}
    >
      <div style={{ marginRight: "7.5rem" }}>
        <NormalText
          style={{
            fontSize: "1.2em",
            marginRight: "2rem",
            fontWeight: "bold",
          }}
        >
          DOWNTOWN
        </NormalText>
        <NormalText>TENNIS CLUB</NormalText>
      </div>
      <div style={{ display: "flex" }}>
        <NormalText style={{ paddingRight: "1rem" }}>LOGIN</NormalText>
        <NormalText>|</NormalText>
        <NormalText style={{ padding: "0 1rem" }}>MY PAGE</NormalText>
        <NormalText>|</NormalText>
        <NormalText style={{ paddingLeft: "1rem" }}>JOIN</NormalText>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import Text from "../../atomics/Text";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        right: 0,
        display: "flex",
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        height: "7rem",
      }}
    >
      <div style={{ padding: "1rem 0.5rem 0 0.5rem" }}>
        <Text size="1.5rem">DOWNTOWN</Text>
        <Text family="AppleSDGothicNeoM">TENNIS CLUB</Text>
      </div>
      <div style={{ padding: "0rem 1rem", display: "flex" }}>
        <Text family="AppleSDGothicNeoM" style={{ paddingRight: "10px" }}>
          LOGIN
        </Text>
        <Text>|</Text>
        <Text family="AppleSDGothicNeoM" style={{ paddingLeft: "10px" }}>
          JOIN
        </Text>
      </div>
    </div>
  );
};

export default Header;

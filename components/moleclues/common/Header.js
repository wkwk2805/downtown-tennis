import React from "react";
import Logo from "../../atomics/Logo";
import LogoText from "../../atomics/LogoText";
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
      }}
    >
      <div style={{ padding: "10px" }}>
        <Text size="1.5em">DOWNTOWN</Text>
        <Text family="AppleSDGothicNeoM">TENNIS CLUB</Text>
      </div>
      <div style={{ padding: "15px", display: "flex" }}>
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

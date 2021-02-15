import React from "react";
import Divider from "../../atomics/Divider";
import LogoText from "../../atomics/LogoText";
import NormalText from "../../atomics/NormalText";

const FirstView = () => {
  return (
    <div>
      <NormalText style={{ fontSize: "2em", fontWeight: "bold" }}>
        ABOUT
      </NormalText>
      <Divider />
      <div style={{ textAlign: "center", marginTop: "5rem" }}>
        <LogoText />
      </div>
    </div>
  );
};

export default FirstView;

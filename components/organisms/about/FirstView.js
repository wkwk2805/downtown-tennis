import React from "react";
import Divider from "../../atomics/Divider";
import LogoText from "../../atomics/LogoText";
import NormalText from "../../atomics/NormalText";
import { aboutText } from "../../../config/Strings";

const FirstView = () => {
  return (
    <div>
      <NormalText style={{ fontSize: "2em", fontWeight: "bold" }}>
        ABOUT
      </NormalText>
      <Divider />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(60vh)",
        }}
      >
        <LogoText style={{ width: "50vw", height: "auto" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "30%" }}>
            <NormalText style={{ fontSize: "5rem", fontWeight: "bold" }}>
              SOUND BODY
            </NormalText>
            <NormalText style={{ fontSize: "5rem", fontWeight: "bold" }}>
              SOUND MIND
            </NormalText>
          </div>
          <div style={{ width: "50%", alignSelf: "flex-end" }}>
            <NormalText style={{ fontSize: "2rem" }}>{aboutText}</NormalText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstView;

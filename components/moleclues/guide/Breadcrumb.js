import React from "react";
import NormalText from "../../atomics/NormalText";

const Breadcrumb = ({ selector = "PRICE_AND_TIME" }) => {
  const nonActive = { color: "gray", fontWeight: "400" };
  return (
    <div
      style={{
        display: "flex",
        fontSize: "2rem",
        fontWeight: "bold",
      }}
    >
      <NormalText style={selector == "PRICE_AND_TIME" ? {} : nonActive}>
        가격 및 시간
      </NormalText>
      <NormalText style={{ margin: "0 1rem" }}>|</NormalText>
      <NormalText style={selector == "KIOSK_USING" ? {} : nonActive}>
        키오스크 이용
      </NormalText>
      <NormalText style={{ margin: "0 1rem" }}>|</NormalText>
      <NormalText style={selector == "MACHINE_USING" ? {} : nonActive}>
        기기 이용
      </NormalText>
    </div>
  );
};

export default Breadcrumb;

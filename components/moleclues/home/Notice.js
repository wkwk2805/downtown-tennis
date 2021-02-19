import React from "react";
import { address, ceo, copyRight, email, tell } from "../../../config/Strings";
import NormalText from "../../atomics/NormalText";

const Notice = (props) => {
  return (
    <div {...props}>
      <NormalText style={{ marginBottom: "1rem" }}>{copyRight}</NormalText>
      <NormalText>{`주소. ${address} 전화번호. ${tell} 이메일. ${email} 대표. ${ceo}`}</NormalText>
    </div>
  );
};

export default Notice;

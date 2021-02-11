import React from "react";
import {
  address,
  ceo,
  copyRight,
  email,
  tell,
} from "../../../../config/Strings";
import Text from "../../../atomics/Text";
const Notice = () => {
  return (
    <div>
      <Text style={{ marginBottom: "1rem" }}>{copyRight}</Text>
      <Text>{`주소. ${address} 전화번호. ${tell} 이메일. ${email} 대표. ${ceo}`}</Text>
    </div>
  );
};

export default Notice;

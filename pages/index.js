import React from "react";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const click = () => {
    router.push("/home");
  };
  return (
    <>
      <div>
        <button onClick={click}>on</button>
      </div>
    </>
  );
};

export default index;

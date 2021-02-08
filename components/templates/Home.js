import React from "react";
import Menu from "../moleclues/common/Menu";
import FirstView from "../organisms/home/FirstView";
import SecondView from "../organisms/home/SecondView";
import ThirdView from "../organisms/home/ThirdView";

const Home = () => {
  return (
    <>
      <Menu />
      <FirstView />
      <SecondView />
      <ThirdView />
    </>
  );
};

export default Home;

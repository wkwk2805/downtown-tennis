import React from "react";
import Header from "../moleclues/common/Header";
import SideMenu from "../moleclues/common/SideMenu";
import FirstView from "../organisms/home/FirstView";
import FourthView from "../organisms/home/FourthView";
import SecondView from "../organisms/home/SecondView";
import ThirdView from "../organisms/home/ThirdView";

const Home = () => {
  return (
    <>
      <Header />
      <SideMenu />
      <div
        style={{
          padding: "7rem 9rem 0 15rem",
        }}
      >
        <FirstView />
        <SecondView />
        <ThirdView />
        <FourthView />
      </div>
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import Header from "../moleclues/common/Header";
import SideMenu from "../moleclues/common/SideMenu";
import FirstView from "../organisms/home/FirstView";
import FourthView from "../organisms/home/FourthView";
import SecondView from "../organisms/home/SecondView";
import ThirdView from "../organisms/home/ThirdView";

const Home = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    setSize({ width: innerWidth, height: innerHeight });
  }, []);
  return (
    <>
      <Header />
      {size.width > 480 && <SideMenu />}
      <div
        style={{
          padding: size.width > 480 ? "10rem 10rem 0 15rem" : "10rem 0 0 0",
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

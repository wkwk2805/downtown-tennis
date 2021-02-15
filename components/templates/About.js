import React from "react";
import Header from "../moleclues/common/Header";
import SideMenu from "../moleclues/common/SideMenu";
import FirstView from "../organisms/about/FirstView";

const About = () => {
  return (
    <>
      <Header />
      <SideMenu />
      <div
        style={{
          padding: "10rem 10rem 0 15rem",
        }}
      >
        <FirstView />
      </div>
    </>
  );
};

export default About;

import React from "react";
import KioskUsing from "../organisms/guide/KioskUsing";
import PriceAndTime from "../organisms/guide/PriceAndTime";
import MachineUsing from "../organisms/guide/MachineUsing";
import Header from "../moleclues/common/Header";
import SideMenu from "../moleclues/common/SideMenu";
import NormalText from "../atomics/NormalText";
import Divider from "../atomics/Divider";
import Breadcrumb from "../moleclues/guide/Breadcrumb";

const Guide = () => {
  return (
    <>
      <Header />
      <SideMenu />
      <div
        style={{
          padding: "10rem 10rem 0 15rem",
        }}
      >
        <NormalText style={{ fontSize: "2em", fontWeight: "bold" }}>
          GUIDE
        </NormalText>
        <Divider />
        <Breadcrumb />
        <PriceAndTime />
        <KioskUsing />
        <MachineUsing />
      </div>
    </>
  );
};

export default Guide;

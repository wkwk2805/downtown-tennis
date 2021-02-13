import React from "react";
import { useRouter } from "next/router";
import MenuText from "../../atomics/MenuText";
import Logo from "../../atomics/Logo";

const SideMenu = () => {
  const router = useRouter();
  return (
    <>
      <div
        style={{
          position: "fixed",
          zIndex: 1,
          left: "5.3rem",
          top: "2.5rem",
        }}
      >
        <Logo />
        <MenuText active={router.pathname == "/about"} href="/about">
          ABOUT
        </MenuText>
        <MenuText active={router.pathname == "/program"} href="/program">
          PROGRAM
        </MenuText>
        <MenuText active={router.pathname == "/notice"} href="/notice">
          NOTICE
        </MenuText>
        <MenuText active={router.pathname == "/event"} href="/event">
          EVENT
        </MenuText>
        <MenuText active={router.pathname == "/dtclub"} href="/dtclub">
          DTCLUB
        </MenuText>
        <MenuText active={router.pathname == "/contact"} href="/contact">
          CONTACT
        </MenuText>
      </div>
    </>
  );
};

export default SideMenu;

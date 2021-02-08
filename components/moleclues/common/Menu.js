import React from "react";
import { useRouter } from 'next/router'
import MenuText from "../../atomics/MenuText";
import Text from "../../atomics/Text";

const Menu = () => {
  const router = useRouter();
  return (
    <div>
      <MenuText text={'ABOUT'} active={router.pathname == '/about'} href="/about"/>
      <MenuText text={'PROGRAM'} active={router.pathname == '/program'} href="/program" />
      <MenuText text={'NOTICE'} active={router.pathname == '/notice'} href="/notice" />
      <MenuText text={'EVENT'} active={router.pathname == '/event'} href="/event" />
      <MenuText text={'DTCLUB'} active={router.pathname == '/dtclub'} href="/dtclub" />
      <MenuText text={'CONTACT'} active={router.pathname == '/contact'} href="/contact" />
      <Text text={'DOWNTOWN'} />
      <Text text={'TENNIS CLUB'}/>
    </div>
  );
};

export default Menu;

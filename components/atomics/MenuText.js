import React from "react";
import Link from "next/link";

const MenuText = ({ children, active, href }) => {
  return (
    <Link href={href || "home"}>
      <div
        className="menu"
        style={{
          fontFamily: active ? "AppleSDGothicNeoEB" : "AppleSDGothicNeoL",
          fontWeight: 600,
          fontSize: "1rem",
          letterSpacing: "1px",
          marginBottom: "0.3rem",
          cursor: "pointer",
          paddingBottom: "10px",
        }}
      >
        {children}
      </div>
    </Link>
  );
};

export default MenuText;

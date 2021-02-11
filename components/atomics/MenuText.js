import React from "react";
import Link from "next/link";

const MenuText = ({ children, active, href }) => {
  return (
    <Link href={href || "home"}>
      <div
        className="menu"
        style={{
          fontFamily: active ? "AppleSDGothicNeoEB" : "AppleSDGothicNeoL",
          fontWeight: 400,
          fontSize: "1.2rem",
          letterSpacing: "1px",
          marginBottom: "1rem",
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

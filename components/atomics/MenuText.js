import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const MenuText = ({ children, active, href }) => {
  return (
    <Link href={href || "home"}>
      <div
        className="menu"
        style={{
          marginBottom: "1.7rem",
          fontWeight: active ? "bold" : 400,
          fontSize: active ? "1.2em" : "1em",
          textDecoration: active ? "underline" : "none",
          cursor: "pointer",
        }}
      >
        {children}
      </div>
    </Link>
  );
};

export default MenuText;

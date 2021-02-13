import React from "react";
import Link from "next/link";

const MenuText = ({ children, active, href }) => {
  return (
    <Link href={href || "home"}>
      <div className="menu" style={{ marginBottom: "1.7rem" }}>
        {children}
      </div>
    </Link>
  );
};

export default MenuText;

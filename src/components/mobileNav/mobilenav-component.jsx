import React from "react";
import { navLinks } from "../../constant/data";
import NavLink from "../navlink/navlink.component";

const MobileNav = () => {
  return (
    <div className="fixed w-full h-screen bg-gray-500/70 flex flex-col justify-center items-center z-20 gap-8 md:hidden">
      {navLinks.map((link) => (
        <NavLink
          key={link.id}
          id={link.id}
          title={link.title}
          icon={link.icon}
        />
      ))}
    </div>
  );
};

export default MobileNav;

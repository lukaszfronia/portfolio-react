import React from "react";
import { navLinks } from "../../constant/data";
import NavLink from "../navlink/navlink.component";

const DesktopNav = () => {
  return (
    <div className=" hidden md:fixed md:z-20 md:p-4  md:flex md:justify-center md:gap-4 sm:hidden">
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

export default DesktopNav;

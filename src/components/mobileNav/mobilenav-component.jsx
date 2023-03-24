import React from "react";
import { navLinks } from "../../constant/data";
import NavLink from "../navlink/navlink.component";

const MobileNav = ({ handleMobile }) => {
  return (
    <div className="fixed w-full h-screen bg-gray-500/70 flex flex-col justify-center items-center z-20 gap-8 md:hidden touch-none">
      {navLinks.map((link) => (
        <NavLink
          key={link.id}
          id={link.id}
          title={link.title}
          icon={link.icon}
          handleMobile={handleMobile}
        />
      ))}
    </div>
  );
};

export default MobileNav;

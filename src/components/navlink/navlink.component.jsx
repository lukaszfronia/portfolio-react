import React from "react";

const NavLink = ({ id, title, icon, handleMobile }) => {
  return (
    <a
      onClick={handleMobile}
      href={`#${id}`}
      className="flex items-center justify-center gap-2 text-grey-900 text-2xl bg-slate-100 px-9  py-4 rounded-[15px] shadow-lg shadow-gray-500 cursor-pointer  w-[300px] lg:w-[200px] sm:w-[400px] md:w-[150px]"
    >
      <img src={icon} alt="ikonka" className="w-[20px] h-[20px]" />

      {title}
    </a>
  );
};

export default NavLink;

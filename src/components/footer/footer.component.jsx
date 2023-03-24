import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gray-500 flex justify-center p-8 text-[10px] xl:text-sm ">
      <p className="text-gray-100 font-semibold">
        Copyright © {new Date().getFullYear()} by Łukasz Fronia, Inc. All rights
        reserved.
      </p>
    </div>
  );
};

export default Footer;

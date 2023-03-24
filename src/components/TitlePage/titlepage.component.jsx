import React from "react";

const TitlePage = ({ children }) => (
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold lg:text-5xl border-b-4 border-gray-900 tracking-widest">
    {children}
  </h1>
);

export default TitlePage;

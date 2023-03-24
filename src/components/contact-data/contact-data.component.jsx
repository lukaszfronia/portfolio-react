import React from "react";

const ContactData = ({ contact }) => {
  const { icon, title, data } = contact;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <img src={icon} alt="icon" className="w-[25px] h-[25px]" />
        <h1 className="text-gray-900 md:text-xl xl:text-2xl font-semibold tracking-wider">
          {title}
        </h1>
      </div>
      <p className="text-gray-900 md:text-md xl:text-lg">{data}</p>
    </div>
  );
};

export default ContactData;

import React from "react";
import TitlePage from "../components/TitlePage/titlepage.component";

import { contacts } from "../constant/data";
import ContactData from "../components/contact-data/contact-data.component";
import ContactForm from "../components/contact-form/contact-form.component";

import location from "../assets/location.png";
import phone from "../assets/telephone.png";
import mail from "../assets/mail.png";

const Contact = () => {
  return (
    <div
      id="contact"
      className="xl:max-w-[1200px] lg:max-w-[1000px] md:max-w-[700px] sm:max-w-[600px] max-w-[340px] mx-auto xl:py-32 lg:py-40 py-10 sm:py-18 md:py-44  text-gray-900 flex flex-col items-center gap-32"
    >
      <TitlePage>CONTACT</TitlePage>

      <div className=" bg-gray-300 w-full xl:h-[550px] md:h-[500px] md:relative flex flex-col items-center md:flex-row justify-start xl:p-8 lg:p-4 shadow-md shadow-gray-400 ">
        <div className="flex flex-col item justify-center gap-10 p-10 md:items-start md:gap-16 lg:gap-20 md:p-16 lg:p-24">
          {contacts.map((contact) => (
            <ContactData key={contact.id} contact={contact} />
          ))}
        </div>
        <div className="bg-gray-600 md:w-[50%] lg:w-[45%] h-[115%] w-full md:absolute right-[5%] top-[-8%]  p-10">
          <div className="flex justify-center">
            <h1 className=" text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-100 mb-4 lg:mb-0">
              Contact Me!
            </h1>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;

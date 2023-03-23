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
      className="max-w-[1200px] mx-auto pt-32 pb-32  text-gray-900 flex flex-col items-center gap-32"
    >
      <TitlePage>CONTACT</TitlePage>

      <div className="bg-gray-300 w-full h-[550px] relative flex justify-start p-8 shadow-md shadow-gray-400 ">
        <div className="flex flex-col item justify-center gap-20 p-24">
          {contacts.map((contact) => (
            <ContactData key={contact.id} contact={contact} />
          ))}
        </div>
        <div className="bg-gray-600 w-[45%] h-[115%] absolute right-[5%] top-[-8%]  p-10">
          <div className="flex justify-center">
            <h1 className="text-4xl font-bold text-gray-100">Contact Me!</h1>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;

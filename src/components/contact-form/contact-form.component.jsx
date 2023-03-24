import React from "react";
import { useState, useRef } from "react";

import emailjs from "@emailjs/browser";

const defaultField = {
  name: "",
  email: "",
  message: "",
};

const SERVICE_ID = "service_3spmomb";
const TEMPLATE_ID = "template_nk2c4gj";
const PUBLIC_KEY = "IQ0S7b7RJ3aahz1Xz";

const ContactForm = () => {
  const form = useRef();
  const [formFields, setFormFields] = useState(defaultField);
  const { name, email, message } = formFields;

  const resetFields = () => {
    setFormFields(defaultField);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    resetFields();
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name,
          to_name: "Łukasz Fronia",
          from_email: email,
          to_email: "lukaszfronia99@gmail.com",
          message: message,
        },
        PUBLIC_KEY
      )
      .then(
        (result) => {
          //   alert("Thank you. I will get back to you as soon as possible.");
          console.log(result.text);
        },
        (error) => {
          //   alert("Ahh, something went wrong. Please try again.");
          console.log(error.text);
        }
      );
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <div className="flex flex-col gap-10 md:gap-4 lg:gap-4 xl:gap-6 xl:p-4">
        <div className="flex flex-col gap-2">
          <label className="text-gray-100 font-semibold tracking-wider text-sm">
            {" "}
            Your Name:{" "}
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChangeHandler}
            placeholder="What's your name?"
            className=" p-2 sm:p-4 md:p-2 xl:py-4 lg:px-6 placeholder:text-secondary placeholder:text-sm text-gray-900 rounded-lg outline-none border-none font-medium"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-100 font-semibold tracking-wider text-sm">
            {" "}
            Your Email:{" "}
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChangeHandler}
            placeholder="What's your web address?"
            className=" p-2 sm:p-4 md:p-2 lg:py-4 lg:px-6 placeholder:text-secondary placeholder:text-sm text-gray-900 rounded-lg outline-none border-none font-medium"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-100 font-semibold tracking-wider text-sm">
            {" "}
            Your Message:{" "}
          </label>
          <textarea
            rows={7}
            name="message"
            value={message}
            onChange={onChangeHandler}
            placeholder="What you want to say?"
            className=" p-2 sm:p-4 md:p-2 lg:py-4 lg:px-6 placeholder:text-secondary placeholder:text-sm text-gray-900 rounded-lg outline-none border-none font-medium"
          />
        </div>
        <button
          type="submit"
          className="bg-slate-100 text-gray-800  shadow-gray-500 cursor-pointer   lg:w-[150px] sm:w-[200px] md:w-[150px] py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md "
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

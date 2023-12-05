"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import ScrollingHeader from "./ScrollingHeader";

const ContactSection = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM_ID);
  return state.succeeded ? (
    <section
      className="flex m-auto my-12 py-24 max-w-3xl gap-6 items-center justify-center"
      id="contact"
    >
      <div>
        <h1 className="text-white text-center mb-6 text-2xl sm:text-3xl font-bold">
          Thank you for your
          <span className="text-transparent text-2xl sm:text-3xl bg-clip-text bg-gradient-to-r from-secondary-500 to-primary-600 font-bold">
            submission!
          </span>
        </h1>
        <h2 className="text-white text-center mb-6  text-sm sm:text-lg">
          I will get back to you as soon as possible 📬
        </h2>
      </div>
    </section>
  ) : (
    <section
      className="text-[#ebede8] flex flex-col sm:flex-row justify-center m-auto my-12 py-24 max-w-3xl lg:gap-6"
      id="contact"
    >
      <ScrollingHeader></ScrollingHeader>
      <form onSubmit={handleSubmit} className="grow flex flex-col">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="text-white block text-sm mb-2 font-medium"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your email"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="text-white block text-sm mb-2 font-medium"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Your message"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-gradient-to-r from-secondary-500 to-primary-600 hover:bg-secondary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
        >
          Submit
        </button>
        <ValidationError errors={state.errors} />
      </form>
    </section>
  );
};

export default ContactSection;

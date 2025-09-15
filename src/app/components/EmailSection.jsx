"use client";
import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    console.log("Submitting data:", data);
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (response.status === 200) {
        console.log("Message sent successfully:", resData);
        setEmailSubmitted(true);
      } else {
        console.error("Error sending message:", resData.error);
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative bg-gray-50 dark:bg-gray-900 px-4 rounded-lg"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-gray-800 dark:text-white my-2 font-mono">
          Chat with Us
        </h5>
        <p className="text-gray-600 dark:text-[#ADB7BE] mb-4 max-w-md font-mono">
          {" "}
          We are currently onboarding members, our inbox is always
          open. Whether you have an inquiry or just want to say hi, we always
          respond to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Imoite-zn" className="hover:opacity-80 transition-opacity">
            <FaWhatsapp size={40} className="text-lime-600 dark:text-lime-500" />
          </Link>
          <Link href="https://www.linkedin.com/in/lawrence-imoite-0925c11" className="hover:opacity-80 transition-opacity">
            <FaInstagram size={40} className="text-purple-600 dark:text-purple-500" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-600 dark:text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-gray-800 dark:text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-white dark:bg-[#18191E] border border-gray-300 dark:border-[#33353F] placeholder-gray-500 dark:placeholder-[#9CA2A9] text-gray-800 dark:text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-500 focus:border-transparent transition-colors"
                placeholder="yourmail@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-gray-800 dark:text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-white dark:bg-[#18191E] border border-gray-300 dark:border-[#33353F] placeholder-gray-500 dark:placeholder-[#9CA2A9] text-gray-800 dark:text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-500 focus:border-transparent transition-colors"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-gray-800 dark:text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-white dark:bg-[#18191E] border border-gray-300 dark:border-[#33353F] placeholder-gray-500 dark:placeholder-[#9CA2A9] text-gray-800 dark:text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-500 focus:border-transparent transition-colors min-h-[120px]"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
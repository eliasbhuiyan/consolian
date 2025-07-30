"use client";
import React from "react";

const ContactBtn = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button
      onClick={() => handleScroll("contact")}
      className="bg-transparent hover:bg-white text-white font-semibold hover:text-gray-700 text-xs xl:text-xl py-1 xl:py-2 px-4 border border-white rounded-full"
    >
      Contact
    </button>
  );
};

export default ContactBtn;

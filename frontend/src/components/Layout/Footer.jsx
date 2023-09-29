import React from "react";

const Footer = () => {
  return (
    <div class="bg-slate-800 w-full h-28 md:h-36 mt-12 flex flex-col items-center justify-center md:flex-row md:justify-around md:px-20">
      <div class="py-2.5 hidden md:block md:order-last">
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mr-4">
          Login
        </button>
        <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
          Sign Up
        </button>
      </div>

      <p class="text-white">&copy; 2023 event-addis</p>
    </div>
  );
};

export default Footer;

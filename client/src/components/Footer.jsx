import React from "react";

import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 bg-[#131516]">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5]  items-center">
        <h1 className="text-white font-semibold text-4xl">GithubCrypt</h1>
      </div>
    </div>

   

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@kryptomastery2022</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;

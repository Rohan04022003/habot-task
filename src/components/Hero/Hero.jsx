import React from "react";
import hero from "../../assets/hero-image.jpg";
import Button from "../Button/Button";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import "../../scrollbar.css";

const Hero = () => {
  return (
    <div className="sm:h-[78vh] h-[65vh] relative top-20">
      <div className="absolute top-0 left-0 w-full h-full hero-gradient z-10"></div>
      <img src={hero} alt="Hero" className="w-full h-full object-cover" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-[93vw] text-center leading-none">
        <h1 className="text-white lg:text-[3.5rem] sm:text-[3rem] text-[2.1rem] font-bold">
          Are You A Supplier?
        </h1>
        <p className="text-white lg:text-[3.5rem] sm:text-[3rem] text-[1.5rem] sm:leading-none leading-9  md:pt-2 pt-8">
          Explore Matching Opportunities.
        </p>
        <div className="hero-input-container flex flex-col lg:flex-row items-center justify-center flex-wrap gap-3 sm:pt-10 pt-2">
          <div className="flex items-center gap-3 lg:w-[25rem] md:w-[60vw] sm:w-[80vw] w-[90vw] bg-white rounded-md px-4 h-14 overflow-hidden">
            <FaEnvelope size={23} color="#e67509" />
            <input
              type="text"
              placeholder="Search your required service here"
              className="flex-1 py-2 outline-none text-gray-700 text-base placeholder-gray-500 rounded-md"
            />
          </div>
          <div className="flex items-center gap-3 lg:w-[25rem] md:w-[60vw] sm:w-[80vw] w-[90vw] bg-white rounded-md px-4 h-14 overflow-hidden">
            <FaLocationDot size={23} color="#e67509" />
            <input
              type="text"
              placeholder="Search your desired location here"
              className="flex-1 py-2 outline-none text-gray-700 text-base leading-6 placeholder-gray-500 rounded-md"
            />
          </div>
          <Button
            text="Search"
            variant="primary"
            font="text-md font-bold px-8 py-[1.1rem]"
          />
        </div>
        <p className="text-white sm:text-lg text-base pt-8 font-bold">
          Are you a buyer?
          <span className="text-gray-200 sm:text-lg text-base font-normal pl-2 underline cursor-pointer">
            Click here if you are looking to post a requirements
          </span>
        </p>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import Button from "../Button/Button";
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";

const DiveIntoHabot = () => {
  const { showSignup } = useContext(AuthContext); // Destructure showSignup from AuthContext

  const location = [
    // Location Array
    "Abu Dhabi",
    "Dubai",
    "Sharjah & Ajman",
    "Fujairah",
    "Ras AI Khaimah",
    "Umm AI Quwain",
  ];

  return (
    <div className="flex lg:flex-row flex-col justify-between xl:mx-24 lg:mx-10 mx-3 md:my-24 my-16 gap-10 pt-20">
      <div className="lg:w-1/2 w-full">
        <h2 className="text-4xl font-bold leading-none">
          Ready to dive into <span className="text-[#271554]">HABOT?</span>
        </h2>
        <p className="text-lg pt-8 pb-8 text-gray-700 2xl:w-[40rem] xl:w-[35rem] w-full">
          Signing up with HABOT opens the door to a world of new opportunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded individuals, unlock valuable resources, and take the
          first step towards realizing your entrepreneurial dreams.
        </p>
        <Button
          text="Sign up Today !"
          variant="primary"
          font="text-lg font-bold sm:pl-20 pl-5 sm:pr-8 pr-4 py-[.8rem] flex items-center gap-10"
          onClick={showSignup} // onClick event to show the signup form
        />
      </div>
      <div className="lg:w-1/2 w-full">
        <div className="flex lg:justify-end w-full">
          <div className="location-container grid lg:grid-cols-2 sm:grid-cols-3 grid-cols-2 gap-5">
            {location.map(
              (
                item,
                index // Mapping the location array
              ) => (
                <div
                  key={index}
                  className="location-item h-[4rem] rounded-md border border-[#e7760d] flex justify-center items-center 2xl:w-[15rem] xl:w-[13rem] lg:w-[12rem] sm:w-[31vw] w-[44vw] text-lg font-semibold text-gray-700"
                >
                  <p>{item}</p> {/* Displaying the location item */}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiveIntoHabot;

import React, { useState } from "react";
import requirementsImage from "../../assets/requirements-img.png";
import { FaCheckCircle } from "react-icons/fa";

const PostYourRequirements = () => {
  const [isActive, setIsActive] = useState("Buyer"); // State to manage the active section

  const requirementsIfo = { // Requirements Info Object
    header: ["Buyer", "Supplier"],
    info: {
      buyerText: [
        "Post your requirements",
        "Sit back for multiple suppliers to contact you.",
        "Choose among the suppliers based on the ratings and reviews.",
      ],
      supplierText: [
        "View detailed buyer requirements.",
        "Connect with potential buyers looking for your products/services.",
        "Submit your offers and negotiate terms directly with buyers.",
        "Expand your business by gaining verified and quality leads.",
      ],
    },
  };

  return (
    <div className="xl:h-[85vh] bg-[#072f57] rounded-md xl:mx-24 lg:mx-10 mx-3 lg:px-20 md:px-10  lg:py-28 md:py-8 p-4 flex xl:flex-row flex-col justify-between lg:gap-20 md:gap-10 gap-5">
      <img
        src={requirementsImage}
        alt="Post Your Requirements"
        className="2xl:w-[37rem] xl:w-[25rem] rounded-md"
      />

      <div className="right-requirements-container">
        <div className="flex items-center justify-between text-3xl font-bold mb-8">
          {requirementsIfo.header.map((elem, index) => { // Mapping the header array
            return (
              <h3
                key={index}
                onClick={() => setIsActive(elem)}
                className={`sm:text-3xl text-xl sm:px-14 px-8 py-2 border-b-4 ${
                  isActive === elem
                    ? "border-[#eb7150] text-[#eb7150]"
                    : "text-white border-transparent"
                } cursor-pointer`}
              >
                {elem}
              </h3>
            );
          })}
        </div>
        <div>
          {isActive === "Buyer" ? (
            <div className="buyer-section">
              {requirementsIfo.info.buyerText.map((text, index) => { // Mapping the buyer text array
                return (
                  <p
                    key={index}
                    className="flex text-white gap-2 sm:text-xl text-lg py-3"
                  >
                    <span className="sm:mt-[.3rem] mt-[.2rem] bg-white w-fit h-fit rounded-full border border-[#32ba7c]">
                      <FaCheckCircle color="#32ba7c" />
                    </span>
                    {text}
                  </p>
                );
              })}
            </div>
          ) : (
            <div className="Supplier-section">
              {requirementsIfo.info.supplierText.map((text, index) => { // Mapping the supplier text array
                return (
                  <p key={index} className="flex text-white gap-2 sm:text-xl text-lg py-3">
                    <span className="sm:mt-[.3rem] mt-[.2rem] bg-white w-fit h-fit rounded-full border border-[#32ba7c]">
                      <FaCheckCircle color="#32ba7c" />
                    </span>
                    {text}
                  </p>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostYourRequirements;

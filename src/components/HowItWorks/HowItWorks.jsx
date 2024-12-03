import React from "react";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";
import icon6 from "../../assets/icon6.png";

const HowItWorks = () => {
  const workData = [
    {
      icon: icon1,
      text: ["Select Your Role and", "Sign Up"],
    },
    {
      icon: icon2,
      text: ["Buyers Post Your", "Requirements"],
    },
    {
      icon: icon3,
      text: ["Review, Select, and", "Contact the Best Suppliers"],
    },
    {
      icon: icon4,
      text: [
        "Suppliers Complete your",
        "profile and get notified for",
        "opportunities",
      ],
    },
    {
      icon: icon5,
      text: ["Contact to Buyers and Share", "your Quote for the service"],
    },
    {
      icon: icon6,
      text: [
        "Both the Parties can Connect",
        "and Make Business Leave a",
        "Feedback",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center md:mb-36 mb-14">
      <h2 className="text-4xl font-bold text-gray-800 pb-8">How it works?</h2>
      <p className="text-center text-gray-800 text-lg lg:w-[53%] md:w-[70%] w-[95%] mx-auto">
        Buyers post their needs and review top suppliers, while suppliers
        complete profiles, connect with potential buyers, and build successful
        business relationships, sharing valuable feedback.
      </p>
      <div className="pt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:w-[77%] lg:w-[90%] w-[95%] content-center">
        {workData.map((elem, index) => (
          <div
            key={index}
            className={`${
              index % 2 === 0 ? "bg-[#e8fbff]" : "bg-white"
            } px-4 py-8 flex flex-col items-center text-center`}
          >
            <img src={elem.icon} alt={`Step ${index + 1}`} width={"105rem"} />
            <h3 className="pt-6 text-xl font-semibold text-gray-800">
              {elem.text.map((line, lineIndex) => (
                <span key={lineIndex}>
                  {line}
                  <br />
                </span>
              ))}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;

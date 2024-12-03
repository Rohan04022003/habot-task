import React from "react";
import logo from "../../assets/habot-footer.png";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
const Footer = () => {
  const footerLinks = [ // Footer Links Array
    {
      header: "Company",
      links: ["About", "FAQ"],
    },
    {
      header: "Terms",
      links: ["Data Privacy", "Terms", "Accessibility"],
    },
    {
      header: "Related",
      links: ["Find Buyer", "Feedback"],
    },
  ];

  const icons = [ // Icons Array
    <FaLinkedinIn />,
    <FaTwitter />,
    <FaFacebookF />,
    <FaInstagram />,
  ];

  return (
    <div className="bg-[#123557] w-full h-auto py-8 flex items-center">
      <div className="flex md:flex-nowrap flex-wrap justify-between items-center gap-5 border-b-2 border-t-2 md:h-[10rem] h-auto py-5 xl:w-[80%] w-[90%] mx-auto border-[#415d78] text-gray-300">
        <div className="flex justify-between md:flex-nowrap flex-wrap lg:gap-20 gap-10">
          <div className="flex flex-col md:w-auto w-full gap-3">
            <img src={logo} alt="logo" className="w-[13rem]" />
            <p>© R Kumar Mahto</p>
          </div>

          {footerLinks.map((elem, index) => { // Mapping the footer links array
            return (
              <div key={index}>
                <h1 className="text-white md:text-sm text-lgfont-semibold pb-3">
                  {elem.header}
                </h1>
                {elem.links.map((link, index) => { // Mapping the links array
                  return <p key={index} className="text-gray-300 text-sm pb-1">{link}</p>;
                })}
              </div>
            );
          })}
        </div>
        <div className="flex md:flex-nowrap justify-center flex-wrap gap-5 items-center md:w-auto w-full">
          {icons.map((icon, index) => {
            return (
              <div key={index} className="border border-[#415d78] rounded-full p-2 text-xl">
                {icon}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;

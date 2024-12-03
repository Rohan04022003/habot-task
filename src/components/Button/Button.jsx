import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Button = ({ text, variant, font, onClick }) => {
  const variants = {
    primary: "bg-[#00732f] text-white rounded-md active:bg-[#0a9042]",
    secondary: "bg-white text-[#00732f] rounded-md border border-[#00732f] active:bg-[#00732f] active:text-white",
    tertiary: "bg-[#eb7150] text-white rounded-md active:bg-[#dd5b37]"
  };

  return (
    <button className={`${variants[variant]} ${font}`} onClick={onClick}> {/* Button Component */}
      {text} {text === "Sign up Today !" && <BsArrowRight size={20} fontWeight={""} />} 
    </button>
  );
};

export default Button;

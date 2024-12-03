import React from "react";
import logo from "../../assets/habot.png";
import Button from "../Button/Button";
import { IoIosArrowDown } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {

  const {auth, showLogin} = useContext(AuthContext)  // Destructuring the showLogin function from AuthContext

  const navItems = [ // Nav Items Array
    {
      text: "Find Suppliers",
      link: "#",
    },
    {
      text: "Find Service Tags",
      link: "#",
    },
  ];

  return (
    <div className="flex justify-between items-center xl:px-24 lg:px-10 px-3 py-6 w-full h-20 bg-white fixed top-0 z-40">
      <div>
        <img src={logo} alt="Habot Logo" className="md:w-36 w-28" />
      </div>
      <div className="flex gap-7 items-center">
        <ul className="md:flex gap-7 hidden">
          {navItems.map((item, index) => { // Mapping the nav items array
            return <li key={index} className="cursor-pointer text-sm text-[#727376] font-semibold flex items-center gap-1">{item.text} {item.text === "Find Service Tags"? <IoIosArrowDown /> : null}</li>;
          })}
        </ul>
        <Button text="Login / Sign Up" variant={`${auth === "login" || auth === "signup" ? "primary" : "secondary"}`} font="text-[.7rem] font-bold md:px-6 px-4 py-[.6rem]" onClick={showLogin} /> {/* Login / Sign Up button */}
      </div>
    </div>
  );
};

export default Navbar;

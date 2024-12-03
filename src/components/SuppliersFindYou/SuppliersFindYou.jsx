import React from "react";
import Button from "../Button/Button.jsx";

const SuppliersFindYou = () => {
  return (
    <div className="md:my-24 my-14 w-full md:h-[16rem] h-[10rem] bg-[#e8fbff] flex justify-between items-center xl:px-44 lg:px-24 md:px-14 px-3">
      <h2 className="md:text-4xl text-2xl flex sm:flex-row flex-col items-start font-bold text-[#1b1b1b]">
        Let Suppliers{" "}
        <span className="border-b-4 border-[#eb7150]">Find You</span>
      </h2>
      <Button
        text={"Get Verified"}
        variant={"tertiary"}
        font={"md:px-14 px-6 md:text-lg text-base py-3 font-semibold"}
      />
    </div>
  );
};

export default SuppliersFindYou;

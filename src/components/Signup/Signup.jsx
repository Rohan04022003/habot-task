import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { AuthContext } from "../../Context/AuthContext";  
import { useContext } from "react";

const Signup = () => {
  const {closeAuth, showLogin} = useContext(AuthContext) // Destructuring the closeAuth and showLogin functions from AuthContext
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 h-screen">
      <div className="sm:w-[90%] md:w-[60%] xl:w-[30%] w-full sm:h-auto h-screen mx-auto bg-black/50 backdrop-blur-xl rounded-lg lg:p-8 px-4 py-8 border border-white/20 shadow-lg z-50">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-2xl font-semibold text-white">
            Create an account
          </h1>
          <IoCloseOutline className="text-white text-2xl cursor-pointer" onClick={closeAuth} /> {/* Close button */}
        </div>
        <div className="flex flex-col sm:gap-8 gap-12 sm:pt-0 pt-12">
          <input
            type="text"
            placeholder="Email"
            className="bg-transparent border-b border-white/20 text-white p-2 w-full outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent border-b border-white/20 text-white p-2 w-full outline-none"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="bg-transparent border-b border-white/20 text-white p-2 w-full outline-none"
          />
          <p className="text-white/80 flex items-center gap-4">
            <input type="checkbox" className="accent-white cursor-pointer" />I
            accept the Terms and Conditions
          </p>
          <button className="border-white/20 border rounded-md text-white py-2 px-6 active:bg-white/20 active:text-white w-fit mx-auto">
            Sign up
          </button>
          <p className="text-white/80 text-center">
            Already have an account?{" "}
            <span className="text-white font-semibold cursor-pointer" onClick={showLogin}> {/* Login here button */}
              Login here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

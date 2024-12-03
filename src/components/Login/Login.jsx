import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
  const {closeAuth, showSignup} = useContext(AuthContext) // Destructuring the closeAuth and showSignup functions from AuthContext
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 h-screen">
      <div className="sm:w-[90%] md:w-[60%] xl:w-[30%] w-full sm:h-auto h-screen mx-auto bg-black/50 backdrop-blur-xl rounded-lg lg:p-8 px-4 py-8 border border-white/20 shadow-lg z-50">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-2xl font-semibold text-white">Login</h1>
          <IoCloseOutline className="text-white text-2xl cursor-pointer" onClick={closeAuth} /> {/* Close button */}
        </div>
        <div className="flex flex-col sm:gap-8 gap-12 sm:pt-0 pt-32">
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
          <button className="border-white/20 border rounded-md text-white py-2 px-6 active:bg-white/20 active:text-white w-fit mx-auto">
            Login
          </button>
          <p className="text-white/80 text-center">
            Don't have an account?{" "}
            <span className="text-white font-semibold cursor-pointer" onClick={showSignup}> {/* Sign up button */}
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

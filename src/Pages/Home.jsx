import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import ReadyToDiveIntoHabot from "../components/DiveIntoHabot/DiveIntoHabot";
import PostYourRequirements from "../components/PostYourRequirements/PostYourRequirements";
import SuppliersFindYou from "../components/SuppliersFindYou/SuppliersFindYou";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Home = () => {
  const { auth } = useContext(AuthContext);

  return (
    <div>
      <Navbar />
      <Hero />
      <ReadyToDiveIntoHabot />
      <PostYourRequirements />
      <SuppliersFindYou />
      <HowItWorks />
      <Footer />
      {auth === "login" && <Login />} {/* Login form */}
      {auth === "signup" && <Signup />} {/* Signup form */}
    </div>
  );
};

export default Home;

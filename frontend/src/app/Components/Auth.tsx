"use client";
import React, { useState } from "react";
import Logo from "../assets/Logo-sticker2.png";
import LoginPage from "./LoginPage";
import Image from "next/image";
// import SignupPage from "./SignupPage";

/*
_______________________________________________________________________________________

  This is the Registration Page which uses "Login" and "Signup" boxes as components,
  Login is the intial component, while Signup is rendred conditionally using signupFlag 
_______________________________________________________________________________________

  */

const RegistrationPage = () => {
  const [signUpFlag, setSignUpFlag] = useState(false);
  const [Loading, setLoading] = useState(false);

  // handleSignup is the controller function for
  // loading signup and login pages conditionally

  const handleSignup = (e:string) => {
    
    console.log("signup is curently disabled")
    // setLoading(true);
    // setTimeout(() => {
    //   e === "signup" ? setSignUpFlag(true) : setSignUpFlag(false);
    //   setLoading(false);
    // }, 1000);
    
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-start lg:flex-row lg:items-start lg:justify-evenly px-4 sm:px-6 lg:px-8 bg-indigo-900/80`}
      // style={{ backgroundImage: `url(${FoodImage.src})` }}
    >


      <Image src={Logo} alt="" className={`w-[100px] lg:w-[250px] pt-4 lg:pt-[100px]`} />
      <div
        className={`bg-indigo-300/10 text-white lg:mt-[100px] px-9 pt-4 pb-10 rounded-lg shadow-2xl w-[300px] mb-[250px]`}
      >
        {!signUpFlag && !Loading && <LoginPage func={handleSignup} />}
        {/* {signUpFlag && !Loading && <SignupPage func={handleSignup} />} */}
      </div>
    </div>
  );
};

export default RegistrationPage;

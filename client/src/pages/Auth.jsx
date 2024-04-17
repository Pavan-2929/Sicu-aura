import React, { useState } from "react";
import background from "../assets/background.png";
import logo from "../assets/logo.png";
import auth from "../assets/auth.png";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Auth = () => {
  const [toggleAuth, setToggleAuth] = useState("Sign-Up");

  return (
    <div className="flex">
      <div
        className="bg-cover text-center bg-center h-screen flex justify-center items-center max-w-auto md:min-w-[30rem]"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="text-white mb-14">
          <div className="flex justify-center">
            <img src={logo} alt="Logo" className="mt-8" />
          </div>
          <div className="my-8 text-[32px] font-bold">
            <p>
              Feel <span className="text-green">Safe</span> Everywhere
            </p>
          </div>
          <div className="text-[24px] font-semibold ">
            <p>
              #Safe-<span className="text-green">T</span>-Fast
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full m-12 mt-10">
        <div className=" flex justify-center w-full h-[100px]">
          <div className="flex justify-start">
            <img src={auth} alt="" className="w-auto h-[96px] ml-12" />
          </div>
          <div className=" flex items-center w-full font-bold -ml-24 text-center justify-center h-full text-[30px] cursor-pointer text-deepPurple">
            <div onClick={() => setToggleAuth("Sign-Up")}>
              <p
                className={`${
                  toggleAuth === "Sign-Up" ? "text-deepPurple" : "text-gray"
                }`}
              >
                SignUp
              </p>
            </div>
            <div className="mx-2 text-[40px]">
              <p>/</p>
            </div>
            <div onClick={() => setToggleAuth("Login")}>
              <p
                className={`${
                  toggleAuth === "Login" ? "text-deepPurple" : "text-gray"
                }`}
              >
                Login
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-around w-full">
          {toggleAuth === "Login" ? <Login /> : <Signup />}
        </div>
      </div>
    </div>
  );
};

export default Auth;

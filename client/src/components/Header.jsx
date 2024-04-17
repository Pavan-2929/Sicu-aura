import React, { useEffect, useState } from "react";
import navlogo from "../assets/navlogo.png";
import navtext from "../assets/navtext.png";
import axios from "axios";
import profile from "../assets/profile.png";
import {useNavigate} from "react-router-dom"
const Header = () => {

  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState({});
  const [error, setError] = useState(null); // State to store errors

  const getUser = async () => {
    try {
      const response = await axios.get(
        "https://sicu-aura-backend.onrender.com/api/hospital/get",
        { withCredentials: true }
      );

      setCurrentUser(response.data);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, [true]);

  const handleSignOut = async () => {
    try {
      const response = await axios.post(
        "https://sicu-aura-backend.onrender.com/api/hospital/logout"
      );

      console.log(response);
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-darkblue text-white flex justify-around items-center">
      <div className="flex p-2 items-center">
        <img src={navlogo} alt="" className="w-[62px]" />
        <img src={navtext} alt="" className="h-[30px]" />
      </div>
      <div className="flex gap-10">
        <div className="flex items-center gap-4">
          <img src={profile} alt="" />
          {currentUser.hospitalName}
        </div>
        <button
          className="bg-[#302A41]  text-white p-2 font-semibold text-sm rounded-xl px-6 "
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;

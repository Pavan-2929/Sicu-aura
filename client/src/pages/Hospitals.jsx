import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import computer from "../assets/computer.png";
import { useDispatch, useSelector } from "react-redux";
import { setUser, login } from "../redux/auth/userSlice";

const Hospitals = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  const getUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/hospital/get",
        { withCredentials: true }
      );
      dispatch(login());
      dispatch(setUser(response.data));

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, [true]);

  console.log(currentUser);

  return (
    <div>
      <Header />
      <div className="flex justify-end mr-48 mt-4">
        <img src={computer} alt="" />
      </div>
      <div></div>
    </div>
  );
};

export default Hospitals;

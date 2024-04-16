import React, { useState } from "react";
import Input from "./Input";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    hospitalName: "",
    email: "",
    password: "",
    code: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.code !== "sicu-aura") {
        alert("Enter valid code");
        return;
      }
      const response = await axios.post(
        "http://localhost:3000/api/hospital/login",
        formData,
        { withCredentials: true }
      );
      setFormData({
        hospitalName: "",
        email: "",
        password: "",
        code: "",
      });
      alert("login successful");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(formData);
  return (
    <div className="">
      <div className="border-gray border py-12 px-14 rounded-lg shadow-2xl">
        <div>
          <p className="text-[24px] text-center mb-4 font-semibold">
            Welcome to Sicu-aura
          </p>
        </div>
        <div>
          <p className="text-[#bcbcbc] mb-14">
            Your one stop safety solutions using innovative technology
          </p>
        </div>
        <div className="flex flex-col w-full gap-y-10 mt-10 self-center">
          <Input
            placeholder="Hospital Name"
            name="hospitalName"
            value={formData.hospitalName}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Email ID"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />{" "}
          <Input
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Specical Access Code"
            name="code"
            value={formData.code}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-deepPurple text-white p-2 font-semibold text-sm mt-10 rounded-lg px-6"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;

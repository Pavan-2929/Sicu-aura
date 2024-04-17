import React, { useState } from "react";
import Input from "./Input";
import axios from "axios";
import Face from "./Face";

const Login = () => {
  const [formData, setFormData] = useState({
    hospitalName: "",
    email: "",
    password: "",
    code: "sicu-aura",
  });
  const [isLoginCompleted, setIsLoginCompleted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    setLoading(false)
    e.preventDefault();
    try {
      setLoading(true)
      setIsLoginCompleted(false);
      if (formData.code !== "sicu-aura") {
        alert("Enter valid code");
        return;
      }
      const response = await axios.post(
        "https://sicu-aura-backend.onrender.com/api/hospital/login",
        formData,
        { withCredentials: true }
      );
      setLoading(false)
      setFormData({
        hospitalName: "",
        email: "",
        password: "",
        code: "",
      });
      alert("login successful");
      setIsLoginCompleted(true);
      console.log(response);
    } catch (error) {
      console.log(error);
      setLoading(false)
      setIsLoginCompleted(false);
    }
  };

  console.log(formData);
  return (
    <div>
      {isLoginCompleted ? (
        <Face />
      ) : (
        <div>
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
              {loading ? "loading..." : "Login"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import Input from "./Input";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    hospitalName: "",
    email: "",
    address: "",
    phoneNumber: "",
    city: "",
    hospitalRegistrationNumber: "",
    state: "",
    registrationWardNumber: "",
    pincode: "",
    hospitalRegistrationDate: "",
    numberOfAmbulanceAvailable: "",
    password: "",
    confirmPassword: "",
    registrationCertificate: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    setLoading(false);
    e.preventDefault();
    try {
      setLoading(true);

      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      const response = await axios.post(
        "http://localhost:3000/api/hospital/create",
        formData
      );
      alert("Sign Up successful")
      console.log(response);
      setLoading(false);
    } catch (error) {
      alert("Something went wrong")
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="">
      <div className="grid grid-cols-2 gap-x-24 gap-10 mt-10">
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
        />
        <Input
          placeholder="Address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
        <Input
          placeholder="City"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Hospital Registration Number"
          name="hospitalRegistrationNumber"
          value={formData.hospitalRegistrationNumber}
          onChange={handleInputChange}
        />
        <Input
          placeholder="State"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Registration-Ward Number"
          name="registrationWardNumber"
          value={formData.registrationWardNumber}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Pincode"
          name="pincode"
          value={formData.pincode}
          onChange={handleInputChange}
        />
        <input
          type="file"
          name="registrationCertificate"
          value={formData.registrationCertificate}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Hospital Registration Date"
          name="hospitalRegistrationDate"
          value={formData.hospitalRegistrationDate}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Number of Ambulance Available"
          name="numberOfAmbulanceAvailable"
          value={formData.numberOfAmbulanceAvailable}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Create Password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-deepPurple text-white p-2 font-semibold text-sm mt-10 rounded-lg px-6"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default Signup;

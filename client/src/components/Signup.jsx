import React, { useState } from "react";
import Input from "./Input";

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
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  console.log(formData);

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
        <input type="file" />
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
        <button className="bg-deepPurple text-white p-2 font-semibold text-sm mt-10 rounded-lg px-6">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;

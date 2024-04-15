import React, { useState } from "react";

const Input = ({ placeholder, name, value, onChange }) => {
  return (
    <div className="input-container">
      <input
        type="text"
        className={`border-b-2 ${
          value ? "border-black" : "border-gray"
        } w-[340px] focus:outline-none`}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default Input;

import React from 'react';

const Input = ({ type, placeholder, required, disabled, onChange }) => {
  return (
    <input
      className="input"
      type={type || "text"}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      onChange={onChange}/>
  );
};

export default Input;

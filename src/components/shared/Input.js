import React from 'react';

const Input = ({ type, required, disabled, onChange }) => {
  return (
    <input
        className="input"
        type={type || "text"}
        required={required}
        disabled={disabled}
        onChange={onChange}/>
  );
};

export default Input;

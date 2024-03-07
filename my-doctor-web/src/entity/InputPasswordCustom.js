import "../styles/EntityStyle.css";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function InputPasswordCustom(props) {
  const { value, onChange, placeholder } = props;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="input-wrapper">
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="custom-input"
      />
      {showPassword ? (
        <FaEye className="eye-icon" onClick={() => setShowPassword(false)} />
      ) : (
        <FaEyeSlash
          className="eye-icon"
          onClick={() => setShowPassword(true)}
        />
      )}
    </div>
  );
}

export default InputPasswordCustom;

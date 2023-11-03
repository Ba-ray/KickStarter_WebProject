import React, { useState,useEffect } from "react";
import "../styles/formInput.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PhoneInput from 'react-phone-number-input';
import "react-phone-number-input/style.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [isValid, setIsValid] = useState(false);

  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(!focused);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    // Implement your validation logic here
    const isValidInput = validateInput(inputProps.value, inputProps.name);
    setIsValid(isValidInput);
  }, [inputProps.value, inputProps.name]);

  const validateInput = (value, name) => {
    switch (name) {
      case ("username", "firstName", "lastName"):
        return /^[A-Za-z0-9]{3,16}$/.test(value); // 3- 16 letter and shouldn't include any special char.

      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

      case "password":
        // Implement validation logic for the password field
        // Example: Check if the password meets your criteria
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^\\da-zA-Z]).{8,20}$$/.test(
          value
        );

      case "confirmPassword":
        // Implement validation logic for the confirmPassword field
        // Example: Check if it matches the password
        return value === props.values.password;

      case "age":
        return Number(value) >= 18;

      default:
        return true; // Default to true for other fields
    }
  };

  const inputType =
    inputProps.type === "tel" ? "tel" : showPassword ? inputProps.type : "text"; // Set the input type based on 'type' prop

  return (
    <div
      className={`formInput ${focused ? "focused" : ""} ${
        isValid ? "valid" : ""
      }`}
    >
      <label>{label}</label>
      <div className="password-input-wrapper">
        {inputProps.type === "tel" ? ( // Conditionally render PhoneInput for type 'tel'
          <PhoneInput
            international
            defaultCountry="Lebanon"
            placeholder="Enter phone number"
            value={inputProps.value}
            onChange={(value) =>
              onChange({ target: { name: inputProps.name, value } })
            }
            className={`${props.isBig ? "inputDescription" : "otherInputs"}`}
          />
        ) : (
          <input
            {...inputProps}
            type={showPassword ? inputProps.type : "text"}
            onChange={onChange}
            onBlur={handleFocus}
            onFocus={() =>
              inputProps.name === "confirmPassword" && setFocused(true)
            }
            focused={focused.toString()}
            className={`${props.isBig ? "inputDescription" : "otherInputs"}`}
          />
        )}

        {(inputProps.name === "password" ||
          inputProps.name === "confirmPassword") && (
          <button
            className="show-hide-password"
            type="button"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <FaEye className="eye" />
            ) : (
              <FaEyeSlash className="eye" />
            )}
          </button>
        )}
        <span className="error-message-container">{errorMessage}</span>
      </div>
    </div>
  );
};

export default FormInput;

// import React, { useState, useEffect } from "react";
// import { Form, InputGroup, Button } from "react-bootstrap";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";
// import "../styles/formInput.css"

// const FormInput = (props) => {
//   const [focused, setFocused] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [isValid, setIsValid] = useState(false);

//   // console.log(showPassword)
//   const { label, errorMessage, onChange, ...inputProps } = props;

//   const validateInput = (value, name) => {
//     switch (name) {
//       case "username":
//       case "firstName":
//       case "lastName":
//         return /^[A-Za-z0-9]{3,16}$/.test(value);

//       case "email":
//         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

//       case "password":
//         // Removed extra $ at the end of the regex
//         return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\\da-zA-Z]).{8,20}$/.test(
//           value
//         );

//       case "confirmPassword":
//         return value === props.values.password;

//       case "age":
//         return Number(value) >= 18;

//       default:
//         return true; // Default to true for other fields
//     }
//   };

//   useEffect(() => {
//     const isValidInput = validateInput(inputProps.value, inputProps.name);
//     setIsValid(isValidInput);
//   }, [inputProps.value, inputProps.name]);

//   const handleFocus = () => {
//     setFocused(!focused);
//   };

//   const togglePasswordVisibility = () => {
//     // e.preventDefault();
//     setShowPassword((prevShowPassword) => !prevShowPassword);
//   };

//   const handleMouseDown = (e) => {
//     // Prevent the input field from losing focus when clicking the eye icon
//     e.preventDefault();
//   };

//   const renderInput = () => {
//     const inputType = showPassword ? inputProps.type : "text";
//     console.log(inputProps.type);
//     if (inputProps.type === "tel") {
//       return (
//         <PhoneInput
//           international
//           defaultCountry="Lebanon"
//           placeholder="Enter phone number"
//           value={inputProps.value}
//           onChange={(value) =>
//             onChange({ target: { name: inputProps.name, value } })
//           }
//           className={`${props.isBig ? "inputDescription" : "otherInputs"}`}
//         />
//       );
//     }

//     return (
//       <div className="password-input-wrapper">
//         <Form.Control
//           type={inputType}
//           onChange={onChange}
//           onBlur={handleFocus}
//           onFocus={() =>
//             inputProps.name === "confirmPassword" && setFocused(true)
//           }
//           className={`${props.isBig ? "inputDescription" : "otherInputs"}`}
//           {...inputProps}
//         />
//         {(inputProps.name === "password" ||
//           inputProps.name === "confirmPassword") && (
//           <button
//             className="show-hide-password"
//             type="button"
//             onClick={togglePasswordVisibility}
//           >
//             {showPassword ? (
//               <FaEye className="eye" onClick={togglePasswordVisibility} />
//             ) : (
//               <FaEyeSlash className="eye" onClick={togglePasswordVisibility} />
//             )}
//           </button>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div
//       className={`formInput ${focused ? "focused" : ""} ${
//         isValid ? "valid" : ""
//       }`}
//     >
//       <Form.Label>{label}</Form.Label>
//       {renderInput()}
//       <span className="error-message-container">{errorMessage}</span>
//     </div>
//   );
// };

// export default FormInput;

// import React, { useState, useEffect } from "react";
// import { Form } from "react-bootstrap";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";
// import "../styles/formInput.css";

// const FormInput = (props) => {
//   const [focused, setFocused] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [isValid, setIsValid] = useState(false);
//   const [isInputDirty, setIsInputDirty] = useState(false);

//   const { label, errorMessage, onChange, ...inputProps } = props;

//   const validateInput = (value, name) => {
//     switch (name) {
//       case "username":
//       case "firstName":
//       case "lastName":
//         return /^[A-Za-z0-9]{3,16}$/.test(value);

//       case "email":
//         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

//       case "password":
//         // Removed extra $ at the end of the regex
//         return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\\da-zA-Z]).{8,20}$/.test(
//           value
//         );

//       case "confirmPassword":
//         return value === value.password;

//       case "age":
//         return Number(value) >= 18;

//       default:
//         return true; // Default to true for other fields
//     }
//   };

//   useEffect(() => {
//     if (isInputDirty) {
//       const isValidInput = validateInput(inputProps.value, inputProps.name);
//       setIsValid(isValidInput);
//     }
//   }, [inputProps.value, inputProps.name, isInputDirty]);

//   // const handleFocus = () => {
//   //   setFocused(!focused);
//   // };

//   const handleFocus = () => {
//     setFocused((prevFocused) => !prevFocused);
//   };

//   // const togglePasswordVisibility = () => {
//   //   setShowPassword(!showPassword);
//   //   console.log(showPassword ? 'text' : 'password');
//   // };
//   const togglePasswordVisibility = () => {
//     const newType = inputProps.type === "password" ? "text" : "password";
//     inputProps.onChange({ target: { name: inputProps.name, type: newType, value: inputProps.value } });
//   };

//   const handleMouseDown = (e) => {
//     e.preventDefault();
//   };

//   const handleInputChange = (e) => {
//     setIsInputDirty(true);
//     onChange(e);
//   };

//   const renderInput = () => {
//     const inputType = showPassword ? 'text' : 'password';

//     if (inputProps.type === "tel") {
//       return (
//         <PhoneInput
//           international
//           defaultCountry="Lebanon"
//           placeholder="Enter phone number"
//           value={inputProps.value}
//           onChange={(value) =>
//             onChange({ target: { name: inputProps.name, value } })
//           }
//           className={`${props.isBig ? "inputDescription" : "otherInputs"}`}
//         />
//       );
//     }

//     return (
//       <div className="password-input-wrapper">
//         <Form.Control
//           type={inputProps.type === "password" && showPassword ? "text" : "password"}
//           onChange={handleInputChange}
//           onBlur={handleFocus}
//           onFocus={() =>
//             inputProps.name === "confirmPassword" && setFocused(true)
//           }
//           className={`${props.isBig ? "inputDescription" : "otherInputs"}`}
//           {...inputProps}
//         />
//         {(inputProps.name === "password" ||
//           inputProps.name === "confirmPassword") && (
//           <button
//             className="show-hide-password"
//             type="button"
//             onClick={togglePasswordVisibility}
//           >
//             {showPassword ? (
//               <FaEye className="eye" />
//             ) : (
//               <FaEyeSlash className="eye" />
//             )}
//           </button>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div
//       className={`formInput ${focused ? "focused" : ""} ${
//         isValid ? "valid" : ""
//       }`}
//     >
//       <Form.Label>{label}</Form.Label>
//       {renderInput()}
//       {isInputDirty && !isValid && (
//         <span className="error-message-container">{errorMessage}</span>
//       )}
//     </div>
//   );
// };

// export default FormInput;
import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "../styles/formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isInputDirty, setIsInputDirty] = useState(false);

  const { label, errorMessage, onChange, ...inputProps } = props;

  const validateInput = (value, name) => {
    switch (name) {
      case "username":
      case "firstName":
      case "lastName":
        return /^[A-Za-z0-9]{3,16}$/.test(value);

      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

      case "password":
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\\da-zA-Z]).{8,20}$/.test(
          value
        );

      case "confirmPassword":
        return value === inputProps.value;

      case "age":
        return Number(value) >= 18;

      default:
        return true; // Default to true for other fields
    }
  };

  useEffect(() => {
    if (isInputDirty) {
      const isValidInput = validateInput(inputProps.value, inputProps.name);
      setIsValid(isValidInput);
    }
  }, [inputProps.value, inputProps.name, isInputDirty]);

  const handleFocus = () => {
    setFocused((prevFocused) => !prevFocused);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    setIsInputDirty(true);
    onChange(e);
  };

  const renderInput = () => {
    const inputType = showPassword ? "text" : inputProps.type;

    if (inputProps.type === "tel") {
      return (
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
      );
    }

    return (
      <div className="password-input-wrapper">
        <Form.Control
          onChange={handleInputChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
          }
          className={`${props.isBig ? "inputDescription" : "otherInputs"}`}
          {...inputProps}
          type={inputType}
        />
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
      </div>
    );
  };

  return (
    <div
      className={`formInput ${focused ? "focused" : ""} ${
        isValid ? "valid" : ""
      }`}
    >
      <Form.Label>{label}</Form.Label>
      {renderInput()}
      {isInputDirty && !isValid && (
        <span className="error-message-container">{errorMessage}</span>
      )}
    </div>
  );
};

export default FormInput;

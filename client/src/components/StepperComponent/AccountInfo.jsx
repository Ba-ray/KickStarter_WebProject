
// import React, { useState } from "react";
// import FormInput from "../FormInput";

// const AccountInformation = () => {
  
//   const [values, setValues] = useState({
//     username: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const inputs = [
//     {
//       id: 1,
//       name: "username",
//       type: "text",
//       placeholder: "Username",
//       errorMessage:
//         "3-16 characters \nshouldn't include any special character!",
//       label: "Username:",
//       required: true,
//     },
   
   
//     {
//       id: 2,
//       name: "password",
//       type: "password",
//       placeholder: "Password",
//       errorMessage:
//         "8-20 characters\nat least 1 letter, 1 number and 1 special character!",
//       label: "Password:",
//       required: true,
//     },
//     {
//       id: 3,
//       name: "confirmPassword",
//       type: "password",
//       placeholder: "Confirm Password",
//       errorMessage: "Passwords don't match!",
//       label: "Confirm Password:",
//       required: true,
//     },
//   ];

 

//   const onChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };
//   return (
//     <section className="inputs">
//       {inputs.map((input) => (
//         <FormInput
//           key={input.id}
//           {...input}
//           type={input.type}
//           value={values[input.name]}
//           values={values}
//           onChange={onChange}
//         />
//       ))}
//     </section>
//   );
// };

// export default AccountInformation;

// AccountInfo.js

// import React, { useState } from "react";
// import FormInput from "../FormInput";

// const AccountInformation = ({ onNext, onBack }) => {
//   const [values, setValues] = useState({
//     username: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const inputs = [
//     {
//       id: 1,
//       name: "username",
//       type: "text",
//       placeholder: "Username",
//       errorMessage:
//         "3-16 characters \nshouldn't include any special character!",
//       label: "Username:",
//       required: true,
//     },
//     {
//       id: 2,
//       name: "password",
//       type: "password",
//       placeholder: "Password",
//       errorMessage:
//         "8-20 characters\nat least 1 letter, 1 number and 1 special character!",
//       label: "Password:",
//       required: true,
//     },
//     {
//       id: 3,
//       name: "confirmPassword",
//       type: "password",
//       placeholder: "Confirm Password",
//       errorMessage: "Passwords don't match!",
//       label: "Confirm Password:",
//       required: true,
//     },
//   ];

//   const onChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };

//   const isFormValid = () => {
//     // Perform validation logic here
//     // Return true if the form is valid, otherwise false
//     return true;
//   };

//   const handleNextClick = () => {
//     if (isFormValid()) {
//       onNext(values);
//     }
//   };

//   return (
//     <section className="inputs">
//       {inputs.map((input) => (
//         <FormInput
//           key={input.id}
//           {...input}
//           type={input.type}
//           value={values[input.name]}
//           values={values}
//           onChange={onChange}
//         />
//       ))}
//       <div className="Buttons">
        
//         <button className="submitButton" onClick={handleNextClick}>
//           Next
//         </button>
//       </div>
//     </section>
//   );
// };

// export default AccountInformation;

// AccountInformation.js

// import React, { useState, useEffect } from "react";
// import FormInput from "../FormInput";

// const AccountInformation = ({ onNext }) => {
//   const [values, setValues] = useState({
//     username: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [validity, setValidity] = useState({
//     username: false,
//     password: false,
//     confirmPassword: false,
//   });

//   const inputs = [
//     {
//       id: 1,
//       name: "username",
//       type: "text",
//       placeholder: "Username",
//       errorMessage:
//         "3-16 characters \nshouldn't include any special character!",
//       label: "Username:",
//       required: true,
//     },
//     {
//       id: 2,
//       name: "password",
//       type: "password",
//       placeholder: "Password",
//       errorMessage:
//         "8-20 characters\nat least 1 letter, 1 number and 1 special character!",
//       label: "Password:",
//       required: true,
//     },
//     {
//       id: 3,
//       name: "confirmPassword",
//       type: "password",
//       placeholder: "Confirm Password",
//       errorMessage: "Passwords don't match!",
//       label: "Confirm Password:",
//       required: true,
//     },
//   ];

//   const validateInput = (name, value) => {
//     switch (name) {
//       case "username":
//         return /^[A-Za-z0-9]{3,16}$/.test(value);

//       case "password":
//         return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\\da-zA-Z]).{8,20}$/.test(value);

//       case "confirmPassword":
//         return value === values.password;

//       default:
//         return false;
//     }
//   };

//   useEffect(() => {
//     setValidity((prevValidity) => ({
//       ...prevValidity,
//       username: validateInput("username", values.username),
//       password: validateInput("password", values.password),
//       confirmPassword: validateInput("confirmPassword", values.confirmPassword),
//     }));
//   }, [values]);

//   const isFormValid = () => {
//     // Check if all fields are valid
//     return Object.values(validity).every((valid) => valid);
//   };

//   const handleNextClick = () => {
//     if (isFormValid()) {
//       onNext();
//     }
//   };

//   const onChange = (e) => {
//     const { name, value } = e.target;
//     setValues({ ...values, [name]: value });
//   };

//   return (
//     <section className="inputs">
//       {inputs.map((input) => (
//         <FormInput
//           key={input.id}
//           {...input}
//           type={input.type}
//           value={values[input.name]}
//           values={values}
//           onChange={onChange}
//         />
//       ))}
//       <button
//         className="submitButton"
//         type="button"
//         onClick={handleNextClick}
//         disabled={!isFormValid()}
//       >
//         Next
//       </button>
//     </section>
//   );
// };

// export default AccountInformation;

// import React, { useState, useEffect } from "react";
// import FormInput from "../FormInput";
 
// const AccountInformation = ({formData, setFormData,onNext}) => {
 
//   // const [values, setValues] = useState({
//   //   username: "",
//   //   password: "",
//   //   confirmPassword: "",
//   // });
 
//     const [validity, setValidity] = useState({
//       username: false,
//       password: false,
//       confirmPassword: false,
//     });
 
//   const inputs = [
//     {
//       id: 1,
//       name: "username",
//       type: "text",
//       placeholder: "Username",
//       errorMessage:
//         "3-16 characters \nshouldn't include any special character!",
//       label: "Username:",
//       required: true,
//     },
   
   
//     {
//       id: 2,
//       name: "password",
//       type: "password",
//       placeholder: "Password",
//       errorMessage:
//         "8-20 characters\nat least 1 letter, 1 number and 1 special character!",
//       label: "Password:",
//       required: true,
//     },
//     {
//       id: 3,
//       name: "confirmpassword",
//       type: "password",
//       placeholder: "Confirm Password",
//       errorMessage: "Passwords don't match!",
//       label: "Confirm Password:",
//       required: true,
//     },
//   ];
 
//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };
 
//   const validateInput = (name, value) => {
//     switch (name) {
//       case "username":
//         return /^[A-Za-z0-9]{3,16}$/.test(value);
 
//       case "password":
//         return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\\da-zA-Z]).{8,20}$/.test(
//           value
//         );
 
//       case "confirmPassword":
//         return value === value.password;
 
//       default:
//         return false;
//     }
//   };
 
//   useEffect(() => {
//     setValidity((prevValidity) => ({
//       ...prevValidity,
//       username: validateInput("username", formData.username),
//       password: validateInput("password", formData.password),
//       confirmPassword: validateInput("confirmPassword", formData.confirmPassword),
//     }));
//   }, [formData]);
 
//   const isFormValid = () => {
//     // Check if all fields are valid
//     return Object.values(validity).every((valid) => valid);
//   };
 
//   const handleNextClick = () => {
//     if (isFormValid()) {
//       onNext();
//     }
//   };
 
//   return (
//     <section className="inputs">
//       {inputs.map((input) => (
//         <FormInput
//           key={input.id}
//           {...input}
//           type={input.type}
//           value={formData[input.name]}
//           // values={values}
//           onChange={handleInputChange}
//         />
//       ))}
//       <button
//         className="submitButton"
//         type="button"
//         onClick={handleNextClick}
//         disabled={!isFormValid()}
//       >
//         Next
//       </button>
//     </section>
//   );
// };
 
// export default AccountInformation;
import React, { useState, useEffect } from "react";
import FormInput from "../FormInput";
 
const AccountInformation = ({ formData, setFormData, onNext }) => {
  // const [formData, setFormData] = useState({
  //   username: "",
  //   password: "",
  //   confirmPassword: "",
  //   });
 
  const [validity, setValidity] = useState({
    username: false,
    password: false,
    confirmPassword: false,
  });
 
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "3-16 characters \nshouldn't include any special character!",
      label: "Username:",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "8-20 characters\nat least 1 letter, 1 number and 1 special character!",
      label: "Password:",
      required: true,
    },
    {
      id: 3,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password:",
      required: true,
    },
  ];
 
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
 
  const validateInput = (name, value) => {
    switch (name) {
      case "username":
        return /^[A-Za-z0-9]{3,16}$/.test(value);
 
      case "password":
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\\da-zA-Z]).{8,20}$/.test(value);
 
      case "confirmPassword":
        return value  === formData.password;
 
      default:
        return false;
    }
  };
 
 
  useEffect(() => {
    if (formData) {
      setValidity((prevValidity) => ({
        ...prevValidity,
        username: validateInput("username", formData.username),
        password: validateInput("password", formData.password),
        confirmPassword: validateInput("confirmPassword", formData.confirmPassword),
      }));
    }
  }, [formData]);
 
 
  const isFormValid = () => {
    // Check if all fields are valid
    return Object.values(validity).every((valid) => valid);
  };
 
  const handleNextClick = () => {
    if (isFormValid()) {
      onNext();
    }
  };
 
  return (
    <section className="inputs">
      {inputs.map((input) => (
        <FormInput
          key={input.id}
          {...input}
          type={input.type}
          value={formData[input.name]}
          onChange={handleInputChange}
        />
      ))}
      <button
        className="submitButton"
        type="button"
        onClick={handleNextClick}
        disabled={!isFormValid()}
      >
        Next
      </button>
    </section>
  );
};
 
export default AccountInformation;
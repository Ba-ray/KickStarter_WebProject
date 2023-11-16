// import React, { useState } from "react";
import React from "react";
import FormInput from "../FormInput";

const AccountInformation = ({formData,setFormData}) => {
  
  // const [values, setValues] = useState({
  //   username: "",
  //   password: "",
  //   confirmPassword: "",
  // });


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
      name: "confirmpassword",
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
 

  // const onChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  return (
    <section className="inputs">
      {inputs.map((input) => (
        <FormInput
          key={input.id}
          {...input}
          value={formData[input.name]}
          // values={values}
          onChange={handleInputChange}
        />
      ))}
    </section>
  );
};

export default AccountInformation;

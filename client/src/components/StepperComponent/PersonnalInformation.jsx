import React, { useState } from "react";
import FormInput from "../FormInput";

const PersonnalInformation = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    age:"",
    email: "",
    phoneNumber: "",
    aboutMe: "",
  });

  const inputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      errorMessage:
        "3-16 characters \nshouldn't include any special character!",
      label: "First Name",
      required: true,
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      errorMessage:
        "3-16 characters \nshouldn't include any special character!",
      label: "Last Name:",
      required: true,
    },
    {
      id: 3,
      name: "age",
      type: "text",
      placeholder: "Age",
      label: "Age:",
      errorMessage: "You should be an adult",
      required: true,
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email address:",
      required: true,
    },

    {
      id: 5,
      name: "phoneNumber",
      type: "tel",
      placeholder: "Phone Number",
      label: "Phone Number:",
      required: true,
    },
    {
      id: 6,
      name: "aboutMe",
      type: "text",
      placeholder: "",
      errorMessage:
        "3-16 characters \nshouldn't include any special character!",
      label: "About Me:",
      required: false,
      isBig: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <section className="inputs">
      {inputs.map((input) => (
        <FormInput
          key={input.id}
          {...input}
          value={values[input.name]}
          values={values}
          onChange={onChange}
          isBig={input.isBig}
         
        />
      ))}
    </section>
  );
};

export default PersonnalInformation;

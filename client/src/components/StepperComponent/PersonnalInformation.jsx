

  import React, { useState, useEffect } from "react";
  import FormInput from "../FormInput";
  
  const PersonnalInformation = ({ formData, setFormData, onNext, onBack }) => {
    const [values, setValues] = useState({
      firstname: "",
      lastname: "",
      age_range: "",
      email: "",
      phone: "",
      aboutMe: "",
    });
  
    const [errors, setErrors] = useState({
      firstname: "",
      lastname: "",
      age_range: "",
      email: "",
      phone: "",
      aboutMe: "",
    });
  
    const inputs = [
      {
        id: 1,
        name: "firstname",
        type: "text",
        placeholder: "First Name",
        errorMessage:
          "3-16 characters \nshouldn't include any special character!",
        label: "First Name:",
        required: true,
      },
      {
        id: 2,
        name: "lastname",
        type: "text",
        placeholder: "Last Name",
        errorMessage:
          "3-16 characters \nshouldn't include any special character!",
        label: "Last Name:",
        required: true,
      },
      {
        id: 3,
        name: "age_range",
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
        name: "phone",
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
  
    const validateInput = (name, value) => {
      switch (name) {
        case "firstname":
        case "lastname":
          return /^[A-Za-z0-9]{3,16}$/.test(value);
  
        case "age_range":
          return Number(value) >= 18;
  
        case "email":
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  
        case "phone":
          return true; // You may add validation for phone numbers here
  
        case "aboutMe":
          return true; // You may add validation for aboutMe here
  
        default:
          return true; // Default to true for other fields
      }
    };
  
    const onChange = (e) => {
      const { name, value } = e.target;
      const inputErrors = value.trim() === "" ? "This field is required" : validateInput(name, value) ? "" : inputs.find((input) => input.name === name).errorMessage;
      setValues({ ...values, [name]: value });
      setErrors({
        ...errors,
        [name]: inputErrors,
      });
      setFormData({ ...formData, [name]: value });
    };
  
    const isFormValid = () => {
      // Check if all required fields have valid inputs
      return inputs.filter((input) => input.required).every((input) => values[input.name].trim() !== "" && errors[input.name] === "");
    };
  
    return (
      <section className="inputs">
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
            isBig={input.isBig}
            errorMessage={errors[input.name]}
          />
        ))}
        <div className="Buttons">
          <button className="gradient-button Back" onClick={onBack}>
            Back
          </button>
          <button
            className="gradient-button"
            type="button"
            onClick={onNext}
            disabled={!isFormValid()}
          >
            Next
          </button>
        </div>
      </section>
    );
  };
  
  export default PersonnalInformation;
  
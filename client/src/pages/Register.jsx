import { useState } from "react";
import "../styles/Register.css";


import Slider from "../components/Slider";
import SocialNetwork from "../components/SocialNetwork.jsx";
import Stepper from "../components/StepperComponent/Stepper";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  
  return (
    <main className="container">
      <Slider />
      <form className="formReg" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <SocialNetwork />
        <p className="text">or you can fill the form:</p>
        <Stepper formData={formData} setFormData={setFormData}/>
        
      </form>
    </main>
  );
};

export default Register;
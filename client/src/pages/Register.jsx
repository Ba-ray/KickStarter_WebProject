import { useState } from "react";
import "../styles/Register.css";


import Slider from "../components/Slider";
import SocialNetwork from "../components/SocialNetwork.jsx";
import Stepper from "../components/StepperComponent/Stepper";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate=useNavigate();
const [formData, setFormData] = useState({
  username: "",
  password: "",
  confirmpassword: "",
  email: "",
  firstname: "",
  lastname: "",
  age_range: "",
  phone: "",
});

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // Send registration data to the server
    const response = await axios.post(
      "http://localhost:8080/api/auth/register",
      formData
    );

    console.log(formData);

    // Handle the response (optional)
    console.log("Registration response:", response.data);

    // Redirect to the home page or another page if needed
    // For example, using React Router:
    // history.push('/home');
  } catch (error) {
    console.error("Error during registration:", error);
    // Handle error, show a message, etc.
  }
};
  
  return (
    <main className="register-container">
      <Slider />
      <form className="formReg" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <SocialNetwork />
        <p className="text">or you can fill the form:</p>
        <Stepper formData={formData} setFormData={setFormData} />
        <button
          className="italic-text-button"
          type="button"
          onClick={() => {
            navigate("/signin");
          }}
        >
          already have an account?
        </button>
      </form>
    </main>
  );
};

export default Register;
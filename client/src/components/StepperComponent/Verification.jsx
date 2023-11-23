
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Verification.css";
import axios from "axios";

const Verification = ({ formData,onBack }) => {
  console.log(formData);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const navigate = useNavigate();

  const handleOtpChange = (e, index) => {
    const newValue = e.target.value;
    if (/^\d+$/.test(newValue) || newValue === "") {
      const newOtp = [...otp];
      newOtp[index] = newValue;
      setOtp(newOtp);
      if (newValue !== "" && index < 3) {
        document.getElementById(`otp-input${index + 2}`).focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const enteredOtp = otp.join("");
    // console.log("Entered OTP:", enteredOtp);
    e.preventDefault();
    try {
      // Send registration data to the server
      const response = await axios.post("http://localhost:8080/api/auth/register",formData);

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
    navigate("/");
  };

  return (
    <div className="verification-container">
      <form className="otp-Form" onSubmit={handleSubmit}>
        <span className="mainHeading">Enter OTP</span>
        <p className="otpSubheading">
          We have sent a verification code to your email address:
        </p>
        <div className="inputContainer">
          {otp.map((value, index) => (
            <input
              key={index}
              required
              maxLength="1"
              type="text"
              className="otp-input"
              id={`otp-input${index + 1}`}
              value={value}
              onChange={(e) => handleOtpChange(e, index)}
            />
          ))}
        </div>
        <p className="resendNote">
          Didn't receive the code?
          <button className="resendBtn">Resend Code</button>
        </p>
      </form>
      <div className="buttonContainer" style={{width:"100%",display:"flex",justifyContent:"space-evenly",}}>
        <button className="gradient-button" type="button" onClick={onBack} style={{marginLeft:0,}}>
          Back
        </button>
        <button className="gradient-button" type="submit" onClick={handleSubmit} style={{marginRight:0,}}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Verification;

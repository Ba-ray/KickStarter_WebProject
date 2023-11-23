
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
    try {

      const response = await axios.post("http://localhost:8080/api/auth/register",formData);

      console.log(formData);

      console.log("Registration response:", response.data);
      navigate("/signin");

    } catch (error) {
      console.error("Error during registration:", error);
      let messageError = (error.response?.data?.message || "An error occurred.");
      alert(messageError);
    }
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

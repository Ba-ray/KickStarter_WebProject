// import React, { useState } from "react";
// import "../../styles/Verification.css"; // Import your CSS styles

// const Verification = () => {
//   const [otp, setOtp] = useState(["", "", "", ""]); // Initialize an array to store OTP values

//   const handleOtpChange = (e, index) => {
//     const newValue = e.target.value;
//     if (/^\d+$/.test(newValue) || newValue === "") {
//       // Only allow numeric values or empty string
//       const newOtp = [...otp];
//       newOtp[index] = newValue;
//       setOtp(newOtp);
//       if (newValue !== "" && index < 3) {
//         // Move to the next input field if a digit is entered
//         document.getElementById(`otp-input${index + 2}`).focus();
//       }
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle OTP verification logic here
//     const enteredOtp = otp.join("");
//     console.log("Entered OTP:", enteredOtp);
//     // You can send the entered OTP to the server for verification
//   };

//   return (
//     <form className="otp-Form" onSubmit={handleSubmit}>
//       <span className="mainHeading">Enter OTP</span>
//       <p className="otpSubheading">
//         We have sent a verification code to your email address:
//       </p>
//       <div className="inputContainer">
//         {otp.map((value, index) => (
//           <input
//             key={index}
//             required
//             maxLength="1"
//             type="text"
//             className="otp-input"
//             id={`otp-input${index + 1}`}
//             value={value}
//             onChange={(e) => handleOtpChange(e, index)}
//           />
//         ))}
//       </div>
//       <button className="verifyButton" type="submit">
//         Verify
//       </button>
//       <button className="exitBtn">×</button>
//       <p className="resendNote">
//         Didn't receive the code?
//         <button className="resendBtn">Resend Code</button>
//       </p>
//     </form>
//   );
// };

// export default Verification;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Verification.css";

const Verification = ({ onBack }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    console.log("Entered OTP:", enteredOtp);
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
        <button className="submitButton" type="button" onClick={onBack} style={{marginLeft:0,}}>
          Back
        </button>
        <button className="submitButton" type="submit" onClick={handleSubmit} style={{marginRight:0,}}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Verification;

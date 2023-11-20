// import React, { useState } from "react";
// import "../../styles/Stepper.css"; 
// import AccountInformation from "./AccountInfo";
// import { useNavigate } from "react-router-dom";
// import PersonnalInformation from "./PersonnalInformation";
// import Verification from "./Verification";
// import userImage from "../../images/user.png";
// import userOnImage from "../../images/userOn.png";
// import detailsImage from "../../images/details.png";
// import detailsOnImage from "../../images/detailsOn.png";
// import faceImage from "../../images/face.png";
// import faceOnImage from "../../images/faceOn.png";

// const Stepper = () => {
//   const navigate = useNavigate();
  
//    const steps = [
//      {
//        label: "Step 1",
//        iconOff: userImage,
//        iconOn: userOnImage,
//      },
//      {
//        label: "Step 2",
//        iconOff: detailsImage,
//        iconOn: detailsOnImage,
//      },
//      {
//        label: "Step 3",
//        iconOff: faceImage,
//        iconOn: faceOnImage,
//      },
//    ];

//   const [activeStep, setActiveStep] = useState(0);

//   const handleStepClick = (stepIndex) => {
//     setActiveStep(stepIndex);
//   };

  

//   const handleClick = () => {
//     navigate("/");
//   };

//   return (
//     <div className="Steppercontainer">
//       <div className="tabs">
//         {steps.map((step, index) => (
//           <React.Fragment key={index}>
//             <input
//               type="checkbox"
//               id={`radio-${index + 1}`}
//               name="tabs"
//               checked={activeStep >= index}
//               onChange={() => handleStepClick(index)}
//               disabled={activeStep < index}
//             />
//             <div className="tabContent">
//               <label
//                 className={`tab ${activeStep < index ? "disabled" : ""}`}
//                 htmlFor={`checkbox-${index + 1}`}
//               >
//                 {step.label}
//               </label>
//               <div className="StepperIcon">
//                 <img
//                   src={activeStep >= index ? step.iconOn : step.iconOff}
//                   alt=""
//                   onClick={
//                     activeStep < index ? null : () => handleStepClick(index)
//                   }
//                 />
//               </div>
//             </div>
//           </React.Fragment>
//         ))}
//         <span
//           className="glider"
//           style={{
//             width: `${(activeStep + 1) * 33}%`, // Adjust the width based on the active step
//           }}
//         ></span>
//       </div>
//       {activeStep === 0 && (
//         <section className="inputs">
//           <h1 className="Header">Account Information</h1>
//           <AccountInformation />
//         </section>
//       )}
//       {activeStep === 1 && (
//         <section className="inputs">
//           <h1 className="Header">Personnal Information</h1>
//           <PersonnalInformation />
//         </section>
//       )}

//       {activeStep === 2 && (
//         <section className="inputs">
//           <h1 className="Header">Verification</h1>
//           <Verification />
//         </section>
//       )}
//       <div className="Buttons">
//         <button
//           className={`Button ${activeStep === 0 ? "signIn" : "Back"}`}
//           onClick={
//             activeStep === 0
//               ? handleClick
//               : () => handleStepClick(activeStep - 1)
//           }
//         >
//           {activeStep === 0 ? "Already have an account?" : "Back"}
//         </button>
//         <button
//           className="submitButton"
//           type="submit"
//           onClick={
//             activeStep === 2
//               ? handleClick
//               : () => handleStepClick(activeStep + 1)
//           }
//         >
//           {activeStep === steps.length - 1 ? "Submit" : "Next"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Stepper;




// Stepper.js

import React, { useState } from "react";
import "../../styles/Stepper.css"; 
import AccountInformation from "./AccountInfo";
import PersonnalInformation from "./PersonnalInformation";
import Verification from "./Verification";
import { useNavigate } from "react-router-dom";
import userImage from "../../images/user.png";
import userOnImage from "../../images/userOn.png";
import detailsImage from "../../images/details.png";
import detailsOnImage from "../../images/detailsOn.png";
import faceImage from "../../images/face.png";
import faceOnImage from "../../images/faceOn.png";

const Stepper = () => {
  const navigate = useNavigate();

  const steps = [
    {
      label: "Step 1",
      iconOff: userImage,
      iconOn: userOnImage,
    },
    {
      label: "Step 2",
      iconOff: detailsImage,
      iconOn: detailsOnImage,
    },
    {
      label: "Step 3",
      iconOff: faceImage,
      iconOn: faceOnImage,
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (stepIndex) => {
    setActiveStep(stepIndex);
  };

  const handleClick = () => {
    navigate("/");
  };

  const handleNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="Steppercontainer">
      <div className="tabs">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <input
              type="checkbox"
              id={`radio-${index + 1}`}
              name="tabs"
              checked={activeStep >= index}
              onChange={() => handleStepClick(index)}
              disabled={activeStep < index}
            />
            <div className="tabContent">
              <label
                className={`tab ${activeStep < index ? "disabled" : ""}`}
                htmlFor={`checkbox-${index + 1}`}
              >
                {step.label}
              </label>
              <div className="StepperIcon">
                <img
                  src={activeStep >= index ? step.iconOn : step.iconOff}
                  alt=""
                  onClick={
                    activeStep < index ? null : () => handleStepClick(index)
                  }
                />
              </div>
            </div>
          </React.Fragment>
        ))}
        <span
          className="glider"
          style={{
            width: `${(activeStep + 1) * 33}%`,
          }}
        ></span>
      </div>

      <section className="inputs">
        <h1 className="Header">{steps[activeStep].label}</h1>
        {activeStep === 0 && (
          <AccountInformation onNext={handleNextStep} onBack={handleBack} />
        )}
        {activeStep === 1 && (
          <PersonnalInformation onNext={handleNextStep} onBack={handleBack} />
        )}
        {activeStep === 2 && (
          <Verification onNext={handleNextStep} onBack={handleBack} />
        )}
      </section>

      <div className="Buttons">
        <button
          className={`Button ${activeStep === 0 ? "signIn" : "Back"}`}
          onClick={activeStep === 0 ? handleClick : handleBack}
        >
          {activeStep === 0 ? "Already have an account?" : "Back"}
        </button>
        {/* <button
          className="submitButton"
          type="submit"
          onClick={handleNextStep}
          disabled={activeStep === 0} // Disable "Next" button for Step 1
        >
          {activeStep === steps.length - 1 ? "Submit" : "Next"}
        </button> */}
      </div>
    </div>
  );
};

export default Stepper;

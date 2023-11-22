import React, { useState } from "react";
import "../styles/SignIn.css";
import FormInput from "../components/FormInput";
import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider";
import SocialNetwork from "../components/SocialNetwork.jsx";
import axios from "axios";

// const SignIn = () => {
//   const navigate = useNavigate();
//   const [values, setValues] = useState({
//     username: "",
//     password: "",
//   });

//   const onChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };

//   const handleClick = () => {
//     navigate("/register");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//      navigate("/");
//   };


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
//   ];

//   return (
//     <main className="containerSignIn">
//       <section className="formSignInContainer">
//         <form className="formSignIn" onSubmit={handleSubmit}>
//           <h1>Sign In</h1>
//           <section className="signInInputs">
//             {inputs.map((input) => (
//               <FormInput
//                 key={input.id}
//                 {...input}
//                 value={values[input.name]}
//                 onChange={onChange}
//               />
//             ))}
//           </section>

//           <SocialNetwork className="SocialNetwork" />
//           <div className="ButtonContainer">
//             <button className="BackButton" onClick={handleClick}>
//               Not A Member Yet?
//             </button>
//             <button className="loginButton" onClick={handleSubmit}>
//               Submit
//             </button>
//           </div>
//         </form>
//       </section>
//       {/* <div className="SliderFormContainer"> */}
//       <Slider />
//       {/* </div> */}
//     </main>
//   );
// };

// export default SignIn;
// ... (other import statements)

const SignIn = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    navigate("/register");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send login data to the server
      const response = await axios.post('http://localhost:8080/api/auth/login', values);

      // Handle the response
      console.log('Login response:', response.data);
      
      // Save the token into the local storage
      localStorage.setItem('token', response.data.token);
      
      // Redirect to the home page or any other page as needed
      navigate("/");
    } catch (error) {
      console.error('Error during login:', error);
    }

    navigate("/");

  };

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
  ];

  const isFormValid = inputs.every((input) => values[input.name] && values[input.name].length > 0);
  const isPasswordValid = values.password && values.password.length > 0;

  return (
    <main className="containerSignIn">
      <section className="formSignInContainer">
        <form className="formSignIn" onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <section className="signInInputs">
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
          </section>

          <SocialNetwork className="SocialNetwork" />
          <div className="ButtonContainer">
            <button className="BackButton" onClick={handleClick}>
              Not A Member Yet?
            </button>
            <button className="loginButton" onClick={handleSubmit} disabled={!isFormValid || !isPasswordValid}>
              Submit
            </button>
          </div>
        </form>
      </section>
      {/* <div className="SliderFormContainer"> */}
      <Slider />
      {/* </div> */}
    </main>
  );
};

export default SignIn;

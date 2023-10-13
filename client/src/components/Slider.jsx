import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Slider.css";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";

const Slider = () => {

 
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("");

   useEffect(() => {
     if (window.location.pathname === "/register") {
       setCurrentPage("register");
     } else {
       setCurrentPage("signin");
     }
   }, []);

  const slideToSignIn = () => {
    if (currentPage !== "signin") {
      navigate("/");
      setCurrentPage("signin");
    }
  };

  const slideToRegister = () => {
    if (currentPage !== "register") {
      navigate("/register");
      setCurrentPage("register");
      
    }
  };

  return (
    <AnimatePresence mode="wait">
      {(currentPage === "signin") &&
      
        <motion.div
          key="signin"
          className="slide signin-slide"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="SliderContainer">
            <h1>Not a Member Yet?</h1>
            <p className="text">We're very glad to welcome you</p>
            <button className="swapButton" onClick={slideToRegister}>
              Sign In
            </button>
          </div>
        </motion.div>
      }
       else {(currentPage === "register") &&
      
      <motion.div
        key="register"
        className="slide register-slide"
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100%" }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="SliderContainer">
          <h1>One Of Us?</h1>
          <p className="text">If you already have an account, just sign in</p>
          <button className="swapButton" onClick={slideToSignIn}>
            Sign Up
          </button>
        </div>
      </motion.div>
      }
    </AnimatePresence>
  );
};

export default Slider;

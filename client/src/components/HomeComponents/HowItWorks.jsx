import React, { useEffect, useState, useRef } from "react";
import "../../styles/HowItWorks.css";
import { motion, useAnimation } from "framer-motion";

import businessman from "../../images/businessman.jpg";
import browseProjectsIcon from "../../images/arrow.png";
import investIcon from "../../images/investment.png";
import collaborateIcon from "../../images/collaborate.png";
import transformIcon from "../../images/magic-wand.png";
import secureFundIcon from "../../images/fund.png";

const steps = [
  {
    title: "Explore Projects",
    description: "Browse a diverse range of projects from talented creators",
    icon: browseProjectsIcon,
  },
  {
    title: "Find Investment Opportunities",
    description:
      "Simply scroll through projects to find the ones that match your investment interests.",
    icon: investIcon,
  },
  {
    title: "Collaborate and Innovate",
    description:
      "Work with project starters to bring your skills and expertise to exciting projects.",
    icon: collaborateIcon,
  },
  {
    title: "Secure Funding",
    description:
      "If you're a project owner, secure the capital needed to bring your vision to life.",
    icon: secureFundIcon,
  },
  {
    title: "Transform Ideas into Reality",
    description:
      "We can turn your ideas into successful projects through collaboration and investment.",
    icon: transformIcon,
  },
];

const HowItWorks = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const stepVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5, // Add a delay of 0.5 seconds for each step
      },
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        clearInterval(interval);
      }
    }, 500); // Adjust the interval time as needed

    return () => {
      clearInterval(interval);
    };
  }, [currentStep]);

  return (
    <section className="how-it-works-bigContainer">
      <div className="how-it-works-container">
        <div className="how-it-works-steps-container">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="how-it-works-step"
              variants={stepVariants}
              initial={index <= currentStep ? "visible" : "hidden"}
              animate={index <= currentStep ? "visible" : "hidden"}
            >
              <div className="step-icon">
                <img src={step.icon} alt={step.title} />
              </div>
              <div className="how-it-works-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="how-it-works-imageContainer">
          <img
            src={businessman}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

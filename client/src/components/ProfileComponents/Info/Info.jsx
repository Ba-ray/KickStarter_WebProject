import React, { useEffect } from "react";
import "./Info.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import imageSrc from "../../../images/img1.png";

const Info = ({ candidateInfo }) => {
  useEffect(() => {

    const userSection = document.querySelector(".user-section");
    const aboutMeSection = document.querySelector(".about-me-section");

    setTimeout(() => {
      userSection.classList.add("fade-in");
      aboutMeSection.classList.add("fade-in")
    }, 500);
  }, []);

  return (
    <section id="info">
      <div className="user-info-container">
      <div className="user-section">
        <div className="image-section">
          <img alt="User Avatar" className="avatar" src={imageSrc} />
        </div>
        <div className="info-section">
          <div className="additional-info">
            <ul>
              <li><FontAwesomeIcon icon={faCalendar} size="sm" style={{color: "#3a695d",marginRight:"4px"}} /><strong>Availability:</strong> {candidateInfo.availability}</li>
              <li><FontAwesomeIcon icon={faBriefcase} size="sm" style={{color: "#3a695d",marginRight:"4px"}} /><strong>Experience:</strong> {candidateInfo.experience}</li>
              <li><FontAwesomeIcon icon={faPerson} size="lg" style={{color: "#3a695d",marginRight:"4px" }} /><strong>Age:</strong> {candidateInfo.age}</li>
              <li><FontAwesomeIcon icon={faLocationDot} size="sm" style={{color: "#3a695d",marginRight:"4px" }}/><strong>Location:</strong> {candidateInfo.location}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="about-me-section">
        <h2>About Me</h2>
        <p>
        Welcome to my profile! I'm passionate about ... and dedicated to ... With 10 years of experience,
        I've had the opportunity to work on exciting projects that have shaped my skills.
        My journey in the field has been a constant learning process, and I'm always eager to take on new challenges.
        Let's connect and explore how we can collaborate to achieve great things together!</p>
      </div>  
      </div>  
    </section>
  );
};

export default Info;

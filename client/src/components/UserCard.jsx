import React, { useState } from "react";
import "../styles/UserCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelope,
  faPhone,
  faAnglesUp,
} from "@fortawesome/free-solid-svg-icons";

const UserCard = ({name}) => {
 
  const sections = [
    {
      id: "about",
      title: "ABOUT",
      content: [
        {
          availability: "available",
          Location: "Beirut,Lebanon",
          experience_years: 6,
          time_rate: "44$/hour",
        },
      ],
    },
    {
      id: "experience",
      title: "WORK EXPERIENCE",
      content: [
        {
          year: 2014,
          title: "Front-end Developer",
          company: "JotForm",
          description: "Disrupt stumptown retro everyday carry unicorn.",
        },
        {
          year: 2016,
          title: "UI Developer",
          company: "GitHub",
          description: "Developed new conversion funnels and disrupt.",
        },
        {
          year: 2018,
          title: "Illustrator",
          company: "Google",
          description: "Onboarding illustrations for App.",
        },
        {
          year: 2020,
          title: "Full-Stack Developer",
          company: "CodePen",
          description: "Responsible for the encompassing brand experience.",
        },
      ],
    },
    {
      id: "contact",
      title: "CONTACT",
      content: [
        { icon: faHome, text: "Jalan Mandor Naiman, Bogor, 16710" },
        { icon: faPhone, text: "(+62) 8569478xxxx" },
        { icon: faEnvelope, text: "contact@seotechman.com" },
      ],
    },
  ];

const [activeSection, setActiveSection] = useState(null);

const handleButtonClick = (targetSection) => {
  setActiveSection(targetSection);
};

return (
  <div className="card">
    <div className="card-header">
      <img
        className="card-avatar"
        src="https://2.bp.blogspot.com/-b_lqelKRB4k/Xj-rBvoSxUI/AAAAAAAACHg/G19lzRiO6qYQmquCqut44r1cMdF53HQ0QCLcBGAsYHQ/s1600/anime3.png"
        alt="avatar"
      />
      <h1 className="card-fullname">{name}</h1>
      <h2 className="card-jobtitle">UI Developer / Blogger</h2>
      <button className="view-profile-button"> View profile</button>

      <button
        className="arrow-up-button"
        onClick={() => handleButtonClick(null)}
      >
        <FontAwesomeIcon
          icon={faAnglesUp}
          color="#80e3b7"
          style={{ width: "100%" }}
        />
      </button>
    </div>

    <div className="card-main">
      {sections.map((section) => (
        <div
          key={section.id}
          className={`card-section ${
            activeSection === section.id ? "is-active" : ""
          }`}
          id={section.id}
        >
          <div className="card-content">
            <div className="card-subtitle">{section.title}</div>
            {section.id === "contact" ? (
              <div className="card-contact-wrapper">
                {section.content.map((contactItem) => (
                  <div key={contactItem.text} className="card-contact">
                    <FontAwesomeIcon icon={contactItem.icon} />
                    {contactItem.text}
                  </div>
                ))}
                <button className="contact-me">WORK TOGETHER</button>
              </div>
            ) : section.id === "experience" ? (
              <div className="card-timeline">
                {section.content.map((item) => (
                  <div
                    key={item.year}
                    className="card-item"
                    data-year={item.year}
                  >
                    <div className="card-item-title">
                      {item.title} at <span>{item.company}</span>
                    </div>
                    <div className="card-item-desc">{item.description}</div>
                  </div>
                ))}
              </div>
            ) : section.id === "about" ? (
              <p className="card-desc">
                <strong>Availability:</strong> {section.content[0].availability}
                <br />
                <strong>Location:</strong> {section.content[0].Location}
                <br />
                <strong>Experience Years:</strong>{" "}
                {section.content[0].experience_years}
                <br />
                <strong>Time Rate:</strong> {section.content[0].time_rate}
              </p>
            ) : null}
          </div>
        </div>
      ))}
      <div className="card-buttons">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleButtonClick(section.id)}
            className={activeSection === section.id ? "is-active" : ""}
          >
            {section.title}
          </button>
        ))}
      </div>
    </div>
  </div>
);
};

export default UserCard;

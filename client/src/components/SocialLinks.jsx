import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faGoogle,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/SocialLinks.css"


const SocialLinks = () => {
  // Define an array of social links
  const socialLinks = [
    { icon: faInstagram, className: "containerOne" },
    { icon: faXTwitter, className: "containerTwo" },
    { icon: faLinkedin, className: "containerThree" },
    { icon: faWhatsapp, className: "containerFour" },
    { icon: faGoogle, className: "containerFive" },
  ];

  return (
    <div className="social-card">
      {socialLinks.map((link, index) => (
        <a key={index} href="#" className={`socialContainer ${link.className}`}>
          <FontAwesomeIcon
            className="contact-social-icon"
            icon={link.icon}
            size="2x"
            color="grey"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks
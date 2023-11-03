import React from "react";
import "../../styles/Contact.css"; 
import FormInput from "../FormInput";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,

  faLinkedin,
  faWhatsapp,
  faGoogle,
  faXTwitter
} from "@fortawesome/free-brands-svg-icons";


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
          <FontAwesomeIcon className="contact-social-icon"icon={link.icon} size="2x" color="grey"/>
        </a>
      ))}
    </div>
  );
};




const Contact = () => {
  const [values, setValues] = useState({
    Name: "",
    Email: "",
    Message: "",
  });
  const inputsContact = [
    {
      id: 0,
      name: "Name",
      type: "text",
      placeholder: "Your name",
      label: "Your name:",
    },
    {
      id: 1,
      name: "Email",
      type: "email",
      placeholder: "Your e-mail",
      label: "Your e-mail:",
    },
    {
      id: 3,
      name: "Message",
      type: "textarea",
      placeholder: "Your message",
      label: "Your message:",
      isBig: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <section className="contact">
      <SocialLinks />
      <div className="contact-content">
        <p>
          If you have any questions or need assistance, feel free to reach out
          to our team. We're here to help!
        </p>
      </div>

      {/* <div className="contact-form">
        <form>
          {inputsContact.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              values={values}
              onChange={onChange}
            />
          ))}

          <button className="SendMessageButton" type="submit">
            Send Message
          </button>
        </form>
      </div> */}
    </section>
  );
};

export default Contact;

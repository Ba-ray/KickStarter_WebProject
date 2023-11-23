import React from "react";
import "../../styles/Contact.css"; 
import { useState } from "react";
import SocialLinks from "../SocialLinks";

const Contact = () => {
  return (
    <section className="contact">
      <SocialLinks />
      <div className="contact-content">
        <p>
          If you have any questions or need assistance, feel free to reach out
          to our team. We're here to help!
        </p>
      </div>
    </section>
  );
};

export default Contact;

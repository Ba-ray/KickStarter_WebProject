import React from 'react'
import "./SocialNetwork.css"


const SocialNetwork = () => {
    
     const socials = [
       require("../images/facebook.jpg"), // Use require() to reference images
       require("../images/linkedin.jpg"),
       require("../images/google.jpg"),
     ];

  return (
    <section className="social">
      <p className="text">Connect with Social Networks</p>
      <div className="social_container">
        {socials.map((social, index) => (
          <div className="social-button" key={index}>
            <img src={social} alt="Social Network" className='icon' />
          </div>
        ))}
      </div>
    </section>
  );
}

export default SocialNetwork
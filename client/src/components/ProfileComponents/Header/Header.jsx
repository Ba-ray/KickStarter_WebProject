import React, { useState, useEffect } from "react";
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const candidateName = "John Doe"; // Replace with the actual candidate's name

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      setIsScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="linkhome"><Link to="/">Go back to Home</Link></div>
      <div className="image"><img src="" alt=""></img></div>
      <div className="info">
        <div className="candidate-name">{candidateName}</div>
      </div>
      <div className="links">
        <a href="#info" className="smoothScroll">About Me</a>
        <a href="#experience" className="smoothScroll">Experience</a>
        <a href="#experience" className="smoothScroll">Education</a>
        <a href="#contact" className="smoothScroll">Contact</a>
      </div>
    </nav>
  );
};

export default Header;

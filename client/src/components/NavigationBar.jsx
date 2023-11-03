import React, { useState } from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";
import "../styles/NavBar.css";



const NavigationBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();
   const location = useLocation();

  const handleClick = () => {
    navigate("/register");
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

   const isHomePage = location.pathname === "/";

  return (
    <nav className="navbar">
      {/* <SearchBar /> */}

      <ul className="direct-links">
        <div className="page-links">
          <li>
            <Link to="/HowItWorks">How it works?</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/" className={isHomePage ? "active-link" : ""}>
              Home
            </Link>
          </li>
        </div>
        <div className="Account-links">
          <li>
            <Link to="/register" className="custom-link">
              Create a project
            </Link>
          </li>
          <li>
            <Link to="/signin" className="custom-link">
              Sign In
            </Link>
          </li>
          <li>
            <Link to="/register" className="custom-link">
              Register
            </Link>
          </li>
        </div>
      </ul>
      {isNavOpen ? (
        <div className="nav-menu open" onClick={closeNav}>
          <ul className="nav-menu-links">
            <li>
              <Link to="/HowItWorks">How it works?</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/register" className="custom-link">
                Create a project
              </Link>
            </li>
            <li>
              <Link to="/signin" className="custom-link">
                Sign In
              </Link>
            </li>
            <li>
              <Link to="/register" className="custom-link">
                Register
              </Link>
            </li>
          </ul>
        </div>
      ) : null}

      <input type="checkbox" id="checkbox" onClick={toggleNav} />
      <label for="checkbox" class="toggle">
        <div class="bar bar--top"></div>
        <div class="bar bar--middle"></div>
        <div class="bar bar--bottom"></div>
      </label>
      {/* <button onClick={handleClick} className="RegisterButton">
          <img
            src={userImage}
            style={{ width: "24px", height: "24px" }}
            alt="User Image"
          />
        </button> */}
    </nav>
  );
};

export default NavigationBar;

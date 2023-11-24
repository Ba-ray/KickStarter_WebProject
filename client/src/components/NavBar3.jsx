import React, { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Offcanvas,
  FormControl,
  NavDropdown
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen, faSearch, faUserTie } from "@fortawesome/free-solid-svg-icons";
import "../styles/NavBar3.css"; // Import your CSS file
import SocialLinks from "./SocialLinks";
import { NavLink } from "react-router-dom";

const NavBar3 = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navigate= useNavigate();
  const [token,setToken] = useState(null);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      alert("Searching for: " + searchKeyword);
      setSearchKeyword(""); 
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    console.log(storedToken);
    setToken(storedToken || null); 
  }, []);

  const handleClick=()=>{
    navigate("/signin")
  }

    // Function to handle logout
    const handleLogout = () => {
      localStorage.removeItem("token"); 

      navigate("/signin");
    };

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary mb-3 custom-navbar"
        variant="dark"
      >
        <Container fluid>
          <Navbar.Brand href="#" className="navbar-title">
            iDream
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarResponsive"
            onClick={() => setShowOffcanvas(!showOffcanvas)}
          />
          <Navbar.Collapse id="navbarResponsive">
            <Nav className="me-auto">
              <NavLink className="nav-link" to="/" activeClassName="active">
                Home
              </NavLink>
              <NavLink
                className="nav-link"
                to="/Services"
                activeClassName="active"
              >
                Our Services
              </NavLink>
              <NavLink
                to={token ? "/formproject" : "/signin"}
                className="nav-link"
                activeClassName="active"
              >
                Create Project
              </NavLink>
            </Nav>
            <Form
              className={`d-flex search-input ${
                isSearchFocused ? "focused" : ""
              }`}
            >
              <FormControl
                type="search"
                placeholder="projects,users,..."
                className="mr-2 mt-2 mb-2 search-bar"
                aria-label="Search"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                onKeyPress={handleSearch}
              />
              {token ? (
                <NavDropdown
                  className="dropdown"
                  title={<FontAwesomeIcon icon={faUserTie} size={50} />}
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="./profile">Profile</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>
                    LogOut
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Button
                  variant="outline-success"
                  className="join-now-button"
                  onClick={handleClick}
                >
                  Join Now
                </Button>
              )}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>iDream</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <NavLink
              className="offcanvas-nav-link"
              to="/"
              activeClassName="active"
            >
              Home
            </NavLink>
            <NavLink
              className="offcanvas-nav-link"
              to="/Services"
              activeClassName="active"
            >
              Our Services
            </NavLink>
            <NavLink
              to={token ? "/formproject" : "/signin"}
              className="offcanvas-nav-link"
              activeClassName="active"
            >
              Create Project
            </NavLink>
            <Form
              className={`d-flex offcanvas-search-input ${
                isSearchFocused ? "focused" : ""
              }`}
            >
              <FormControl
                type="search"
                placeholder="projects,users..."
                className="mr-2 offcanva-search-bar"
                aria-label="Search"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                onKeyPress={handleSearch}
              />
              <Button
                variant="outline-success"
                className="offcanva-search-button"
              >
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </Form>
            {token ? (
              <Nav className="flex-column" style={{ marginTop: "25%" }}>
                <NavLink
                  className="offcanvas-nav-link"
                  to="./profile"
                  activeClassName="active"
                >
                  Profile
                </NavLink>

                <NavLink className="offcanvas-nav-link" onClick={handleLogout}>
                  LogOut
                </NavLink>
              </Nav>
            ) : (
              <Button
                variant="outline-success"
                className="join-now-button"
                onClick={handleClick}
              >
                Join Now
              </Button>
            )}
          </Nav>
          <SocialLinks className="offcanvas-social-links" />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavBar3;

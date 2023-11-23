import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Offcanvas,
  FormControl,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../styles/NavBar3.css"; // Import your CSS file
import SocialLinks from "./SocialLinks";

const NavBar3 = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navigate= useNavigate();
  const [token,setToken] = useState(null);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      alert("Searching for: " + searchKeyword);
      setSearchKeyword(""); // Clear the search input after searching
    }
  };

  useEffect(() => {
    // Fetch token from sessionStorage when the component mounts
    const storedToken = localStorage.getItem("token");
    console.log(storedToken);
    setToken(storedToken || null); // Ensure token is set to null if not found
  }, []);

  const handleClick=()=>{
    navigate("/signin")
  }

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
              <Nav.Link className="nav-link" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="nav-link" href="/Services">
                Our Services
              </Nav.Link>
              <Nav.Link
                href={token ? "/formproject" : "/signin"}
                className="nav-link"
              >
                Create Project
              </Nav.Link>
            </Nav>
            <Form
              className={`d-flex search-input ${
                isSearchFocused ? "focused" : ""
              }`}
            >
              <FormControl
                type="search"
                placeholder="Type Something"
                className="mr-2 search-bar"
                aria-label="Search"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                onKeyPress={handleSearch}
              />
              <Button variant="outline-success" className="search-button">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </Form>
            <Button
              variant="outline-success"
              className="join-now-button"
              onClick={handleClick}
            >
              Join Now
            </Button>
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
            <Nav.Link className="offcanvas-nav-link" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="offcanvas-nav-link" href="/Services">
              Our Services
            </Nav.Link>
            <Nav.Link
              href={token ? "/formproject" : "/signin"}
              className="offcanvas-nav-link"
            >
              Create Project
            </Nav.Link>
            <Form
              className={`d-flex offcanvas-search-input ${
                isSearchFocused ? "focused" : ""
              }`}
            >
              <FormControl
                type="search"
                placeholder="Type Something"
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
            <Button
              variant="outline-success"
              className="join-now-button-offcanvas"
              onClick={handleClick}
            >
              Join Now
            </Button>
          </Nav>
          <SocialLinks className="offcanvas-social-links" />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavBar3;

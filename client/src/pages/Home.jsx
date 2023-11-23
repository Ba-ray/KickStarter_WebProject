import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import Contact from "../components/HomeComponents/Contact";
import UserCard from "../components/UserCard";
import ProjectPage from "./ProjectPage";
import arrowDown from "../images/arrow-down.png";
import NavBar3 from "../components/NavBar3";
import UserProjectNav from "../components/UserProjectNav";
import { Pagination } from "react-bootstrap";
import { generateUsers, generateProjects } from "./Test";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  // Changing word
  const words = ["Investment", "Collaboration", "Success"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState(words[0]);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [navDisplay, setNavDisplay] = useState("projects");

  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [currentPageUsers, setCurrentPageUsers] = useState(1);
  const [currentPageProjects, setCurrentPageProjects] = useState(1);
  const [totalPagesUsers, setTotalPagesUsers] = useState(1);
  const [totalPagesProjects, setTotalPagesProjects] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleNavChange = (selectedNav) => {
    setNavDisplay(selectedNav);
  };

  const handleSearch = (searchValue) => {
    setSearchKeyword(searchValue);
    fetchProjectData(currentPageProjects, searchValue); // Pass the updated search value
    fetchUserData(currentPageUsers, searchValue); // Pass the updated search value
  };

  useEffect(() => {
    const wordChangeInterval = setInterval(() => {
      setCursorVisible(false);

      setTimeout(() => {
        setCursorVisible(true);
        setDisplayedWord("");
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
        const word = words[currentWordIndex];

        let i = 0;
        const typingInterval = setInterval(() => {
          setDisplayedWord((prevDisplayedWord) => prevDisplayedWord + word[i]);
          i++;

          if (i === word.length) {
            clearInterval(typingInterval);
          }
        }, 200);
      }, 700);
    }, 2000);

    return () => {
      clearInterval(wordChangeInterval);
    };
  }, [currentWordIndex]);

  const itemsPerPage = 9; // Number of items per page

  const fetchProjectData = async (page, keyword) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/Projects/projectpagination",
        {
          // page: currentPageProjects,
          page,
          limit: 9,
          search: keyword,
          timeFilter: "thisYear",
          tags: "",
        }
      );

      if (response.data) {
        setProjects(response.data.projects);
        setTotalPagesProjects(response.data.totalPages);
      } else {
        console.error("Invalid response format:", response);
      }
    } catch (error) {
      console.error("Error fetchProjecting data:", error);
    }
  };

  const fetchUserData = async (page, keyword) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/userPagination",
        {
          page,
          limit: 9,
          search: keyword,
        }
      );

      if (response.data) {
        setUsers(response.data.users);
        setTotalPagesUsers(response.data.totalPages);
      }
    } catch (error) {
      console.error("Error fetchProjecting data:", error);
    }
  };

  const handleUsersPageChange = (page) => {
    setCurrentPageUsers(page);
    fetchUserData(page);
  };

  const handleProjectsPageChange = (page) => {
    setCurrentPageProjects(page);
    fetchProjectData(page);
  };

  useEffect(() => {
    fetchProjectData(currentPageProjects);
    console.log(projects);
  }, [currentPageProjects]);

  useEffect(() => {
    fetchUserData(currentPageUsers);
    console.log(users);
  }, [currentPageUsers]);

  return (
    <div className="homepage-container">
      <nav className="navbar">
        <NavBar3 />
      </nav>
      <section className="landing-page">
        <section className="home">
          <div className="home-text-section">
            <div className="home-title">
              <p className="home-header">Where Great Ideas Meet </p>
              <div className="changing-word">
                <p className="displayed">{displayedWord}</p>
                <p className={`cursor ${cursorVisible ? "visible" : ""}`}>|</p>
              </div>
            </div>
            <p className="welcome-paragraph">
              Welcome to our innovative platform where brilliant minds come
              together to transform ideas into reality. Join our global
              community of collaborators, explore exciting projects, and secure
              the investment capital needed to turn your dreams into success.
              Let's create a brighter future, together.
            </p>
          </div>
        </section>
        <section className="user-section">
          <h6 className="user-section-header"> what are you looking for? </h6>
          <UserProjectNav
            onNavChange={handleNavChange}
            onSearch={handleSearch}
          />
          <div className="search-list">
            {navDisplay === "users" &&
              users.map((user, index) => <UserCard key={index} data={user} />)}

            {navDisplay === "projects" &&
              projects.map((project, index) => (
                <ProjectPage key={index} data={project} />
              ))}
          </div>
          <div className="pagination-container">
            <Pagination>
              {navDisplay === "users" &&
                Array.from({ length: totalPagesUsers }, (_, i) => (
                  <Pagination.Item
                    key={i + 1}
                    active={i + 1 === currentPageUsers}
                    onClick={() => handleUsersPageChange(i + 1)}
                  >
                    {i + 1}
                  </Pagination.Item>
                ))}
              {navDisplay === "projects" &&
                Array.from({ length: totalPagesProjects }, (_, i) => (
                  <Pagination.Item
                    key={i + 1}
                    active={i + 1 === currentPageProjects}
                    onClick={() => handleProjectsPageChange(i + 1)}
                  >
                    {i + 1}
                  </Pagination.Item>
                ))}
            </Pagination>
          </div>
        </section>

        <Contact />
      </section>
    </div>
  );
};

export default Home;

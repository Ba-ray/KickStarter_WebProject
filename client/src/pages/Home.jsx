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
import {generateUsers,generateProjects} from "./Test"
import axios from "axios";


// const users = generateUsers(50); // Generate 50 random users
// const projects = generateProjects(50); // Generate 50 random projects


const Home = () => {
 

  const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/Start-project");
  // };

  // const userDataArray = [
  //   {
  //     name: "John Doe",
  //     location: "New York",
  //     description: "UI/UX designer and front-end developer",
  //   },

  //   {
  //     name: "Celine Naddaf",
  //     location: "Lebanon",
  //     description: "UI/UX designer and front-end developer",
  //   },
  // ];

  // const projectDataArray = [
  //   {
  //     title: "Project 1",
  //     description: "Description for Project 1",
  //     creator: "Creator 1",
  //     isPrivate: false,
  //   },
  //   {
  //     title: "Project 2",
  //     description: "Description for Project 2",
  //     creator: "Creator 2",
  //     isPrivate: true,
  //   },
  //   // Add more project objects as needed
  // ];

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

  const handleNavChange = (selectedNav) => {
    setNavDisplay(selectedNav);
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

  // const scrollToProjects = () => {
  //   const ProjectsSection = document.getElementById("project-list");

  //   if (ProjectsSection) {
  //     ProjectsSection.scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   }
  // };

  //pagination

  const itemsPerPage = 9; // Number of items per page

  // const [currentPageUsers, setCurrentPageUsers] = useState(1);
  // const [currentPageProjects, setCurrentPageProjects] = useState(1);

  // const totalUsersPages = Math.ceil(userDataArray.length / itemsPerPage);
  // const totalProjectsPages = Math.ceil(projectDataArray.length / itemsPerPage);

  const fetchData = async (page) => {
    try {
      const response = await axios.post("http://localhost:8080/api/Projects/projectpagination", {
        // page: currentPageProjects,
        page,
        limit: 9,
        search: "",
        timeFilter: "thisYear",
        tags: "",
      });
      console.log("Data sent to the server:", {
        page,
        limit: 9,
        search: "",
        timeFilter: "thisYear",
        tags: "",
      });
      if (response.data) {
        setProjects(response.data.projects);
        setTotalPagesProjects(response.data.totalPages);
      } else {
        console.error("Invalid response format:", response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const displayUsers = users.slice(
    (currentPageUsers - 1) * itemsPerPage,
    currentPageUsers * itemsPerPage
  );

  const displayProjects = projects.slice(
    (currentPageProjects - 1) * itemsPerPage,
    currentPageProjects * itemsPerPage
  );

  const handleUsersPageChange = (page) => {
    setCurrentPageUsers(page);
  };

  const handleProjectsPageChange = (page) => {
    setCurrentPageProjects(page);
    fetchData(page);
  };

  // useEffect((page) => {
  //   console.log("Fetching data...");
  //   fetchData(page);
  // }, [totalPagesProjects]);
  useEffect(() => {
    console.log("Fetching data...");
    fetchData(currentPageProjects); // Pass the current page instead of totalPagesProjects
  }, [currentPageProjects]);

  // return (
  //   <div className="homepage-container">
  //     <nav className="navbar">
  //       <NavBar3 />
  //     </nav>
  //     <section className="landing-page">
  //       <section className="home">
  //         <div className="home-text-section">
  //           <div className="home-title">
  //             <p className="home-header">Where Great Ideas Meet </p>
  //             <div className="changing-word">
  //               <p className="displayed">{displayedWord}</p>
  //               <p className={`cursor ${cursorVisible ? "visible" : ""}`}>|</p>
  //             </div>
  //           </div>
  //           <p className="welcome-paragraph">
  //             Welcome to our innovative platform where brilliant minds come
  //             together to transform ideas into reality. Join our global
  //             community of collaborators, explore exciting projects, and secure
  //             the investment capital needed to turn your dreams into success.
  //             Let's create a brighter future, together.
  //           </p>
  //         </div>
  //       </section>
  //       <section className="user-section">
  //         <h6 className="user-section-header"> what are you looking for? </h6>
  //         <UserProjectNav onNavChange={handleNavChange} />
  //         <div className="search-list">
  //           {navDisplay === "users" &&
  //             displayUsers.map((user, index) => (
  //               <UserCard key={index} data={user}/>
  //             ))}

  //           {navDisplay === "projects" &&
  //             displayProjects.map((project, index) => (
  //               <ProjectPage key={index} data={project} />
  //             ))}
  //         </div>
  //         <div className="pagination-container">
  //           <Pagination>
  //             {Array.from(
  //               {
  //                 length: Math.ceil(
  //                   navDisplay === "users"
  //                     ? users.length / itemsPerPage
  //                     : projects.length / itemsPerPage
  //                 ),
  //               },
  //               (_, i) => (
  //                 <Pagination.Item
  //                   key={i + 1}
  //                   active={
  //                     i + 1 ===
  //                     (navDisplay === "users"
  //                       ? currentPageUsers
  //                       : currentPageProjects)
  //                   }
  //                   onClick={() =>
  //                     navDisplay === "users"
  //                       ? handleUsersPageChange(i + 1)
  //                       : handleProjectsPageChange(i + 1)
  //                   }
  //                 >
  //                   {i + 1}
  //                 </Pagination.Item>
  //               )
  //             )}
  //           </Pagination>
  //         </div>
  //       </section>

  //       {/* <div className="section-header-container">
  //       <h1 className="section-header">Latest</h1>
  //       <h1 className="section-header highlited-word">Reviews</h1>
  //     </div>
  //     <UserReviewCarousel reviews={reviewsData} /> */}
  //       <div className="section-header-container">
  //         <h1 className="section-header">Get In </h1>
  //         <h1 className="section-header highlited-word">Touch</h1>
  //         <Contact />
  //       </div>
  //     </section>
  //   </div>
  // );
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
                <UserProjectNav onNavChange={handleNavChange} />
                <div className="search-list">
                    {navDisplay === "users" &&
                        displayUsers.map((user, index) => (
                            <UserCard key={index} data={user} />
                        ))}

                    {navDisplay === "projects" &&
                        displayProjects.map((project, index) => (
                            <ProjectPage key={index} data={project} />
                        ))}
                </div>
                <div className="pagination-container">
                    <Pagination>
                        {Array.from({ length: totalPagesProjects }, (_, i) => (
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

            <div className="section-header-container">
                <h1 className="section-header">Get In </h1>
                <h1 className="section-header highlited-word">Touch</h1>
                <Contact />
            </div>
        </section>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";

import NavigationBar from "../components/NavigationBar";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import HowItWorks from "../components/HomeComponents/HowItWorks";
import Contact from "../components/HomeComponents/Contact";
import SearchBar from "../components/SearchBar.tsx";
import ProjectCard from "../components/HomeComponents/ProjectCard";

import arrowDown from "../images/arrow-down.png";
import UserReviewCarousel from "../components/HomeComponents/UserReviewCarousel";


const StatisticsCard = ({ value, label }) => (
  <div className="statistics-card">
    <h2>{value}</h2>
    <p>{label}</p>
  </div>
);

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/register");
  };

  // Changing word
  const words = ["Investment", "Collaboration", "Success"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState(words[0]);
  const [cursorVisible, setCursorVisible] = useState(true);

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

  // Statistic cards
  const statisticsData = [
    { value: "1000+", label: "Projects Funded" },
    { value: "200+", label: "Collaborators" },
    { value: "$1M+", label: "Investment Capital Raised" },
    { value: "50+ Countries", label: "Community Size" },
  ];

  // Project Card
  const projectData = [
    {
      projectTitle: "Project 1",
      projectCreator: "Creator 1",
      isPrivate: true,
    },
    {
      projectTitle: "Project 2",
      projectCreator: "Creator 2",
      isPrivate: false,
    },
    {
      projectTitle: "Project 3",
      projectCreator: "Creator 3",
      isPrivate: false,
    },
    {
      projectTitle: "Project 4",
      projectCreator: "Creator 4",
      isPrivate: true,
    },
    {
      projectTitle: "Project 5",
      projectCreator: "Creator 5",
      isPrivate: false,
    },
    {
      projectTitle: "Project 6",
      projectCreator: "Creator 6",
      isPrivate: true,
    },
  ];

  const scrollToProjects = () => {
    const ProjectsSection = document.getElementById("project-list");

    if (ProjectsSection) {
      ProjectsSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  //user reviews
  const reviewsData = [
    {
      name: "User 1",
      reviewText: "This is a great plateform!",
      rating: 5, // User rating for the review
    },
    {
      name: "User 2",
      reviewText: "Great ui !",
      rating: 4, // User rating for the review
    },
    {
      name: "User 3",
      reviewText: "bad plateform !",
      rating: 1, // User rating for the review
    },
  ];

  return (
    <section className="landing-page">
      <section className="home">
        <NavigationBar />
        <div className="home-text-section">
          <p className="home-header">Where Great Ideas Meet </p>
          <p className="changing-word">
            <p className="displayed">{displayedWord}</p>
            <p className={`cursor ${cursorVisible ? "visible" : ""}`}>|</p>
          </p>
          <p className="welcome-paragraph">
            Welcome to our innovative platform where brilliant minds come
            together to transform ideas into reality. Join our global community
            of collaborators, explore exciting projects, and secure the
            investment capital needed to turn your dreams into success. Let's
            create a brighter future, together.
          </p>
        </div>
        <SearchBar isInPage='homepage' />
        <button
          onClick={scrollToProjects}
          className="home-scroll-button"
          data-tip="scroll to projects"
        >
          <img src={arrowDown} alt="arrow down" style={{ width: "50%" }} />
        </button>
      </section>
      <div className="statistics">
        {statisticsData.map((data, index) => (
          <StatisticsCard key={index} label={data.label} value={data.value} />
        ))}
      </div>
      <section>
        <div className="section-header-container">
          <h1 className="section-header">How It</h1>
          <h1 className="section-header highlited-word">Works</h1>
        </div>
        <HowItWorks />
      </section>
      <section className="projects-section">
        <div className="section-header-container">
          <h1 className="section-header">Explore</h1>
          <h1 className="section-header highlited-word">Projects</h1>
        </div>
        <div id="project-list" className="projects-list">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              projectTitle={project.projectTitle}
              projectCreator={project.projectCreator}
              isPrivate={project.isPrivate}
            />
          ))}
        </div>
        <button className="home-load-more">Load more...</button>
      </section>
      <div className="section-header-container">
        <h1 className="section-header">Latest</h1>
        <h1 className="section-header highlited-word">Reviews</h1>
      </div>
      <UserReviewCarousel reviews={reviewsData} />
      <div className="section-header-container">
        <h1 className="section-header">Get In </h1>
        <h1 className="section-header highlited-word">Touch</h1>
      </div>
      <Contact />
    </section>
  );
};

export default Home;

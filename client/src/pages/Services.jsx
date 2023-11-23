import React, { useState } from "react";
import '../styles/HowItWorks.css';
import browseProjectsIcon from "../images/project.png";
import investIcon from "../images/investment.png";
import collaborateIcon from "../images/collaborate.png";
import transformIcon from "../images/magic-wand.png";
import secureFundIcon from "../images/fund.png";

import Contact from "../components/HomeComponents/Contact";
import UserReviewCarousel from "../components/HomeComponents/UserReviewCarousel";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar3 from "../components/NavBar3";
import "../styles/Services.css"
const steps = [
  {
    title: "Project Hub",
    description:
      "Explore a diverse range of projects from talented creators worldwide. Whether you're a startup founder or an investor seeking the next big thing, our Project Hub is the launchpad for exciting collaborations.",
    icon: browseProjectsIcon,
  },
  {
    title: "Investment Opportunities",
    description:
      "Seamlessly browse and invest in projects that align with your interests. Our curated selection ensures quality opportunities, making investment decisions straightforward and rewarding",
    icon: investIcon,
  },
  {
    title: "Collaborate and Innovate",
    description:
      "Connect with like-minded individuals and bring your skills to projects that resonate with your expertise. For project starters, find the right talent to turn your vision into a reality.",
    icon: collaborateIcon,
  },
  {
    title: "Secure Funding",
    description:
      "If you're a project owner, secure the capital needed to bring your vision to life. Our platform facilitates a straightforward funding process, ensuring that your ideas get the financial support they deserve.",
    icon: secureFundIcon,
  },
  {
    title: "Freelancer's Haven",
    description:
      " Freelancers, explore a myriad of job opportunities tailored to your skills. Showcase your talents, connect with project starters, and embark on exciting collaborations.",
    icon: transformIcon,
  },
];

 const StatisticsCard = ({ value, label }) => (
   <div className="statistics-card">
     <h2>{value}</h2>
     <p>{label}</p>
   </div>
 );

const Services = () => {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // Statistic cards
  const statisticsData = [
    { value: "1000+", label: "Projects Funded" },
    { value: "200+", label: "Collaborators" },
    { value: "$1M+", label: "Investment Capital Raised" },
    { value: "50+ Countries", label: "Community Size" },
  ];


 

  return (
    <section>
      <nav className="navbar">
        <NavBar3 />
      </nav>
      <div>
        <section className="services">
          <div className="services-text-section">
            <div className="services-title">
              <p className="services-header">Where Great Ideas Meet </p>
            </div>
            <h1 className="services-subtitle">iDream</h1>
            <p className="welcome-paragraph">
              We've created a dynamic space that brings together passionate
              project starters, savvy investors, and skilled freelancers,
              fostering a community where innovative ideas flourish. Whether
              you're here to initiate a project, discover exciting investment
              opportunities, or find your next freelancing gig, <br></br>
              <strong>IDream</strong> is the gateway to turning visions into
              reality.
            </p>
          </div>
          {/* <button
            onClick={scrollToProjects}
            className="home-scroll-button"
            data-tip="scroll to projects"
          >
            <img src={arrowDown} alt="arrow down" style={{ width: "50%" }} />
          </button> */}
        </section>

        <div className="statistics">
          {statisticsData.map((data, index) => (
            <StatisticsCard key={index} label={data.label} value={data.value} />
          ))}
        </div>

        <section className="section" id="services">
          <div className="section-header-container">
            <h1 className="section-header">How It</h1>
            <h1 className="section-header highlited-word">Works</h1>
          </div>
          <div>
            <Slider {...settings}>
              {steps.map((service, index) => (
                <div key={index} className="item service-item">
                  <div className="icon">
                    <i>
                      <img src={service.icon} alt="" />
                    </i>
                  </div>
                  <h5 className="service-title">{service.title}</h5>
                  <p>{service.description}</p>
                  <a href="#" className="main-button">
                    Read More
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </section>
        <div className="section-header-container">
          <h1 className="section-header">Latest</h1>
          <h1 className="section-header highlited-word">Reviews</h1>
        </div>
        <UserReviewCarousel reviews={reviewsData} />
        <Contact />
      </div>
    </section>
  );
};

export default Services;

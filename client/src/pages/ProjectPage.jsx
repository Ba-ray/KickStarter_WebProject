import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import projectImage from "../images/ProjectPic.jpg";
import ProjectPopup from "../components/ProjectPopup";
import "../styles/ProjectPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import RangeSlider from "react-bootstrap-range-slider";
import axios from "axios";

const ProjectPage = (props) => {
  const [projectData,setProjectData] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [invest, setInvest] = useState(false);
  const [fund,setFund] = useState(1);
  const [showFundButton, setShowFundButton] = useState(false);
  const [isOpen,setIsOpen] = useState(false);


  const handleInvest = () => {
    setInvest(!invest);
    setShowFundButton(true);
    setIsOpen(!isOpen);
  }
  
  const handleFund = async (fund) => {
    try{
      const fundValue = parseFloat(fund);

      // Check if the parsed value is a valid number
      if (isNaN(fundValue)) {
        throw new Error("Invalid fund value format.");
      }
      const response = await axios.post(`http://localhost:8080/api/Fund/fundProj/${projectData._id}`, {
        newFundingValue: projectData.current_fund + fundValue
      });
      console.log('API Response:', response.data);
      setInvest(false);
      setShowFundButton(false);
      window.location.reload();
    }
    catch(error){
      console.error("Error Funding the project: ", error);
    }
  }
  const handleOpenProject = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    if (props.data) {
      setProjectData(props.data);
    }

  }, [props.data]);

  const handleChange = (event) => {setFund(event.target.value);};

  return (
    <div className="projectCardContainer">
      {projectData && (
        <Card className="project-card">
          <Card.Header className="project-header">
            {projectData.isPrivate && (
              <FontAwesomeIcon icon={faLock} className="lock-icon" />
            )}
            <Card.Img
              src={projectData.projectImage ? `http://localhost:8080/uploads/${projectData.projectImage}` : projectImage}
              alt="projectimg"
              className="project-image"
              onError={(e) => {
                e.target.src = projectImage; // Set the default image if there's an error loading the specified one
              }}
            />
          </Card.Header>
          <Card.Body className="project-body">
            <Card.Title className="project-title">{projectData.projectTitle}</Card.Title>
            <Card.Text className="project-text">By: {projectData.creator.username}</Card.Text>
            <Card.Text className="project-text">{projectData.projectDescription}</Card.Text>
            {invest && showFundButton &&
            (<div><RangeSlider 
                  value={fund} 
                  onChange={handleChange} 
                  min={projectData.current_fund} 
                  max={projectData.fundingGoal-projectData.current_fund} 
                  step={1}/>
              <div className="project-card-buttons">
                <Button variant="success" className="gradient-button" onClick={() => handleFund(fund)}>
                  Fund Now
                </Button>
                <Button variant="success" className="gradient-button" onClick={() => handleFund(fund)}>
                  Changed my mind
                </Button>
              </div>
            </div>)}
            <div className="project-links">
              {projectData.isPrivate ? (
                <Button variant="primary" className="project-button" disabled>
                  Project is Private
                </Button>
              ) : (
                <div className="project-card-buttons">
                  {!invest && (
                    <Button variant="primary" className="gradient-button" onClick={handleInvest}>
                      Invest now!
                    </Button>
                  )}
                  {!invest && (
                    <Button
                      variant="primary"
                      onClick={handleOpenProject}
                      className="gradient-button"
                    >
                      Open Project
                    </Button>
                  )}
                </div>
              )}
            </div>
          </Card.Body>
        </Card>
      )}
      {isPopupOpen && <ProjectPopup onClose={handleClosePopup} projectData={projectData}/>}
    </div>
  );
};

export default ProjectPage;

import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import projectImage from "../images/ProjectPic.jpg";
import ProjectPopup from "../components/ProjectPopup";
import "../styles/ProjectPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const ProjectPage = (props) => {

  // const [openProject, setOpenProject] = useState(false);
  const [projectData,setProjectData] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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
            <div className="project-links">
              {projectData.isPrivate ? (
                <Button variant="primary" className="project-button" disabled>
                  Project is Private
                </Button>
              ) : (
                <>
                  <Button variant="primary" className="project-button">
                    Invest now!
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handleOpenProject}
                    className="openProject-Button"
                  >
                    Open Project
                  </Button>
                </>
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

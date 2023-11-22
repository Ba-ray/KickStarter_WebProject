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

  useEffect(() => {
    // Fetch project data from the backend when the component mounts
    const fetchProjectData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/Projects/GetProjectByID/${props.data._id}`);
        const data = await response.json();
        setProjectData(data);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProjectData();
  }, [props.data.projectId]);

  const handleOpenProject = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="projectCardContainer">
      {projectData && (
        <Card className="project-card">
          <Card.Header className="project-header">
            {projectData.isPrivate && (
              <FontAwesomeIcon icon={faLock} className="lock-icon" />
            )}
            <Card.Img
              src={projectImage}
              alt="projectimg"
              className="project-image"
            />
          </Card.Header>
          <Card.Body className="project-body">
            <Card.Title className="project-title">{projectData.projectTitle}</Card.Title>
            <Card.Text className="project-text">{projectData.creator}</Card.Text>
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
      {isPopupOpen && <ProjectPopup onClose={handleClosePopup} />}
    </div>
  );
};

export default ProjectPage;

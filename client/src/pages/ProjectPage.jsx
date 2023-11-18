import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import projectImage from "../images/ProjectPic.jpg";
import ProjectPopup from "../components/ProjectPopup";
import "../styles/ProjectPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const ProjectPage = (props) => {

  const [openProject, setOpenProject] = useState(false);
const {title,description,creator,isPrivate}= props.data

  // useEffect(() => {
  //   // Fetch project data from the backend when the component mounts
  //   // Simulating backend response for demonstration purposes
  //   const mockBackendResponse = {
  //     title: "Sample Project",
  //     description:
  //       "This is a sample project description. Replace it with your actual project details.",
  //     creator: "John Doe",
  //     isPrivate:true
  //   };

  //   setProjectData(data);
  // }, []);

  const handleOpenProject = () => {
    setOpenProject(!openProject);
  };

  return (
    <div className="projectCardContainer">
      {title&& (
        <Card className="project-card">
          <Card.Header className="project-header">
            {isPrivate && (
              <FontAwesomeIcon icon={faLock} className="lock-icon" />
            )}
            <Card.Img
              src={projectImage}
              alt="projectimg"
              className="project-image"
            />
          </Card.Header>
          <Card.Body className="project-body">
            <Card.Title className="project-title">
              {title}
            </Card.Title>
            <Card.Text className="project-text">
              {creator}
            </Card.Text>
            <Card.Text className="project-text">
              {description}
            </Card.Text>
            <div className="project-links">
              {props.data.isPrivate ? (
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
      {openProject && <ProjectPopup onClose={handleOpenProject} />}
    </div>
  );
};

export default ProjectPage;

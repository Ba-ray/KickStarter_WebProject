import React,{ useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ProgressBar from "react-bootstrap/ProgressBar";

const ProjectPopup = ({ onClose , projectData }) => {

  return (
    <>
      <Modal show={true} onHide={onClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{projectData.projectTitle}</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>
          <Modal.Title>Interface</Modal.Title>
        </Modal.Body> */}
        <Modal.Body>
          <Modal.Title>Category:</Modal.Title>{projectData.projectCategory}
          <Modal.Title>Goal Fund:</Modal.Title>{projectData.fundingGoal}$
        </Modal.Body>
        <Modal.Body>
          <Modal.Title>Description:</Modal.Title>
          {projectData.projectDescription}
        </Modal.Body>
        <Modal.Body>
            <Modal.Title>Completion:</Modal.Title>
          <ProgressBar animated variant="success"now={0} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProjectPopup;

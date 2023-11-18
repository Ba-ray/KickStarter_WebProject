import React,{ useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ProgressBar from "react-bootstrap/ProgressBar";

const ProjectPopup = ({ onClose }) => {

  return (
    <>
      <Modal show={true} onHide={onClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Project Name 1</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>
          <Modal.Title>Interface</Modal.Title>
        </Modal.Body> */}
        <Modal.Body>
          <Modal.Title>Category:</Modal.Title>Art
          <Modal.Title>Goal Fund:</Modal.Title>1 0000000$
        </Modal.Body>
        <Modal.Body>
          <Modal.Title>Description:</Modal.Title>
          Our project, "EcoLife", is a mobile application aimed at promoting
          sustainable living. It provides users with daily tips and challenges
          to reduce their carbon footprint. The app features a unique carbon
          tracker, allowing users to monitor their progress over time. It also
          includes a community feature, where users can share their experiences
          and learn from each other. The goal of EcoLife is not only to educate
          individuals about the impact of their lifestyle choices, but also to
          foster a community of environmentally conscious citizens. We believe
          that through collective action, we can make a significant difference
          in combating climate change.
        </Modal.Body>
        <Modal.Body>
            <Modal.Title>Completion:</Modal.Title>
          <ProgressBar animated variant="success"now={80} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProjectPopup;

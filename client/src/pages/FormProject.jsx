import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Col,
  FloatingLabel,
  InputGroup,
} from "react-bootstrap";
import NavBar3 from "../components/NavBar3";
import "../styles/FormProject.css"
import * as yup from "yup";


const FormProject = () => {
  const [projectData, setProjectData] = useState({
    projectTitle: "",
    projectDescription: "",
    projectCategory: "",
    otherCategory: "",
    projectDuration: "",
    fundingGoal: "",
    projectImage: "",
  });

  const projectCategories = [
    "Art",
    "Comics",
    "Craft",
    "Design",
    "Photography",
    "Fashion",
    "Film and video",
    "Food",
    "Games",
    "Journalism",
    "Music",
    "Publishing",
    "Technology",
    "Theater",
    "Other",
  ];

  const [validated, setValidated] = useState(false);

  const schema = yup.object().shape({
    projectTitle: yup.string().required("Please enter a project title."),
    projectDescription: yup
      .string()
      .required("Please enter a project description."),
    projectCategory: yup.string().required("Please choose a project category."),
    projectDuration: yup
      .number()
      .required("Please enter a valid project duration."),
    fundingGoal: yup.number().required("Please enter a valid funding goal."),
    projectImage: yup.mixed().required("Please choose a project image."),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setProjectData({
      ...projectData,
      projectCategory: value,
    });
  };

  const handleProjectImageChange = (e) => {
    const file = e.target.files[0];
    setProjectData({
      ...projectData,
      projectImage: file,
    });
  };

  const handleDurationChange = (e) => {
    const { name, value } = e.target;

    setProjectData({
      ...projectData,
      [name]: value === "" ? null : Math.max(0, parseInt(value)),
    });
  };

  const handleFundChange = (e) => {
    const { name, value } = e.target;

    setProjectData({
      ...projectData,
      fundingGoal: value === "" ? null : Math.max(0, parseInt(value)),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);

    schema
      .validate(projectData, { abortEarly: false })
      .then(() => {
        console.log("Form is valid. Submitting:", projectData);
        // Add your form submission logic here
      })
      .catch((errors) => {
        console.error("Validation errors:", errors.errors);
      });
  };

  return (
    <form noValidate validated={validated} onSubmit={handleSubmit}>
      <nav className="navbar">
        <NavBar3 />
      </nav>
      <Container fluid className="my-5">
        <Col md={8} className="mx-auto">
          <h2 className="mb-4 text-center">Start your project</h2>

          <FloatingLabel
            controlId="floatingInputGrid"
            label="Project Title"
            className="formProject-input"
          >
            <Form.Control
              type="text"
              name="projectTitle"
              value={projectData.projectTitle}
              onChange={handleChange}
              required
              isInvalid={validated && !projectData.projectTitle}
            />
            <Form.Control.Feedback type="invalid" >
              Please enter a project title.
            </Form.Control.Feedback>
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingTextarea"
            label="Project Description"
          >
            <Form.Control
              as="textarea"
              name="projectDescription"
              value={projectData.projectDescription}
              onChange={handleChange}
              required
              isInvalid={validated && !projectData.projectDescription}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a project description.
            </Form.Control.Feedback>
          </FloatingLabel>

          <FloatingLabel
            controlId="formCategory"
            label="Project Category"
            className="formProject-input"
          >
            <Form.Select
              name="projectCategory"
              value={projectData.projectCategory}
              onChange={handleCategoryChange}
              required
              isInvalid={validated && !projectData.projectCategory}
            >
              <option>Choose the most relevant category</option>
              {projectCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </Form.Select>
            {projectData.projectCategory === "Other" && (
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Other Project Category"
                className="formProject-input"
              >
                <Form.Control
                  type="text"
                  name="otherCategory"
                  onChange={handleChange}
                  required
                  isInvalid={validated && !projectData.otherCategory}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter the project category.
                </Form.Control.Feedback>
              </FloatingLabel>
            )}
          </FloatingLabel>

          <FloatingLabel
            controlId="formProjectDuration"
            label="Project Duration (days)"
            className="formProject-input"
          >
            <Form.Control
              type="number"
              name="projectDuration"
              value={projectData.projectDuration}
              onChange={(e) => handleDurationChange(e)}
              required
              isInvalid={validated && !projectData.projectDuration}
            />
            <Form.Control.Feedback type="invalid" >
              Please enter a valid project duration.
            </Form.Control.Feedback>
          </FloatingLabel>

          <FloatingLabel
            controlId="formFundingGoal"
            label="Funding Goal ($)"
            className="formProject-input"
          >
            <Form.Control
              type="number"
              name="fundingGoal"
              value={projectData.fundingGoal}
              onChange={(e) => handleFundChange(e)}
              required
              isInvalid={validated && !projectData.fundingGoal}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid funding goal.
            </Form.Control.Feedback>
          </FloatingLabel>

          <FloatingLabel
            controlId="formProjectImage"
            label="Project Image"
            className="formProject-input"
          >
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handleProjectImageChange}
              required
              isInvalid={validated && !projectData.projectImage}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a project image.
            </Form.Control.Feedback>
          </FloatingLabel>

          <div className="text-center mt-4">
            <Button
              variant="primary"
              type="submit"
              className="formProject-submit"
            >
              Submit
            </Button>
          </div>
        </Col>
      </Container>
    </form>
  );
};

export default FormProject;

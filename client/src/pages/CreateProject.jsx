import React, {useState}from 'react'
import Slider from "../components/Slider";
import "../styles/CreateProject.css";


const CreateProject = () => {
  
     // State to manage form fields
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectData({
      ...projectData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add further logic here, e.g., send the data to a server
    console.log('Submitted data:', projectData);
  };
  return (
    <div>
        <Slider/>
    </div>
  )
}

export default CreateProject
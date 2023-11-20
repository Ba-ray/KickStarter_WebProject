import React, { useEffect, useState } from 'react';
import './Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';


const Experience = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const educationData = [
    {
      degree: 'Master of Fine Arts & Graphic Design',
      duration: '2015 - 2016',
      institution: 'Rochester Institute of Technology, Rochester, NY',
    },
    {
      degree: 'Bachelor of Fine Arts & Graphic Design',
      duration: '2010 - 2014',
      institution: 'Rochester Institute of Technology, Rochester, NY',
    },
  ];

  const experienceData = [
    {
      position: 'Senior Graphic Design Specialist',
      duration: '2019 - Present',
      company: 'Experion, New York, NY',
      responsibilities: [
        'Lead in the design, development, and implementation of the graphic, layout, and production communication materials',
        'Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.',
      ],
    },
    {
      position: 'Graphic Design Specialist',
      duration: '2017 - 2018',
      company: 'Stepping Stone Advertising, New York, NY',
      responsibilities: [
        'Developed numerous marketing programs (logos, brochures, infographics, presentations, and advertisements).',
        'Managed up to 5 projects or tasks at a given time while under pressure',
      ],
    },
  ];

  useEffect(() => {
    // Add a small delay for a smoother animation
    const timeoutId = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timeoutId); // Cleanup on component unmount
  }, []);

  return (
    <section className={`resume${isLoaded ? ' loaded' : ''}`} id="experience">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
          <FontAwesomeIcon icon={faSchool} size="lg" /><h3 className="resume-title education">Education</h3>
            {educationData.map((item, index) => (
              <div className="resume-item" key={index}>
                <h4>{item.degree}</h4>
                <h5>{item.duration}</h5>
                <p><em>{item.institution}</em></p>
              </div>
            ))}
          </div>

          <div className="col-lg-6">
          <FontAwesomeIcon icon={faBriefcase} size="lg"/><h3 className="resume-title experience">Professional Experience</h3>
            {experienceData.map((item, index) => (
              <div className="resume-item" key={index}>
                <h4>{item.position}</h4>
                <h5>{item.duration}</h5>
                <p><em>{item.company}</em></p>
                <ul>
                  {item.responsibilities.map((responsibility, idx) => (
                    <>
                    <li key={idx}>{responsibility}</li>
                    </>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

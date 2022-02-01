import React from "react";
import ExperienceCard from "./ExperienceCard";

const ExperiencesList = () => {
  const experiences = [
    {
      "company": "Interactive Brokers Group",
      "position": "Software Engineer Intern",
      "start_date": "06/2021",
      "end_date": "08/2021",
      "description": [
        "Built a Python interface to retrieve users account and portfolio information via HTTP requests.",
        "Created multiple major trading functionalities of a Client Portal (CP) using data from REST API.",
        "Built a centralized platform that was used by the API team to test current and new endpoints performance."
      ]
    },
    {
      "company": "Northeastern University",
      "position": "Teaching Assistant",
      "start_date": "01/2021",
      "end_date": "05/2021",
      "description": [
        "Used Python to help students from various backgrounds start their study in the computer science field through the ALIGN program."
      ]
    },
    {
      "company": "TÜV SÜD America, Inc",
      "position": "Product Safety Engineer",
      "start_date": "10/2017",
      "end_date": "12/2019",
      "description": [
        "Performed safety evaluation for various laboratory and IT equipment according to IEC 61010-1, IEC 60950-1, and IEC 62368-1.",
        "Passed three Proficiency Performance Tests that allows the lab to hold its accreditation.",
        "Demonstrated strong understanding of IEC 62368-1 and IEC 61010-1 standard by completing witness testing during Certification Body (CB) external audit without any non-conformity."
      ]
    },
    {
      "company": "UW Sensors, Energy, and Automation Laboratory (SEAL)",
      "position": "Research Assistant",
      "start_date": "09/2016",
      "end_date": "10/2017",
      "description": [
        "Designed and built a portable device called the Total Exposure Monitoring Unit (TEMU) that could read the concentration of different-sized particles in the air.",
        "Performed step-by-step evaluation on TEMU prototypes to evaluate performance and fixed any malfunction.",
        "Developed a multi-stage mobile device that could trace residual particles on any surface."
      ]
    }
  ];

  function renderExperienceCards() {
    return experiences.map((e, i) => (
      <ExperienceCard key={`experience_${i}`} experience={e}></ExperienceCard>
    ));
  }

  return(
    <div className="container section-page">
      {renderExperienceCards()}
    </div>
  );
}

export default ExperiencesList;
import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
  const projects = [
    {
      "project_name": "ResumeDoc",
      "project_description": "A platform where students (both non-traditional and traditional alike) and folks looking to break into tech can create rich, compelling resumes in less than 10 minutes.",
      "skill_stacks": ["Node.JS", "React", "MongoDB", "Git"]
    },
    {
      "project_name": "Nomad",
      "project_description": "This is a project of two people, where we built a web application to connect project owners with freelancers. I built the JSON hierarchy of our database that was used to handle users' information and project listings. I built routes to handle CRUD operation for user signup and freelancers posting.",
      "skill_stacks": ["Node.JS", "React", "MongoDB", "Git"]
    }
  ];

  function renderProjectCards() {
    return projects.map((p, i) => (
      <ProjectCard key={`project_${i}`} project={p}></ProjectCard>
    ));
  }

  return(
    <div className="container section-page">
      {renderProjectCards()}
    </div>
  );
}

export default ProjectsList;
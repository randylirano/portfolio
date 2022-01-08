import React from "react";
import NavBar from "../components/NavBar.js";
import ProjectsList from "../components/ProjectsList.js";

const ProjectPage = () => {
  return(
    <div className="container section-page">
      <NavBar />
      <h1>Projects</h1>
      <ProjectsList />
    </div>
  );
}

export default ProjectPage;
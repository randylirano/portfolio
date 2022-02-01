import React from "react";
import NavBar from "../components/NavBar.js";
import ExperiencesList from "../components/ExperiencesList.js";

const ExperiencePage = () => {
  return(
    <div className="container section-page">
      <NavBar />
      <h1>Experience</h1>
      <ExperiencesList />
    </div>
  );
}

export default ExperiencePage;
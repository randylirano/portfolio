import React from "react";
import ProjectCard from "./ProjectCard";

const SkillStacksList = () => {
  const mySkillStacks = {
    "programming_language": [
      "Python",
      "Java",
      "Ruby",
      "C/C++",
      "HTML",
      "CSS",
      "JavaScript",
      "SQL"
    ],
    "software_and_platform": [
      "Android Studio",
      "React",
      "Node.js",
      "SQLite",
      "MongoDB",
      "Redis",
      "Git",
      "REST API"
    ]
  };

  // function renderProjectCards() {
  //   return projects.map((p, i) => (
  //     <ProjectCard key={`project_${i}`} project={p}></ProjectCard>
  //   ));
  // }

  function renderProgrammingLanguage() {

  }

  function renderSoftwareAndPlatform() {
    
  }

  return(
    <div className="container section-page">
      {/* {renderProjectCards()} */}
    </div>
  );
}

export default SkillStacksList;
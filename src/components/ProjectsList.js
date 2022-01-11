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
      "skill_stacks": ["Node.JS", "Express", "MongoDB", "Git"]
    },
    {
      "project_name": "Application Manager",
      "project_description": "I built an application that manages job applications received by a single company. I used a dummy database to test the functionality of the application. The application was developed using a relational database, then replaced using document database to reduce linking. As a final step of the development, an in-memory database was added.",
      "skill_stacks": ["Node.JS", "Express", "SQLite", "MongoDB", "Redis", "Git"]
    },
    {
      "project_name": "ChatBot with Recipe",
      "project_description": "This is a group project where we built a chatbot that responds to a recipe request and a general conversation. The chatbot was incorporated using neural network model and rule-based model to provide a response. A GUI was used to takes the user’s input and decides the appropriate model to call for a response.",
      "skill_stacks": ["Python", "NLTK", "TensorFlow", "Git"]
    },
    {
      "project_name": "Face Mask Detection",
      "project_description": "The purpose of the project is to demonstrate the practice of software engineering principles in a group environment. Insipired by some challenges of the COVID-19 pandemic, this web based application could detect when a person is properly wearing a mask. I participated in the web development team where I developed a web structure that will serve as the platform for our AI-based face mask detection model. To keep all the commits organized and reduce risk of accidental overwrite, we designate 2 people to review every merge request. I was the reviewer from the web development team, working together with one more reviewer from the backend team to review every merge request.",
      "skill_stacks": ["HTML", "CSS", "JavaScript", "Git"]
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
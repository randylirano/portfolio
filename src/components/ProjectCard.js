import React from "react";

function SkillTag() {
  
}

const ProjectCard = ({project}) => {
  function RenderSkillTag() {

  }

  return(
    <div className="card m-3">
      <div className="card-header">
        {project.project_name}
      </div>
      <div className="card-body">
        {project.project_description}
      </div>
      <div className="card-footer">

      </div>
    </div>
  );
}

export default ProjectCard;
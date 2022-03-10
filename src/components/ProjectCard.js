import React from "react";
import SkillTag from "./SkillTag";


const ProjectCard = ({project}) => {
  function RenderSkillTag() {
    return project.skill_stacks.map((s, i) => (
      <SkillTag key={`skill_${i}`} skill={s}></SkillTag>
    ));
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
        <div className="row">
          {RenderSkillTag()}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
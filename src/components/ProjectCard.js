import React from "react";

function SkillTag({skill}) {
  return (
    <div className="tag rounded">
      {skill}
    </div>
  );
}

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
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 g-2">
            {RenderSkillTag()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
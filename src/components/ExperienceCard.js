import React from "react";

function DescriptionItem(props) {
  return <li>{props.value}</li>;
}

const ProjectCard = ({experience}) => {
  const description = experience.description;
  const descItems = description.map((desc, i) => (
    <DescriptionItem key={`item_${i}`} value={desc}></DescriptionItem>
  ));
  return(
    <div className="card m-3">
      <div className="card-header">
        <div className="row">
          <div className="col">
            <h2>{experience.company}</h2>
            <br/>
            <h3>{experience.position}</h3>
          </div>
          <div className="col">
            <h2>{experience.start_date} - {experience.end_date}</h2>
          </div>
        </div>
        
      </div>
      <div className="card-body">
        <ul>
          {descItems}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
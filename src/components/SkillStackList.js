import React from "react";
import SkillTag from "./SkillTag";

const SkillStacksList = ({inputList}) => {
  
  function renderSkillTag() {
    return inputList.map((s, i) => (
      <SkillTag key={`skill_${i}`} skill={s} />
    ));
  }

  return(
    <div className="row">
      {renderSkillTag()}
    </div>
  );
}

export default SkillStacksList;
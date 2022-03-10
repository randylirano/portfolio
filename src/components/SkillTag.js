import React from "react";


function SkillTag({skill}) {
  return (
    <div className="col-6 col-sm-4 col-md-3 col-lg-2 g-2">
      <div className="tag rounded">
        {skill}
      </div>
    </div>
  );
}

export default SkillTag;
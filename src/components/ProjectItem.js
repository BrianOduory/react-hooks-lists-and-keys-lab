import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technologySpans = technologies.map((technology) => (
    <span key={technology}>{technology}</span>
  ));

  return (
    <div className="project">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologySpans}
      </div>
    </div>
  );
}

export default ProjectItem;
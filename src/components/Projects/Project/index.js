import React from "react";

const Project = props => {
  return (
    <div id={props.id}>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <hr />
    </div>
  );
};

export default Project;

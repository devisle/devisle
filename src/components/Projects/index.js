import React from "react";

const project = () => {
  fetch("https://api.github.com/orgs/devisle")
    .then(res => res.json())
    .then(data => console.log(data));
  return (
    <div>
      <h1>Projects</h1>
    </div>
  );
};

export default project;

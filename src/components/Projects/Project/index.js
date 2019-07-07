import React from "react";
import classes from "./Project.module.scss";

const Project = props => {
  return (
    <div id={props.id} className={classes.Rules}>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>Written in {props.languages}</p>
      <h4>Stars: {props.stars}</h4>
      <a href={props.github}>GitHub Link</a>
    </div>
  );
};

export default Project;

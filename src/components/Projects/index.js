import React, { Component } from "react";
import classes from "./index.module.scss";
import Project from "./Project/index";

class project extends Component {
  state = {
    projects: []
  };

  appData = fetch("https://api.github.com/orgs/devisle/repos")
    .then(res => res.json())
    .then(data => {
      const projects = [...data];
      this.setState({
        projects
      });
    });

  render() {
    let projectArray;
    projectArray = this.state.projects.map(project => {
      return project.fork === false ? (
        <Project
          key={project.id}
          id={project.id}
          name={project.name}
          description={project.description}
          stars={project.stargazers_count}
          forks={project.forks_count}
          languages={project.languages_url}
          github={project.svn_url}
          contributors={project.contributors_url}
          license={project.license}
        />
      ) : null;
    });
    return (
      <div className={classes.Container}>
        <h3>Projects</h3>
        <div className={classes.Projects}>{projectArray}</div>
      </div>
    );
  }
}

export default project;

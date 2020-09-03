import React, { Component } from "react";
import classes from "./index.module.scss";
import Project from "./Project/index";

class project extends Component {
  state = {
    projects: []
  };

  componentDidMount = () => {
    this.appData();
  };

  appData = () =>
    fetch("https://api.github.com/orgs/devisle/repos")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (Array.isArray(data)) {
          const projects = [...data];
          this.setState({
            projects
          });
        }
      })
      .catch(() =>
        this.setState({
          projects: []
        })
      );

  render() {
    let projectArray = this.state.projects.map(project => {
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
        {this.state.projects.length > 0 ? <h2>Projects</h2> : null}
        <div className={classes.Projects}>{projectArray}</div>
      </div>
    );
  }
}

export default project;

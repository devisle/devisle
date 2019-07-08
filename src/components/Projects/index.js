import React, { Component } from "react";
import Navbar from "../Navbar/index";
import Footer from "../Footer/index";
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
      if (project.fork === false) {
        return (
          <Project
            key={project.id}
            id={project.id}
            name={project.name}
            description={project.description}
            stars={project.stargazers_count}
            languages={project.languages_url}
            github={project.svn_url}
            contributors={project.contributors_url}
            license={project.license}
          />
        );
      }
    });
    return (
      <div>
        <Navbar />
        <div className={classes.Projects}>{projectArray}</div>
        <Footer />
      </div>
    );
  }
}

export default project;

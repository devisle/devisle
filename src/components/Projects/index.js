import React, { Component } from "react";
import Navbar from "../Navbar/index";
import Footer from "../Footer/index";
import Project from "./Project/index";
class project extends Component {
  state = {
    projects: []
  };
  appData = fetch("https://api.github.com/orgs/devisle/repos")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const projects = [...data];
      this.setState({
        projects
      });
    });
  render() {
    let projectArray;
    projectArray = this.state.projects.map(project => {
      return (
        <Project
          id={project.id}
          name={project.name}
          description={project.description}
          stars={project.stargazers_count}
          languages={project.language}
          github={project.svn_url}
        />
      );
    });
    return (
      <div>
        <Navbar />
        <div>{projectArray}</div>
        <Footer />
      </div>
    );
  }
}

export default project;

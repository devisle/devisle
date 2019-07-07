import React, { Component } from "react";
import classes from "./Project.module.scss";

class Project extends Component {
  state = {
    contributors: []
  };
  contributorsArray = fetch(
    `https://api.github.com/repos/devisle/${this.props.name}/contributors`
  )
    .then(res => res.json())
    .then(data => {
      const contributors = data;
      this.setState({
        contributors
      });
    });
  render() {
    return (
      <div id={this.props.id} className={classes.Project}>
        <h3>{this.props.name.toUpperCase()}</h3>
        <p>{this.props.description}</p>
        <h4>Language(s):</h4>
        <p>{this.props.languages}</p>
        <h4>Contributor(s): </h4>
        <ul>
          {this.state.contributors.map(contributor => {
            return (
              <li>
                <a
                  target="_blank"
                  href={`https://www.github.com/${contributor.login}`}
                >
                  {contributor.login}
                </a>
              </li>
            );
          })}
        </ul>
        <h4>Stars: {this.props.stars}</h4>
        <a href={this.props.github}>GitHub Link</a>
      </div>
    );
  }
}

export default Project;

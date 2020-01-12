import React, { Component } from "react";
import classes from "./Project.module.scss";
import Octicon, {
  Star,
  Organization,
  Globe,
  Law,
  RepoForked
} from "@primer/octicons-react";

class Project extends Component {
  state = {
    contributors: [],
    languages: []
  };

  contributorsArray = () =>
    fetch(
      `https://api.github.com/repos/devisle/${this.props.name}/contributors`
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        const contributors = data;
        this.setState({
          contributors
        });
      });

  languagesArray = () =>
    fetch(this.props.languages)
      .then(res => res.json())
      .then(data => {
        const languages = data;
        this.setState({
          languages
        });
      });

  render() {
    let languagesArray = Object.keys(this.state.languages);
    return (
      <div id={this.props.id} className={classes.Project}>
        <a href={this.props.github}>{this.props.name.toUpperCase()}</a>
        <p>{this.props.description}</p>
        <h4>
          <Octicon icon={Organization} size="small" verticalAlign="middle" />{" "}
          Contributor(s):
        </h4>
        <ul>
          {this.state.contributors.map(contributor => {
            return (
              <li key={contributor.login}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.github.com/${contributor.login}`}
                >
                  {contributor.login}
                </a>
              </li>
            );
          })}
        </ul>
        <h4>
          <Octicon icon={Globe} size="small" verticalAlign="middle" />{" "}
          Language(s):
        </h4>
        <ul>
          {languagesArray.map((language, index) => {
            return <li key={index}>{language}</li>;
          })}
        </ul>
        {this.props.forks !== null ? (
          <h4>
            <Octicon icon={RepoForked} size="small" verticalAlign="middle" />{" "}
            Fork(s): {" " + this.props.forks}
          </h4>
        ) : null}
        <h4>
          <Octicon icon={Star} size="small" verticalAlign="middle" /> Star(s):{" "}
          {this.props.stars}
        </h4>
        {this.props.license !== null ? (
          <h5>
            <Octicon icon={Law} size="small" verticalAlign="middle" />{" "}
            {this.props.license.name}
          </h5>
        ) : null}
      </div>
    );
  }
}

export default Project;

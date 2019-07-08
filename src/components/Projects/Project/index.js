import React, { Component } from "react";
import classes from "./Project.module.scss";
import Octicon, {
  Star,
  MarkGithub,
  Organization,
  Globe,
  Law
} from "@primer/octicons-react";

class Project extends Component {
  state = {
    contributors: [],
    languages: []
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

  languagesArray = fetch(this.props.languages)
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
        <h3>{this.props.name.toUpperCase()}</h3>
        <p>{this.props.description}</p>
        <h4>
          <Octicon icon={Globe} size="medium" verticalAlign="middle" />{" "}
          Language(s):
        </h4>
        <ul>
          {languagesArray.map(boom => {
            return <li>{boom}</li>;
          })}
        </ul>
        <h4>
          <Octicon icon={Organization} size="medium" verticalAlign="middle" />{" "}
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
          <Octicon icon={Star} size="medium" verticalAlign="middle" /> Star(s):{" "}
          {this.props.stars}
        </h4>
        {this.props.license !== null ? (
          <h5>
            <Octicon icon={Law} size="medium" verticalAlign="middle" />{" "}
            {this.props.license.name}
          </h5>
        ) : null}
        <a className={classes.Link} href={this.props.github}>
          <Octicon icon={MarkGithub} size="medium" verticalAlign="middle" /> |
          GitHub Repo
        </a>
      </div>
    );
  }
}

export default Project;

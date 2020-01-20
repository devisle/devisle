import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import styles from "./CLI.module.scss";

const CLI = () => {
  return (
    <div className={styles.Container}>
      <Navbar />
      <div className={styles.CLI}>
        <h3>Advanced React CLI</h3>
        <span>
          Advanced React CLI is an npm package which aims to provide a better way to install a React starter application and third-party packages for your application through an intuitive CLI.
          <br />
          Running the CLI:
        </span>
        <pre>
          <code>{`npx advanced-react-cli`}</code>
        </pre>
        <h4>Installing the CLI globally:</h4>
        <pre>
          <code>{`NPM: npm i -g advanced-react-cli`}</code>
          <br />
          <code>{`Yarn: yarn global add advanced-react-cli`}</code>
          <br />
          <code>{`To invoke the CLI (Both NPM & Yarn): arc`}</code>
        </pre>
        <h4>Running tests:</h4>
        <pre>
          <code>{`npm run test or yarn test`}</code>
          <br />
          <code>{`npm run test:coverage or yarn test:coverage`}</code>
        </pre>
        <h4>What does this do?</h4>
        <span>
        We are continuously working on improving the CLI. But, as of this current stable version, we have enabled a few options such as:
        </span>
        <ul>
          <li>Yarn/NPM option for installation packages</li>
          <li>Installing React using create-react-app, with optional packages React-Router and Redux as a single bundle.</li>
          <li>React Component generator lets you make a class/function component with optional package imports such as prop-types, react-router and redux!</li>
          <li>Installing Individual packages such as Node-Sass, Styled-Components, React-Router, Prop-Types, and State Management.</li>
          <li>Redux, Unstated, Unstated-Next and Redux-Thunk have been added in the State Management.</li>
          <li>Installing Redux automatically generates a store folder containing boilerplate Redux code with instructions to get you started!</li>
          <li>Installing Prop-Types automatically generates a file containing a sample code to get started!</li>
          <li>Node-Sass and Styled-Components feature under StyledPackages section of the CLI</li>
          <li>Installing packages used for accesibility such as React-A11y and React-Axe.</li>
          <li>TypeScript and @types definitions for Node, React, React-Router, React-Redux and Jest</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default CLI;

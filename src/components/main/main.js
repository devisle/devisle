import React from "react";
import classes from "./main.module.css";

const main = () => {
  return (
    <div className={classes.MAIN}>
      <img
        src="https://avatars3.githubusercontent.com/u/48589214?s=200&v=4"
        width="200"
        height="200"
        alt="Dev Isle"
      />
      <br />
      <h2> Open Source </h2>
      <div className={classes.BUTTON}>
        <button className={classes.BUTTON1}>
          <a
            href="https://github.com/devisle"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo!
          </a>
        </button>
        <button className={classes.BUTTON2}>
          <a
            href="https://discord.gg/hWHMT2c"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join our Discord!
          </a>
        </button>
      </div>
    </div>
  );
};

export default main;

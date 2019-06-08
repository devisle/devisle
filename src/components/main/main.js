import React from "react";
import Particles from "./particles";
import classes from "./main.module.scss";

const main = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      }}
    >
      <Particles />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      >
        <div className={classes.MAIN}>
          <img
            src="https://avatars3.githubusercontent.com/u/48589214?s=200&v=4"
            width="200"
            height="200"
            alt="Dev Isle"
          />
          <br />
          <h1>Welcome to dev isle!</h1>
          <h2> Open Source </h2>
          <p>
            We’re a chat community Javascript, C++, Python and many more lang
            developers. We desire to hold Q and A’s with Engineers from the
            community and learn more. Come have a tech related chat or ask for
            help!
          </p>
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
      </div>
    </div>
  );
};

export default main;

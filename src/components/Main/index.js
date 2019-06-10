import React from "react";
import Particles from "./particles";
import styles from "./main.module.scss";

const main = () => (
  <>
    <Particles />
    <div className={styles.Container}>
      <h1>Welcome to Dev Isle!</h1>
      <h2>A beginner friendly community working on open source content.</h2>
      <p>
        We’re a community of developers using Javascript, C++, Python and many
        more languages. We desire to hold Q and A’s with Engineers from around
        the world and take some wisdoms. Come have a tech related chat or simply
        feel free to ask for help!
      </p>
      <div className={styles.BUTTON}>
        <button>
          <a
            className={styles.BUTTON1}
            href="https://github.com/devisle"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Group
          </a>
        </button>
        <button>
          <a
            className={styles.BUTTON2}
            href="https://discord.gg/hWHMT2c"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord Server
          </a>
        </button>
      </div>
    </div>
  </>
);

export default main;

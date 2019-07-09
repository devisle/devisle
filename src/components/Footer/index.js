import React from "react";
import Icon from "react-icons-kit";

import { youtubePlay } from "react-icons-kit/fa/youtubePlay";
import { twitterSquare } from "react-icons-kit/fa/twitterSquare";
import { instagram } from "react-icons-kit/fa/instagram";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <section>
        <span>Made with</span>
        <span className={styles.Heart} role="img" aria-label="heart">
          ❤️
        </span>
        <span>by Dev Isle developers</span>
      </section>
      <section>
        <a
          href="https://www.youtube.com/channel/UCbe813pPyocAGIIM_lSLB9w"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon size={32} icon={youtubePlay} />
        </a>
        <a
          href="https://twitter.com/devisle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon size={32} icon={twitterSquare} />
        </a>
        <a
          href="https://instagram.com/dev_isle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon size={32} icon={instagram} />
        </a>
      </section>
    </div>
  );
};

export default Footer;

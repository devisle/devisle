import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <span>Made with</span>
      <span className={styles.Heart} role="img" aria-label="heart">
        ❤️
      </span>
      <span>by Dev Isle developers</span>
    </div>
  );
};

export default Footer;

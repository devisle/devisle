import React from "react";
import styles from "./Button.module.scss";

const Button = ({ url, title }) => (
  <div className={styles.Button}>
    <a className={styles.customButton} href={url} target="_blank" rel="noopener noreferrer">
      {title}
    </a>
  </div>
);

export default Button;

import React from "react";
import styles from "./Button.module.scss";

const Button = ({ url, title }) => (
  <div className={styles.Button}>
    <button>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </button>
  </div>
);

export default Button;

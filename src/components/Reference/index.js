import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import styles from "./Reference.module.scss";

const Reference = () => {
  return (
    <div className={styles.Container}>
      <Navbar />
      <div className={styles.Reference}>
        <h3>Reference JS</h3>
        <p>DOCS COMING SOON</p>
      </div>
      <Footer />
    </div>
  );
};

export default Reference;

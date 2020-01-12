import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import styles from "./CLI.module.scss";

const CLI = () => {
  return (
    <>
      <Navbar />
      <div className={styles.CLI}>
        <h3>Advance React CLI</h3>
        <p>DOCS COMING SOON</p>
      </div>
      <Footer />
    </>
  );
};

export default CLI;

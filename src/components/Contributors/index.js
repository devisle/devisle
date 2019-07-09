import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import styles from "./Contributors.module.scss";

const Contributors = () => {
  return (
    <>
      <Navbar />
      <div className={styles.Contributors}>
        <h3>Contributors</h3>
        <p></p>
      </div>
      <Footer />
    </>
  );
};

export default Contributors;

import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import styles from "./SimpleThunk.module.scss";

const SimpleThunk = () => {
  return (
    <>
      <Navbar />
      <div className={styles.SimpleThunk}>
        <h3>Simple-Thunk</h3>
        <p>DOCS COMING SOON</p>
      </div>
      <Footer />
    </>
  );
};

export default SimpleThunk;

import React from "react";
import Navbar from "../Navbar";
import Rules from "../Rules";
import Projects from "../Projects";
import Footer from "../Footer";
import Button from "../Button";
import banner from "./banner.svg";
import Lottie from "react-lottie";
import * as animationData from "./banner.json";
import styles from "./main.module.scss";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const main = () => (
  <div className={styles.Container}>
    <Navbar />
    <div className={styles.Banner}>
      <section>
        <span className={styles.Title}>
          Friendly open source community & <br />
          useful ecosystem packages
        </span>
        <span className={styles.Subtitle}>
          Paving the way for straight forward open source contributions.
        </span>
        <p>
          We’re a community of developers using Javascript, Python and other
          languages who want to contribute to open source content and improve
          our collaboration skills. As Developers from around the world, we love
          to share, take some wisdoms and teach back. Come have a tech related
          chat or simply feel free to ask for help!
        </p>
        <p>
          <strong>
            If you would like to contribute to Open Source content, join the
            discord server.
          </strong>
        </p>
        <div className={styles.Links}>
          <Button
            url={"https://github.com/devisle"}
            title={"Github Organization"}
          />
          <Button
            url={"https://discord.gg/MSTQKRE"}
            title={"† Discord Server"}
          />
        </div>
      </section>
      <section>
        <Lottie
          options={defaultOptions}
          height={300}
          width={300}
          isStopped={false}
          isPaused={false}
        />
      </section>
    </div>
    <img className={styles.Waves} src={banner} alt="banner" />
    <Projects />
    <Rules />
    <Footer />
  </div>
);

export default main;

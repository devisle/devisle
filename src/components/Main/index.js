import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Particles from "../Particles";
import Button from "../Button";
import styles from "./main.module.scss";

const main = () => (
  <>
    <Navbar />
    <Particles />
    <div className={styles.Container}>
      <section>
        <h1>Welcome to Dev Isle!</h1>
        <h2>A beginner friendly community working on open source content.</h2>
        <p>
          We’re a community of developers using Javascript, C++, Python and many
          more languages who want to contribute to open source content and
          improve our collaboration skills. As Engineers from around the world,
          we love to share, take some wisdoms and teach back. Come have a tech
          related chat or simply feel free to ask for help!
        </p>
        <p>
          <strong>
            If you would like to contribute to Open Source content, let one of
            the server admins know. Thanks in advance.
          </strong>
        </p>
        <div className={styles.Links}>
          <Button
            url={"https://github.com/devisle"}
            title={"Github Organization"}
          />
          <Button url={"https://discord.gg/MSTQKRE"} title={"Discord Server"} />
        </div>
      </section>
      <section>
        <iframe
          title="Dev Isle"
          width="590"
          height="345"
          src="https://www.youtube.com/embed/wf3Q1rIPNe8"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </section>
    </div>
    <Footer />
  </>
);

export default main;

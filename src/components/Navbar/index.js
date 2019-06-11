import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => (
  <div className={styles.navigation}>
    <div className={styles.navigationLeft}>
      <img
        src="https://avatars3.githubusercontent.com/u/48589214?s=200&v=4"
        alt="Dev Isle"
      />
      <Link className={styles.logoLink} to="/devisle">
        Dev Isle
      </Link>
    </div>
    <div className={styles.navigationRight}>
      <nav>
        <ul>
          <li>
            <NavLink to="/rules" activeStyle={{ color: "#65e0ff" }}>
              Rules
            </NavLink>
          </li>
          <li>
            <NavLink to="/contributors" activeStyle={{ color: "#65e0ff" }}>
              Contributors
            </NavLink>
          </li>
          <li>
            <NavLink to="/schedule" activeStyle={{ color: "#65e0ff" }}>
              Schedule
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeStyle={{ color: "#65e0ff" }}>
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Navbar;

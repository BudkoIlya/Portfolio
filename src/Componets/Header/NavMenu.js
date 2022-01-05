import React from "react";
import styles from "./NavMenu.module.css";
import { Link } from "react-scroll";

function NavMenu() {
  return (
    <div className={styles.navMenu}>
      <Link to="main" smooth={true}>
        Main
      </Link>
      <Link to="skills" smooth={true} offset={-50}>
        Skills
      </Link>
      <Link to="projects" smooth={true} offset={-50}>
        Projects
      </Link>
      <Link to="contacts" smooth={true}>
        Contacts
      </Link>
    </div>
  );
}
export default NavMenu;

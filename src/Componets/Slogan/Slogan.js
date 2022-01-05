import React from "react";
import styles from "./Slogan.module.css";
import { H2 } from "../Titles/Titles";
import { Link } from "react-scroll";

function Slogan() {
  return (
    <div className={styles.slogan}>
      <div className={styles.container}>
        <H2>I Am Available For Remote Job</H2>
        <Link to="contacts" smooth={true} className={styles.btnShow}>
          Hire me
        </Link>
      </div>
    </div>
  );
}

export default Slogan;

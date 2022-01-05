import React from "react";
import styles from "./Skills.module.css";
import reactIcon from "../../Assets/imgs/react-icon.svg";
import jsIcon from "../../Assets/imgs/js-icon.svg";
import htmlIcon from "../../Assets/imgs/html-icon.svg";
import { H2, H3 } from "../Titles/Titles";
import { Fade } from "react-reveal";

const Skill = props => {
  return (
    <div className={styles.skill}>
      <div className={styles.imgSkill}>
        <img src={props.icon} alt="icon" />
      </div>
      <H3>{props.title}</H3>
      <p>{props.description}</p>
    </div>
  );
};

const Skills = () => {
  const jsDescription = "ES5+, TypesScript";
  const cssDescription = "Sass, Scss, Flex, Grid";
  const reactDescription =
    "Знание классовых и функциональных компонент. Знание библиотек: react-router, antd, axios, formik, final-form, redux, mobx, lodash";
  return (
    <div id={"skills"} className={styles.skills}>
      <Fade>
        <div className={styles.container}>
          <H2>My Skills</H2>
          <div className={styles.wrapper}>
            <Skill
              title="Java Script"
              icon={jsIcon}
              description={jsDescription}
            />
            <Skill
              title="React"
              icon={reactIcon}
              description={reactDescription}
            />
            <Skill
              title="HTML&CSS"
              icon={htmlIcon}
              description={cssDescription}
            />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Skills;

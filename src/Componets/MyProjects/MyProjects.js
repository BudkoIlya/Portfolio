import React, { useRef } from "react";
import styles from "./Projects.module.css";
import { H2, H3 } from "../Titles/Titles";
import todoList from "../../Assets/imgs/todoList.jpg";
import socialNetwork from "../../Assets/imgs/socialNetwork.jpg";
import { Fade } from "react-reveal";

const projectProperties = {
  todoList: {
    title: "Todo List",
    style: {
      backgroundImage: `url(${todoList})`
    },
    link: "https://budkoilya.github.io/todo/"
  },
  socialNetwork: {
    title: "Social Network",
    style: {
      backgroundImage: `url(${socialNetwork})`
    },
    link: "https://budkoilya.github.io/social-network/"
  }
};

const Project = ({ style, title, description = "", link }) => {
  const ref = useRef();

  const handleClick = () => {
    ref.current.click();
  };

  return (
    <div className={styles.project} onClick={handleClick}>
      <a ref={ref} style={{ visibility: "hidden" }} href={link}>
        link
      </a>
      <div className={styles.imgProject} style={style} />
      <H3>{title}</H3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

const Projects = () => {
  return (
    <div id={"projects"} className={styles.projects}>
      <Fade>
        <div className={styles.container}>
          <H2>My Works</H2>
          <div>
            {Object.values(projectProperties).map(value => (
              <Project
                key={value.link}
                title={value.title}
                style={value.style}
                link={value.link}
              />
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Projects;

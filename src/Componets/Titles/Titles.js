import React from "react";
import styles from "./Titles.module.css";

export const H2 = props => {
  const { line = true, children } = props;
  return (
    <div className={line ? styles.titleH2 : styles.titleMarginH2}>
      <h2>{children}</h2>
      {!!line && <div className={styles.line}/>}
    </div>
  );
};

export const H3 = props => {
  return <h3 className={styles.titleH3}>{props.children}</h3>;
};

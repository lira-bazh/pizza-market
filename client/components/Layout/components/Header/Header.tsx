import React from "react";
import { Title, Social } from "./components";
import styles from "./styles.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Title />
      <Social />
    </div>
  );
};

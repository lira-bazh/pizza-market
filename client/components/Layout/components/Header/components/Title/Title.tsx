import React from "react";
import { Link } from "react-router-dom";
import imgLogo from "@/assets/image/logo.png";
import styles from "./styles.scss";

export const Title = () => {
  return (
    <Link className={styles["header-title"]} to="/">
      <div>
        <img src={imgLogo} alt="Логотип в виде куска пиццы" />
      </div>
      <div className={styles["header-title__content"]}>
        <div>PIZZA MARKET</div>
        <div>самая вкусная пицца во вселенной</div>
      </div>
    </Link>
  );
};

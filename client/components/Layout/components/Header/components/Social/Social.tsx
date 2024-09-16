import React from "react";
import {
  faTelegram,
  faWhatsapp,
  faVk,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.scss";

export const Social = () => {
  return (
    <div className={styles["header-social"]}>
      <a href="#">
        <FontAwesomeIcon icon={faTelegram} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faVk} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  );
};
import React from "react";
import styles from "./styles.scss";

export const Footer = () => {
  const firstColumn = ["О компании", "Условия доставки", "Контакты"];
  const secondColumn = ["Оставить отзыв", "Вакансии", "Акции"];
  const getLinkItem = (title: string) => (
    <li className={styles["navigation-links__item"]} key={title}>
      <a href="#">{title}</a>
    </li>
  );

  return (
    <div className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles["navigation-links"]}>
          <ul className={styles["navigation-links__list"]}>
            {firstColumn.map((item) => getLinkItem(item))}
          </ul>
          <ul className={styles["navigation-links__list"]}>
            {secondColumn.map((item) => getLinkItem(item))}
          </ul>
        </div>
        <div className="navigation-apps"></div>
      </div>
    </div>
  );
};

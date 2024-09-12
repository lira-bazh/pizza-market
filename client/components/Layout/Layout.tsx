import React from 'react'

import styles from "./styles.module.scss";

export const Layout = ({ children }) => {
  console.log("styles", styles);
  return <div className={styles.page}>{children}</div>;
};

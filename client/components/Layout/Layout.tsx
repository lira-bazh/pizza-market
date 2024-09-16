import React from 'react'
import { Header, Footer } from "./components";
import styles from "./styles.scss";

export const Layout = ({ children }) => {
  return <div className={styles.page}>
    <Header />
    {children}
    <Footer/>
    </div>;
};

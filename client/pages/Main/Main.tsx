import React from "react";
import { Navigation, Products, UploadContent } from './components';
import styles from './styles.scss'

export const Main = () => {
  return (
    <div className={styles['main-page']}>
      <Navigation />
      <Products />
      <UploadContent />
    </div>
  );
};

import React from 'react';
// import BasketNavButton from './basketNavButton';
import { Assortment, BasketButton } from './components';
import styles from './styles.scss';

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <Assortment />
      <BasketButton />
    </div>
  );
};

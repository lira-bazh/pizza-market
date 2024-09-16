import React from 'react';
import { useSelector } from 'react-redux';
import { Header, Footer, ListOfBasket, EmptyBasket } from './components';
import { isEmptyBasket } from '@/redux/selectors/products';
import styles from './styles.scss';

export const Basket = () => {
  const isEmpty = useSelector(isEmptyBasket);

  return (
    <div className={styles['basket-page']}>
      {isEmpty ? (
        <EmptyBasket />
      ) : (
        <>
          <Header />
          <ListOfBasket />
          <Footer />
        </>
      )}
    </div>
  );
};

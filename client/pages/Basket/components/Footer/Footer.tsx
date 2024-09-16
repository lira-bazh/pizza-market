import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAmountInBasket, selectPriceInBasket } from '@/redux/selectors/products';
import styles from './styles.scss';

export const Footer = () => {
  const sum = useSelector(selectPriceInBasket);
  const amount = useSelector(selectAmountInBasket);

  return (
    <div className={styles.footer}>
      <div className={styles.result}>
        <div className={styles['result__amount']}>
          Всего пицц: <span className={styles['amount-counter']}>{amount}</span>
        </div>
        <div className={styles['result__price']}>
          Сумма заказа: <span className={styles['price-counter']}>{sum}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <Link className={styles.return} to="/">
          Вернуться назад
        </Link>
        <button className={styles.order}>Сделать заказ</button>
      </div>
    </div>
  );
};

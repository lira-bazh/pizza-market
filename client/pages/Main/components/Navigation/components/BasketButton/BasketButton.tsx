import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { faCartShopping, faPizzaSlice, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { selectAmountInBasket, selectPriceInBasket } from '@/redux/selectors/products';
import styles from './styles.scss';

export const BasketButton = () => {
  const sum = useSelector(selectPriceInBasket);
  const amount = useSelector(selectAmountInBasket);

  return (
    <Link to="/basket" className={styles['basket-button']}>
      <div className={styles['basket-button__price']}>
        <FontAwesomeIcon icon={faCartShopping} />
        {sum}
      </div>
      <div className={styles['basket-button__amount']}>
        <FontAwesomeIcon icon={faPizzaSlice} />
        {amount}
      </div>
      <div className={styles['basket-button__arrow']}>
        <FontAwesomeIcon icon={faArrowRightLong} />
      </div>
    </Link>
  );
};

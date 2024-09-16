import React from 'react';
import { useDispatch } from 'react-redux';
import { faCartShopping, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { clearBasket } from '@/redux/reducers/products';
import { AppDispatch } from '@/types'
import styles from './styles.scss';

export const Header = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={styles.header}>
      <div className={styles['header__title']}>
        <FontAwesomeIcon icon={faCartShopping} />
        Корзина
      </div>
      <button className={styles['header__clear']} onClick={() => dispatch(clearBasket())}>
        <FontAwesomeIcon icon={faTrashCan} />
        Очистить корзину
      </button>
    </div>
  );
};

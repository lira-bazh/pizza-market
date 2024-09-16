import React from 'react';
import { Link } from 'react-router-dom';
import imageBasket from '@/assets/image/empty-basket.png';
import styles from './styles.scss';

export const EmptyBasket = () => {
  return (
    <div className={styles['empty-basket']}>
      <div className={styles['empty-basket__title']}>Корзина пустая</div>
      <div className={styles['empty-basket__description']}>
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на главную страницу.
      </div>
      <div className={styles['empty-basket__image']}>
        <img src={imageBasket} alt="Изображение пустой корзины для покупок" />
      </div>
      <Link className={styles['empty-basket__return-button']} to="/">
        Вернуться назад
      </Link>
    </div>
  );
};

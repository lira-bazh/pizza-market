import React, { useMemo } from 'react';
import { useSelector } from "react-redux";
import { selectProductById } from "@/redux/selectors/products";
import { ActionButton } from "./components";
import { PIZZA_SETTINGS } from '@/constants'
import { IProductBasket, EPizzaParams, EActionButtonType } from '@/types';
import styles from './styles.scss';

interface ItemInBasketProps {
  basketItem: IProductBasket
}

export const ItemInBasket = ({ basketItem }: ItemInBasketProps) => {
  const productInfo = useSelector(s => selectProductById(s, basketItem.id));
  const price = useMemo(() => productInfo.prices.find(price => price.size === +basketItem[EPizzaParams.SIZE])?.price, []);

  const doughName = PIZZA_SETTINGS[EPizzaParams.DOUGH].find(
    (item) => item.value === basketItem[EPizzaParams.DOUGH]
  ).text;

  return (
    <div className={styles.product}>
      <div className={styles['product-image']}>
        <img src={productInfo.imageUrl} alt={`Изображение пиццы ${productInfo.name.toLowerCase()}`} />
      </div>
      <div className={styles['product-content']}>
        <div className={styles['product-text']}>
          <div className={styles['product-text__title']}>{productInfo.name}</div>
          <div
            className={styles['product-text__description']}
          >{`${doughName.toLowerCase()} тесто, ${basketItem.size} см`}</div>
        </div>
        <div className={styles['product-buttons']}>
          <div className={styles['product-buttons__amount']}>
            <ActionButton type={EActionButtonType.MINUS} product={basketItem} />
            <span>{basketItem.amount}</span>
            <ActionButton type={EActionButtonType.PLUS} product={basketItem} />
          </div>
          <div className={styles['product-buttons__price']}>
            <span>{basketItem.amount * price}</span>
          </div>
        </div>
      </div>
      <div className={styles['product-remove']}>
        <ActionButton type={EActionButtonType.REMOVE} product={basketItem} />
      </div>
    </div>
  );
};
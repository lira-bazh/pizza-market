import React from "react";
import { useSelector } from "react-redux";
import { selectBasket } from '@/redux/selectors/products';
import { ItemInBasket } from "./components";
import styles from './styles.scss';

export const ListOfBasket = () => {
  const basket = useSelector(selectBasket);

  return (
    <div className={styles['basket-list']}>
      {basket.map((item) => {
        return <ItemInBasket key={`id${item.id}-${item['type-dough']}-${item.size}`} basketItem={item} />;
      })}
    </div>
  );
};
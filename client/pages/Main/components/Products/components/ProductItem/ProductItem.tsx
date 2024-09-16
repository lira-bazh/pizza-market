import React from 'react';
import { ProductInteraction } from './components';
import { IProduct } from '@/types';
import styles from './styles.scss';

interface IProductItemProps {
  product: IProduct;
}

export const ProductItem = ({ product }: IProductItemProps) => {
  const contentImg = <img src={product.imageUrl} alt={`Пицца ${product.name.toLowerCase()}`} />;
  const contentTitle = <div className={styles['product-item__title']}>{product.name}</div>;

  return (
    <div className={styles['product-item']}>
      {contentImg}
      {contentTitle}
      <ProductInteraction product={product} />
    </div>
  );
};

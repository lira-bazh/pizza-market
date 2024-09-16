import React, { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts, selectCurrentFilter } from '@/redux/selectors/products';
import { uploadProducts } from '@/redux/reducers/products';
import { EPizzaTypes, IProduct, AppDispatch } from '@/types';
import { ProductItem } from './components';
import styles from './styles.scss';

export const Products = () => {
  const now = new Date();

  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectProducts);
  const filterType = useSelector(selectCurrentFilter);

  function useFilter(element: IProduct, inputFilter: EPizzaTypes) {
    if (inputFilter === EPizzaTypes.ALL) {
      return true;
    }
    return element.type === inputFilter;
  }

  const filterProducts = useMemo(() => products.filter(item => useFilter(item, filterType)), [products, filterType]);

  useEffect(() => {
    dispatch(uploadProducts());
  }, []);

  return (
    <>
      <div className={styles['products-type']}>Все пиццы</div>
      <div className={styles.products}>
        {filterProducts.map((item, index) => {
          return <ProductItem key={`pizza-${item.id}`} product={item} />;
        })}
      </div>
    </>
  );
};

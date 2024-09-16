import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import classnames from "classnames";
import { addProductToBasket } from "@/redux/reducers/products";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { SettingsGroup } from './components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { selectProductInBasket } from '@/redux/selectors/products';
import { PIZZA_SETTINGS } from '@/constants'
import {
  AppDispatch,
  IProductBasket,
  EPizzaParams,
  EPizzaSizes,
  EPizzaThickness,
  IProduct,
} from '@/types';

import styles from './styles.scss';

interface IProductInteractionProps {
  product: IProduct;
}

export const ProductInteraction = ({ product }: IProductInteractionProps) => {
  const { id } = product
  const dispatch = useDispatch<AppDispatch>();
  const arrayProductInBasket = useSelector(s => selectProductInBasket(s, id));

  const countProduct = (products: IProductBasket[]): number => {
    return products.reduce((acc, item) => {
      return (acc += item.amount);
    }, 0);
  };

  const [sumProductInBasket, setSumProduct] = useState(
    countProduct(arrayProductInBasket)
  );

  useEffect(() => {
    setSumProduct(countProduct(arrayProductInBasket));
  }, [arrayProductInBasket]);

  const getDefaultPizzaParam = (): Omit<IProductBasket, `amount`> => {
    const Obj: Omit<IProductBasket, `amount` | `id`> = Object.keys(PIZZA_SETTINGS).reduce(
      (acc, type) => {
        const value = (PIZZA_SETTINGS[type].find(item => item.checked) ?? PIZZA_SETTINGS[type][0]).value;
        return { ...acc, [type as EPizzaParams]: value };
      },
      {} as Omit<IProductBasket, `amount` | `id`>
    );

    return {
      ...Obj,
      id,
    };
  };

  const [pizzaParam, setPizzaParam] = useState<Omit<IProductBasket, `amount`>>(getDefaultPizzaParam());

  const changeParam = (type: EPizzaParams, value: string) => {
    setPizzaParam({
      ...pizzaParam,
      [type]: value,
    });
  };

  const addPizzaToBasket = (e) => {
    e.preventDefault();
    dispatch(addProductToBasket(pizzaParam));
  };

  const priceSelectedParams = useMemo(
    () => product.prices.find(item => item.size === Number(pizzaParam[EPizzaParams.SIZE])).price,
    [pizzaParam[EPizzaParams.SIZE]]
  );

  return (
    <div className={styles.interaction}>
      <SettingsGroup product={product} change={changeParam} pizzaParam={pizzaParam} />
      <div className={styles['interaction__result']}>
        <div className={styles['interaction__price']}>{priceSelectedParams}</div>
        <div className={styles['interaction__add']}>
          <button onClick={addPizzaToBasket}>
            <FontAwesomeIcon icon={faPlus} />
            <span
              className={classnames({
                [styles['interaction__counter']]: sumProductInBasket !== 0,
                [styles['interaction__counter_hidden']]: sumProductInBasket === 0,
              })}
            >
              {sumProductInBasket}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

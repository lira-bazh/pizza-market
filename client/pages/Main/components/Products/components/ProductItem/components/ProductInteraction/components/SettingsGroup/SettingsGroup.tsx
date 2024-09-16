import React from 'react';
import { SettingsButton } from './components';
import { PIZZA_SETTINGS } from '@/constants';
import { EPizzaParams, IProduct, EPizzaThickness, IProductBasket } from '@/types';
import styles from './styles.scss';

interface ISettingsGroupProps {
  product: IProduct;
  change: (type: string, value: string) => void;
  pizzaParam: Omit<IProductBasket, 'amount'>;
}

export const SettingsGroup = ({ pizzaParam, product, change }: ISettingsGroupProps) => {
  const disableStatus = (type: EPizzaParams, value: EPizzaThickness | string) => {
    switch (type) {
      case EPizzaParams.DOUGH: {
        return product.dough.includes(value as EPizzaThickness);
      }
      case EPizzaParams.SIZE: {
        return product.prices.map(item => item.size).includes(+value);
      }
      default:
        return false;
    }
  };

  return (
    <div className={styles['interaction__settings']}>
      {Object.keys(PIZZA_SETTINGS).map(type => {
        return (
          <div className={styles.settings} key={`id${product.id}-${type}`}>
            {PIZZA_SETTINGS[type].map(item => {
              return (
                <SettingsButton
                  key={`id${product.id}-${type}-${item.value}`}
                  type={`id${product.id}-${type}`}
                  value={item.value}
                  name={item.text}
                  checked={pizzaParam[type as EPizzaParams] === item.value}
                  disable={!disableStatus(type as EPizzaParams, item.value)}
                  change={value => change(type, value)}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

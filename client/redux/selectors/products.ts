import { createSelector } from '@reduxjs/toolkit';
import { IState, IProductBasket, IProduct } from '@/types';

export const products = (state: IState) => state.products;

export const selectProducts = (state: IState) => products(state).data;

export const selectCurrentFilter = (state: IState) => products(state).filter;

export const selectstopLoadStatus = (state: IState) => products(state).stopLoad;

export const selectNextStartNum = (state: IState) => products(state).nextStartNum;

export const selectProductsAmount = (state: IState) => products(state).data.length;

export const selectBasket = (state: IState) => products(state).basket;

export const isEmptyBasket = (state: IState) => products(state).basket.length === 0;

export const selectProductInBasket = createSelector(
  selectBasket,
  (_, id) => id,
  (basket: IProductBasket[], id: number) => basket.filter(item => item.id === id)
);

export const selectProductById = createSelector(
  selectProducts,
  (_, id) => id,
  (products: IProduct[], id: number) => products.find(item => item.id === id)
);

export const selectPriceInBasket = createSelector(
  selectBasket,
  state => state,
  (basket: IProductBasket[], state: IState) =>
    basket.reduce((sum, item) => {
      const product = selectProductById(state, item.id);
      const price = product.prices.find(price => price.size === +item.size)?.price ?? 0;
      return (sum += price * +item.amount);
    }, 0)
);

export const selectAmountInBasket = createSelector(selectBasket, (basket: IProductBasket[]) =>
  basket.reduce((sum, item) => {
    return (sum += +item.amount);
  }, 0)
);
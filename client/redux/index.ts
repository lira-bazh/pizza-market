import { configureStore } from '@reduxjs/toolkit';
import products from './reducers/products';

const initialState = {};

export const store = configureStore({
  reducer: {
    products,
  },
});
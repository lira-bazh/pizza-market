import axios from "axios";
import { PORTION_TO_LOAD, BASE_URL } from '@/constants';
import { selectstopLoadStatus, selectNextStartNum } from '../selectors/products';
import { EPizzaTypes, IProduct, IProductBasket, IStateProducts, IState, AppDispatch, EPizzaParams } from '@/types';

const UPLOAD_PRODUCTS = "UPLOAD_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const DELETE_ALL_PRODUCT = "DELETE_ALL_PRODUCT";
const CLEAR_BUSKET = "CLEAR_BUSKET";
const CHANGE_FILTER = "CHANGE_FILTER";
const SET_BASE_STATUS = "SET_BASE_STATUS";
const SET_START_NUM = "SET_START_NUM";

function compareProduct(item1, item2) {
  return (
    item1.id === item2.id &&
    item1[EPizzaParams.SIZE] === item2[EPizzaParams.SIZE] &&
    item1[EPizzaParams.DOUGH] === item2[EPizzaParams.DOUGH]
  );
}

const initialState: IStateProducts = {
  data: [],
  stopLoad: false,
  nextStartNum: 0,
  basket: [],
  filter: EPizzaTypes.ALL,
};

export default (state: IStateProducts = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPLOAD_PRODUCTS: {
      if (payload.length < PORTION_TO_LOAD) {
      }
      return {
        ...state,
        data: [...state.data, ...payload],
        nextStartNum: state.nextStartNum + PORTION_TO_LOAD,
        stopLoad: payload.length < PORTION_TO_LOAD,
      };
    }
    case ADD_PRODUCT: {
      const productIndex = state.basket.findIndex(item => compareProduct(item, payload));
      if (productIndex >= 0) {
        const basket = [...state.basket];
        basket[productIndex] = { ...state.basket[productIndex], amount: state.basket[productIndex].amount + 1 };
        return {
          ...state,
          basket,
        };
      }
      return {
        ...state,
        basket: [...state.basket, { ...payload, amount: 1 }],
      };
    }
    case DELETE_PRODUCT: {
      const productIndex = state.basket.findIndex(item => compareProduct(item, payload));
      if (productIndex >= 0) {
        if (state.basket[productIndex].amount > 1) {
          const basket = [...state.basket];
          basket[productIndex] = { ...state.basket[productIndex], amount: state.basket[productIndex].amount - 1 };
          return {
            ...state,
            basket,
          };
        }
        const newBasket = [...state.basket];
        newBasket.splice(productIndex, 1);
        return {
          ...state,
          basket: newBasket,
        };
      }
      return state;
    }
    case DELETE_ALL_PRODUCT: {
      const productIndex = state.basket.findIndex(item => compareProduct(item, payload));
      if (productIndex >= 0) {
        const newBasket = [...state.basket];
        newBasket.splice(productIndex, 1);
        return {
          ...state,
          basket: newBasket,
        };
      }
      return state;
    }
    case CLEAR_BUSKET: {
      return {
        ...state,
        basket: [],
      };
    }
    case CHANGE_FILTER: {
      return {
        ...state,
        filter: payload,
      };
    }
    case SET_BASE_STATUS: {
      return {
        ...state,
        stopLoad: payload,
      };
    }
    case SET_START_NUM: {
      return {
        ...state,
        nextStartNum: payload,
      };
    }
    default:
      return state;
  }
};

export function uploadProducts() {
  return (dispatch: AppDispatch, getState: () => IState) => {
    const stopLoad = selectstopLoadStatus(getState());
    const nextStartNum = selectNextStartNum(getState());

    if (!stopLoad) {
      const size = PORTION_TO_LOAD;
      const fullUrl = `${BASE_URL}/${nextStartNum}/${nextStartNum + size}`;
      axios(fullUrl).then(({ data }) => {
        dispatch({ type: UPLOAD_PRODUCTS, payload: data });
      });
    }
  };
}

export function addProductToBasket(payload) {
  return { type: ADD_PRODUCT, payload };
}

export function removeProductFromBasket(payload) {
  return { type: DELETE_PRODUCT, payload };
}

export function removeAllProductFromBasket(payload) {
  return { type: DELETE_ALL_PRODUCT, payload };
}

export function clearBasket() {
  return { type: CLEAR_BUSKET };
}

export function setFilter(payload) {
  return { type: CHANGE_FILTER, payload };
}

export function setBaseStatus(payload) {
  return { type: SET_BASE_STATUS, payload };
}

export function setNextStartNum(payload) {
  return { type: SET_START_NUM, payload };
}

import axios from "axios";

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
    item1.size === item2.size &&
    item1["type-dough"] === item2["type-dough"]
  );
}

const initialState = {
  all: [],
  emptyBase: false,
  nextStartNum: 0,
  sizePortionToLoad: 10,
  urlGetData: "/api/data",
  basket: [],
  filter: "all",
  defaultPizzaSettings: [
    {
      type: "type-dough",
      content: [
        { value: "thin", text: "Тонкое", checked: "false" },
        { value: "fat", text: "Толстое", checked: "true" },
      ],
    },
    {
      type: "size",
      content: [
        { value: "26", text: "26 см.", checked: "false" },
        { value: "30", text: "30 см.", checked: "true" },
        { value: "40", text: "40 см.", checked: "false" },
      ],
    },
  ],
  defaultTypes: [
    {
      value: "all",
      name: "Все",
    },
    {
      value: "meat",
      name: "Мясные",
    },
    {
      value: "vegetable",
      name: "Вегетарианские",
    },
  ],
  optionsObserver: {
    root: null,
    threshold: 0.5,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_PRODUCTS: {
      if (action.products.length < state.sizePortionToLoad) {
      }
      return {
        ...state,
        all: [...state.all, ...action.products],
        nextStartNum: state.nextStartNum + state.sizePortionToLoad,
        emptyBase: action.products.length < state.sizePortionToLoad,
      };
    }
    case ADD_PRODUCT: {
      const productIndex = state.basket.findIndex((item) =>
        compareProduct(item, action.product)
      );
      if (productIndex >= 0) {
        let newBasket = [...state.basket];
        newBasket[productIndex].amount += 1;
        return {
          ...state,
          basket: newBasket,
        };
      }
      return {
        ...state,
        basket: [...state.basket, { ...action.product, amount: 1 }],
      };
    }
    case DELETE_PRODUCT: {
      const productIndex = state.basket.findIndex((item) =>
        compareProduct(item, action.product)
      );
      if (productIndex >= 0) {
        if (state.basket[productIndex].amount > 1) {
          const newBasket = [...state.basket];
          newBasket[productIndex].amount -= 1;
          return {
            ...state,
            basket: newBasket,
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
      const productIndex = state.basket.findIndex((item) =>
        compareProduct(item, action.product)
      );
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
        filter: action.filter,
      };
    }
    case SET_BASE_STATUS: {
      return {
        ...state,
        emptyBase: action.param,
      };
    }
    case SET_START_NUM: {
      return {
        ...state,
        nextStartNum: action.num,
      };
    }
    default:
      return state;
  }
};

export function uploadProducts() {
  return (dispatch, getState) => {
    const store = getState().products;
    console.log(store);
    if (!store.emptyBase) {
      const size = store.sizePortionToLoad;
      const startNum = store.nextStartNum;
      const fullUrl = `${store.urlGetData}/${startNum}/${startNum + size}`;
      axios(fullUrl).then(({ data }) => {
        dispatch({ type: UPLOAD_PRODUCTS, products: data });
      });
    }
  };
}

export function addProductToBasket(product) {
  return { type: ADD_PRODUCT, product };
}

export function removeProductFromBasket(product) {
  return { type: DELETE_PRODUCT, product };
}

export function removeAllProductFromBasket(product) {
  return { type: DELETE_ALL_PRODUCT, product };
}

export function clearBasket() {
  return { type: CLEAR_BUSKET };
}

export function setFilter(filter) {
  return { type: CHANGE_FILTER, filter };
}

export function setBaseStatus(param) {
  return { type: SET_BASE_STATUS, param };
}

export function setNextStartNum(num) {
  return { type: SET_START_NUM, num };
}

const UPLOAD_PRODUCTS = "UPLOAD_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const DELETE_ALL_PRODUCT = "DELETE_ALL_PRODUCT";
const CLEAR_BUSKET = "CLEAR_BUSKET";
const CHANGE_FILTER = "CHANGE_FILTER";

function compareProduct(item1, item2) {
  return (
    item1.id === item2.id &&
    item1.size === item2.size &&
    item1["type-dough"] === item2["type-dough"]
  );
}

const initialState = {
  all: [],
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
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_PRODUCTS: {
      return {
        ...state,
        all: action.products,
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
    default:
      return state;
  }
};

export function uploadProducts(products) {
  return { type: UPLOAD_PRODUCTS, products };
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

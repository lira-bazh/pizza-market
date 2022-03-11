
const ADD_PRODUCT = 'ADD_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'
const CLEAR_BUSKET = 'CLEAR_BUSKET'
const UPLOAD_PRODUCTS = 'UPLOAD_PRODUCTS'
const CHANGE_SORT = 'CHANGE_SORT'

const initialState = {
    all: [],
    basket: [],
    sort: 'title'
}

export default (state = initialState, action) => {
switch (action.type) {
    case UPLOAD_PRODUCTS: {
        return {
            ...state,
            all: action.products
        }
    }
    case ADD_PRODUCT: {
        const productIndex = state.basket.findIndex( (item) => item.id === action.id )
        if (productIndex >= 0) {
            const newBasket = [...state.basket]
            newBasket[productIndex].amount += 1
            return {
                ...state,
                basket: newBasket
            }
        }
        return {
            ...state,
            basket: [...state.basket, { id: action.id, amount: 1 }]
        }
    }
    case DELETE_PRODUCT: {
        const productIndex = state.basket.findIndex( (item) => item.id === action.id )
        if (productIndex >= 0) {
            if (state.basket[productIndex].amount > 1) {
                const newBasket = [...state.basket]
                newBasket[productIndex].amount -= 1
                return {
                    ...state,
                    basket: newBasket
                }
            }
            const newBasket = [...state.basket]
            newBasket.splice(productIndex, 1)
            return {
                ...state,
                basket: newBasket
            }
        }
        return state
    }
    case CLEAR_BUSKET: {
        return {
            ...state,
            basket: []
        }
    }
    case CHANGE_SORT: {
        return {
            ...state,
            sort: action.sort
        }
    }
    default:
    return state
}
}

export function uploadProducts(products) {
    return {type: UPLOAD_PRODUCTS, products}
}

export function addProductToBasket(id) {
    return {type: ADD_PRODUCT, id}
}

export function removeProductFromBasket(id) {
return {type: DELETE_PRODUCT, id}
}

export function clearBasket() {
return {type: CLEAR_BUSKET}
}

export function changeSort(sort) {
    return {type: CHANGE_SORT, sort}
    }



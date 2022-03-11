import { combineReducers } from 'redux'
import products from './products.js'

const createRootReducer = () =>
  combineReducers({
    products
  })

export default createRootReducer

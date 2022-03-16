import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import './root.scss'
import MainPage from '../components/mainPage'
import BasketPage from '../components/basketPage'
import store from '../redux/index.js'
// import Basket from '../components/basket'

const Root = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/basket" element={<BasketPage />} />
          {/* <Route path="*" component={NotFound} /> */}
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default Root
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './root.scss'
import MainPage from '../components/mainPage'
// import Basket from '../components/basket'

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        {/* <Route exact path="/basket" component={Basket} /> */}
        {/* <Route path="*" component={NotFound} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Root
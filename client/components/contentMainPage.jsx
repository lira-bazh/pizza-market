import React from "react"
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import { uploadProducts } from '../redux/reducers/products'
import ProductItem from "./productItem"
import './contentMainPage.scss'

const ContentMainPage = () => {
  const urlGetData = "/api/data"
  const goods = useSelector((s) => s.products.all)
  const dispatch = useDispatch()

  React.useEffect(() => {
    axios
      .get(urlGetData)
      .then((it) => {
        console.log(it.data)
        dispatch(uploadProducts(it.data.pizzas))
      })
  }, [])

  return(
    <div className="wrapper-content">
      <div className="nav">Навигация по списку</div>
      <div className="main-page__content">
        <div className="main-page__content-title">Все пиццы</div>
        <div className="main-page__content-list">
          { goods.map(it => {
              return (
                <ProductItem key={it.id} product={it}/>
              )})}
        </div>
      </div>
    </div>
  );
};

ContentMainPage.propTypes = {};

export default ContentMainPage;
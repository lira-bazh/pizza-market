import React from "react"
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import { uploadProducts } from '../redux/reducers/products'
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
      <div className="content">
        <div className="content-title">Все пиццы</div>
        <div className="content-list">
          { goods.map(it => {
              return (
                <div key={it.id}>{it.name}</div>
              )})}
        </div>
      </div>
    </div>
  );
};

ContentMainPage.propTypes = {};

export default ContentMainPage;
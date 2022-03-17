import React from "react";
import { useSelector } from "react-redux";

import RoundButton from "./roundButton";
import "./itemInBasket.scss";

const ItemInBasket = (props) => {


  const productInfo = useSelector((s) =>
    s.products.all.find((item) => item.id === props.param.id)
  );

  return (
    <div className="basket-list-item">
      <div className="basket-list-item__image">
        <img
          src={productInfo.imageUrl}
          alt={`Изображение пиццы ${productInfo.name.toLowerCase()}`}
        />
      </div>
      <div className="basket-list-item__text">
        <div className="basket-list-item__title">{productInfo.name}</div>
        <div className="basket-list-item__description">{props.param.size}</div>
      </div>
      <div className="basket-list-item__amount">
        <RoundButton type="minus" product={props.param} />
        {props.param.amount}
        <RoundButton type="plus" product={props.param} />
      </div>
      <div className="basket-list-item__price">
        {props.param.amount * props.param.price}
      </div>
      <div className="basket-list-item__delete">
        <RoundButton type="delete" product={props.param} />
      </div>
    </div>
  );
};

ItemInBasket.propTypes = {};

export default ItemInBasket;

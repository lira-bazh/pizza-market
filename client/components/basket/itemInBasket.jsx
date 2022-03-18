import React from "react";
import { useSelector } from "react-redux";

import RoundButton from "./roundButton";
import "./itemInBasket.scss";

const ItemInBasket = (props) => {
  const productInfo = useSelector((s) =>
    s.products.all.find((item) => item.id === props.param.id)
  );

  const defaultDough = useSelector(
    (s) =>
      s.products.defaultPizzaSettings.find((item) => item.type === "type-dough")
        .content
  );

  const doughName = defaultDough.find(
    (item) => item.value === props.param["type-dough"]
  ).text;

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
        <div className="basket-list-item__description">{`${doughName.toLowerCase()} тесто, ${
          props.param.size
        } см`}</div>
      </div>
      <div className="basket-list-item__amount">
        <RoundButton type="minus" product={props.param} />
        <span className="counter">{props.param.amount}</span>
        <RoundButton type="plus" product={props.param} />
      </div>
      <div className="basket-list-item__price">
        <span>{props.param.amount * props.param.price}</span>
      </div>
      <div className="basket-list-item__delete">
        <RoundButton type="delete" product={props.param} />
      </div>
    </div>
  );
};

ItemInBasket.propTypes = {};

export default ItemInBasket;

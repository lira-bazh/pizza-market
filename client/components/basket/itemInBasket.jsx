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
    <div className="product">
      <div className="product-image">
        <img
          src={productInfo.imageUrl}
          alt={`Изображение пиццы ${productInfo.name.toLowerCase()}`}
        />
      </div>
      <div className="product-content">
        <div className="product-text">
          <div className="product-text__title">{productInfo.name}</div>
          <div className="product-text__description">{`${doughName.toLowerCase()} тесто, ${
            props.param.size
          } см`}</div>
        </div>
        <div className="product-buttons">
          <div className="product-buttons__amount">
            <RoundButton type="minus" product={props.param} />
            <span className="counter">{props.param.amount}</span>
            <RoundButton type="plus" product={props.param} />
          </div>
          <div className="product-buttons__price">
            <span>{props.param.amount * props.param.price}</span>
          </div>
        </div>
      </div>
      <div className="product-delete">
        <RoundButton type="delete" product={props.param} />
      </div>
    </div>
  );
};

ItemInBasket.propTypes = {};

export default ItemInBasket;

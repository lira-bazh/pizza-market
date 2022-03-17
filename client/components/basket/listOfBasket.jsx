import React from "react";
import { useSelector } from "react-redux";
import ItemInBasket from "./itemInBasket";
import "./listOfBasket.scss";

const ListOfBasket = () => {
  const basket = useSelector((s) => s.products.basket);

  return (
    <div className="basket-list">
      {basket.map((item) => {
        return (
          <ItemInBasket
            key={`id${item.id}-${item["type-dough"]}-${item.size}`}
            param={item}
          />
        );
      })}
    </div>
  );
};

ListOfBasket.propTypes = {};

export default ListOfBasket;

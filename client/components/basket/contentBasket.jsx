import React from "react";
import { useSelector } from "react-redux";
import EmptyBasket from "./emptyBasket";
import "./contentBasket.scss";

const ContentBasket = () => {
  const basket = useSelector((s) => s.products.basket);

  if (Object.keys(basket).length === 0) {
    return <EmptyBasket />;
  }
  return <div className="basket-page">It's basket!</div>;
};

ContentBasket.propTypes = {};

export default ContentBasket;

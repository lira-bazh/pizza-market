import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SumPriceInBasket = () => {
  const basket = useSelector((s) => s.products.basket);

  const sumPriceInBasket = (collection) => {
    return collection.reduce((sum, item) => {
      return (sum += +item.price*+item.amount);
    }, 0);
  };

  const [price, setPrice] = useState(sumPriceInBasket(basket));

  useEffect(() => {
    setPrice(sumPriceInBasket(basket));
  }, [basket]);

  return <span>{price}</span>;
};

SumPriceInBasket.propTypes = {};

export default SumPriceInBasket;

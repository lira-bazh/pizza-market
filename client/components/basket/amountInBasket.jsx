import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AmountInBasket = () => {
  const basket = useSelector((s) => s.products.basket);

  const sumInBasket = (collection) => {
    return collection.reduce((sum, item) => {
      return (sum += +item.amount);
    }, 0);
  };

  const [amount, setAmount] = useState(sumInBasket(basket));

  useEffect(() => {
    setAmount(sumInBasket(basket));
  }, [basket]);

  return <span>{amount}</span>;
};

AmountInBasket.propTypes = {};

export default AmountInBasket;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./navMainPage.scss";

const NavMainPage = () => {
  const basket = useSelector((s) => Object.values(s.products.basket).flat(1));

  const sumPriceInBasket = (collection) => {
    return collection.reduce((sum, item) => {
      return (sum += +item.price);
    }, 0);
  };

  const [price, setPrice] = useState(sumPriceInBasket(basket));
  const [amount, setAmount] = useState(basket.length);

  useEffect(() => {
    setPrice(sumPriceInBasket(basket));
    setAmount(basket.length);
  }, [basket]);

  return (
    <div className="navigation">
      <div className="sort">Сортировка</div>
      <div className="basket">
        <button className="basket__button">
          <div className="basket__price">{price}</div>
          <div className="basket__amount">{amount}</div>
        </button>
      </div>
    </div>
  );
};

NavMainPage.propTypes = {};

export default NavMainPage;

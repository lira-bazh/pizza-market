import React from "react";
import { Link } from "react-router-dom";
import SumPriceInBasket from "./sumPriceInBasket";
import AmountInBasket from "./amountInBasket";
import "./footerBasket.scss";

const FooterBasket = () => {

  return (
    <div className="basket-footer">
      <div className="basket-result">
        <div className="basket-result__amount">Всего пицц: <AmountInBasket /></div>
        <div className="basket-result__price">Сумма заказа:<SumPriceInBasket /></div>
      </div>
      <div className="basket-button">
        <Link className="return" to="/">
          Вернуться назад
        </Link>
        <button className="order">Сделать заказ</button>
      </div>
    </div>
  );
};

FooterBasket.propTypes = {};

export default FooterBasket;

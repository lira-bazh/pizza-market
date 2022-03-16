import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  faPizzaSlice,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './basketButton.scss'

const BasketButton = () => {
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
    <div className="basket">
      <Link to="/basket">
        <div className="basket__button">
          <div className="basket__price">{price}</div>
          <div className="basket__amount">
            <FontAwesomeIcon icon={faPizzaSlice} />
            {amount}
          </div>
          <div className="basket__arrow">
            <FontAwesomeIcon icon={faArrowRightLong} />
          </div>
        </div>
      </Link>
    </div>
  );
};

BasketButton.propTypes = {};

export default BasketButton;

import React from "react";
import { Link } from "react-router-dom";
import {
  faCartShopping,
  faPizzaSlice,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SumPriceInBasket from "../basket/sumPriceInBasket";
import AmountInBasket from "../basket/amountInBasket";
import './basketNavButton.scss'

const BasketNavButton = () => {

  return (
    <div className="nav-basket">
      <Link to="/basket">
        <div className="nav-basket-button">
          <div className="nav-basket-button__price">
            <FontAwesomeIcon icon={faCartShopping} />
            <SumPriceInBasket />
          </div>
          <div className="nav-basket-button__amount">
            <FontAwesomeIcon icon={faPizzaSlice} />
            <AmountInBasket />
          </div>
          <div className="nav-basket-button__arrow">
            <FontAwesomeIcon icon={faArrowRightLong} />
          </div>
        </div>
      </Link>
    </div>
  );
};

BasketNavButton.propTypes = {};

export default BasketNavButton;

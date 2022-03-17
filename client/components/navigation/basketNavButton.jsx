import React from "react";
import { Link } from "react-router-dom";
import {
  faPizzaSlice,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SumPriceInBasket from "../basket/sumPriceInBasket";
import AmountInBasket from "../basket/amountInBasket";
import './basketNavButton.scss'

const BasketNavButton = () => {

  return (
    <div className="basket">
      <Link to="/basket">
        <div className="basket__button">
          <div className="basket__price"><SumPriceInBasket /></div>
          <div className="basket__amount">
            <FontAwesomeIcon icon={faPizzaSlice} />
            <AmountInBasket />
          </div>
          <div className="basket__arrow">
            <FontAwesomeIcon icon={faArrowRightLong} />
          </div>
        </div>
      </Link>
    </div>
  );
};

BasketNavButton.propTypes = {};

export default BasketNavButton;

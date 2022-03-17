import React from "react";
import { useDispatch } from "react-redux";
import { clearBasket } from "../../redux/reducers/products";
import { faCartShopping, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './header.scss'


const HeaderBasket = () => {
  const dispatch = useDispatch();

  const useDelButton = () => {
    dispatch(clearBasket());
  };

  return (
    <div className="basket-header">
      <div className="basket-header__title">
        <FontAwesomeIcon icon={faCartShopping} />
        Корзина
      </div>
      <button className="basket-header__clear" onClick={useDelButton}>
        <FontAwesomeIcon icon={faTrashCan} />
        Очистить корзину
      </button>
    </div>
  );
}

HeaderBasket.propTypes = {};

export default HeaderBasket;
import React from "react";
import { Link } from "react-router-dom";
import imageBasket from "../../assets/image/empty-basket.png";
import "./emptyBasket.scss";

const EmptyBasket = () => {
  return (
    <div className="empty-basket">
      <div className="empty-basket__title">Корзина пустая</div>
      <div className="empty-basket__description">
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
        пиццу, перейди на главную страницу.
      </div>
      <div className="empty-basket__image">
        <img src={imageBasket} alt="Изображение пустой корзины для покупок" />
      </div>
      <Link className="empty-basket__return-button" to="/">Вернуться назад</Link>
    </div>
  );
};

EmptyBasket.propTypes = {};

export default EmptyBasket;

import React from "react"
import { Link } from "react-router-dom";
import './headerTitle.scss'
import imgLogo from '../../assets/image/logo.png'

const HeaderTitle = () => {
  return (
    <Link className="header-title" to="/">
      <div className="header-title__logo">
        <img src={imgLogo} alt="Логотип в виде куска пиццы" />
      </div>
      <div className="header-title__content">
        <div className="header-title__title">PIZZA MARKET</div>
        <div className="header-title__description">
          самая вкусная пицца во вселенной
        </div>
      </div>
    </Link>
  );
}

HeaderTitle.propTypes = {};

export default HeaderTitle;
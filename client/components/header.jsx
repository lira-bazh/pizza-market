import React from "react"
import './header.scss'
import imgLogo from '../assets/image/logo.png'

const Header = () => {
  return(
    <div className="header">
      <div className="header__logo">
        <img src={imgLogo} alt="Логотип в виде куска пиццы" />
      </div>
      <div className="header__content">
        <div className="header__title">PIZZA MARKET</div>
      <div className="header__description">самая вкусная пицца во вселенной</div>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
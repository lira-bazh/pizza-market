import React from "react"
import './footer.scss'

const Footer = () => {
  return(
    <footer className="footer">
      <div className="footer__content">
        <div className="navigation-links">
          <ul className="navigation-links__list">
            <li className="navigation-links__item"><a href="#">О компании</a></li>
            <li className="navigation-links__item"><a href="#">Условия доставки</a></li>
            <li className="navigation-links__item"><a href="#">Контакты</a></li>
          </ul>
          <ul className="navigation-links__list">
            <li className="navigation-links__item"><a href="#">Оставить отзыв</a></li>
            <li className="navigation-links__item"><a href="#">Вакансии</a></li>
            <li className="navigation-links__item"><a href="#">Акции</a></li>
          </ul>
        </div>
        <div className="navigation-apps"></div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
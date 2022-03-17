import React from "react";
import { useSelector } from "react-redux";

import EmptyBasket from "./emptyBasket";
import HeaderBasket from "./header";
import ListOfBasket from "./listOfBasket";
import FooterBasket from "./footerBasket";
import "./contentBasket.scss";

const ContentBasket = () => {
  const basketLen = useSelector((s) => Object.keys(s.products.basket).length);

  if (!basketLen) {
    return <EmptyBasket />;
  }
  return (
    <div className="basket-page">
      <div className="wrapper">
        <HeaderBasket />
        <ListOfBasket />
        <FooterBasket />
      </div>
    </div>
  );
};

ContentBasket.propTypes = {};

export default ContentBasket;

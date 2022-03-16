import React from "react";
import BasketButton from "./basketButton";
import Assortment from "./assortment";
import "./navMainPage.scss";

const NavMainPage = () => {

  return (
    <div className="navigation">
      <Assortment />
      <BasketButton />
    </div>
  );
};

NavMainPage.propTypes = {};

export default NavMainPage;

import React from "react";
import BasketNavButton from "./basketNavButton";
import Assortment from "./assortment";
import "./navMainPage.scss";

const NavMainPage = () => {

  return (
    <div className="navigation">
      <Assortment />
      <BasketNavButton />
    </div>
  );
};

NavMainPage.propTypes = {};

export default NavMainPage;

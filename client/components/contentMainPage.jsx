import React from "react";
import ListProductOnMainPage from "./listProductOnMainPage";
import NavMainPage from "./navigation/navMainPage";

import "./contentMainPage.scss";

const ContentMainPage = () => {
  return (
    <div className="main-page">
      <NavMainPage />
      <ListProductOnMainPage />
    </div>
  );
};

ContentMainPage.propTypes = {};

export default ContentMainPage;

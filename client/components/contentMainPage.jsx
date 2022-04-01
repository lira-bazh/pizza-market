import React from "react";
import ListProductOnMainPage from "./listProductOnMainPage";
import NavMainPage from "./navigation/navMainPage";
import UploadContent from "./uploadContent";

import "./contentMainPage.scss";

const ContentMainPage = () => {
  return (
    <div className="main-page">
      <NavMainPage />
      <ListProductOnMainPage />
      <UploadContent />
    </div>
  );
};

ContentMainPage.propTypes = {};

export default ContentMainPage;

import React from "react"
import './contentMainPage.scss'

const ContentMainPage = () => {

  return(
    <div className="wrapper-content">
      <div className="nav">Навигация по списку</div>
      <div className="content">
        <div className="content-title">Все пиццы</div>
        <div className="content-list"></div>
      </div>
    </div>
  );
};

ContentMainPage.propTypes = {};

export default ContentMainPage;
import React from "react"
import './mainPage.scss'
import Footer from "./footer";

const MainPage = () => {
  return(
    <div className="main-page">
      <div className="header"></div>
      <div className="wrapper-content"></div>
      <Footer />
    </div>
  );
};

MainPage.propTypes = {};

export default MainPage;
import React from "react"
import Footer from "./footer";
import Header from "./header/header";
import ContentMainPage from "./contentMainPage"
import './mainPage.scss'

const MainPage = () => {
  return(
    <div className="main-page">
      <Header />
      <ContentMainPage />
      <Footer />
    </div>
  );
};

MainPage.propTypes = {};

export default MainPage;
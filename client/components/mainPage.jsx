import React from "react"
import Footer from "./footer";
import Header from "./header/header";
import Page from "./page";
import ContentMainPage from "./contentMainPage"

const MainPage = () => {
  return(
    <Page>
      <Header />
      <ContentMainPage />
      <Footer />
    </Page>
  );
};

MainPage.propTypes = {};

export default MainPage;
import React from "react";
import Footer from "./footer";
import Header from "./header/header";
import Page from "./page";
import ContentBasket from "./basket/contentBasket";

const BasketPage = () => {
  return (
    <Page>
      <Header />
      <ContentBasket />
      <Footer />
    </Page>
  );
};

BasketPage.propTypes = {};

export default BasketPage;

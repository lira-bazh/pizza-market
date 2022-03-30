import React, { useMemo } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { uploadProducts } from "../redux/reducers/products";
import NavMainPage from "./navigation/navMainPage";
import ProductItem from "./product/productItem";
import "./contentMainPage.scss";

const ContentMainPage = () => {
  const urlGetData = "/api/data";
  const filter = useSelector((s) => s.products.filter);

  const useFilter = (element, filterType) => {
    if (filterType === "all") {
      return true;
    }
    return element.types.includes(filterType);
  };

  const goods = useSelector((s) => s.products.all);

  const goodsFilter = useMemo(
    () => goods.filter((item) => useFilter(item, filter)),
    [goods, filter]
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get(urlGetData).then((it) => {
      dispatch(uploadProducts(it.data.pizzas));
    });
  }, []);

  function getPrice(size) {
    return this.prices.find((item) => item.size === +size).price;
  }

  return (
    <div className="main-page">
      <NavMainPage />
      <div className="main-page__content">
        <div className="main-page__content-title">Все пиццы</div>
        <div className="main-page__content-list">
          {goodsFilter.map((product) => {
            return (
              <ProductItem
                key={product.id.toString()}
                product={{ ...product, getPrice }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

ContentMainPage.propTypes = {};

export default ContentMainPage;

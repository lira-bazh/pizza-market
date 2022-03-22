import React, { useMemo, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { uploadProducts } from "../redux/reducers/products";
import NavMainPage from "./navigation/navMainPage";
import ProductItem from "./product/productItem";
import "./contentMainPage.scss";

const ContentMainPage = () => {
  const numGoodsToLoad = useSelector((s) => s.products.numGoodsToLoad);
  const startGoodsToLoad = useSelector((s) => s.products.startGoodsToLoad);
  const [startNum, setStartNum] = useState(startGoodsToLoad);
  const [isLoading, setLoadingStatus] = useState(false);
  const [emptyBase, setBaseEmptyStatus] = useState(false);
  // const [progressRead, setProgressread] = useState(false);
  const urlGetData = `/api/data/`;
  const filter = useSelector((s) => s.products.filter);

  const nameField = React.useRef(null);
  console.log(nameField.current);

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
    if (isLoading || emptyBase) return;

    setLoadingStatus(true);
    axios
      .get(`${urlGetData}/${startNum}/${startNum + numGoodsToLoad}`)
      .then((it) => {
        if (it.data.length < numGoodsToLoad) {
          setBaseEmptyStatus(true);
        }
        if (it.data.length > 0) {
          dispatch(uploadProducts(it.data));
          setStartNum(startNum + numGoodsToLoad);
        }
      });

    setLoadingStatus(false);
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

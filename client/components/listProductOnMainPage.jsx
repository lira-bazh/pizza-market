import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uploadProducts } from "../redux/reducers/products";
import ProductItem from "./product/productItem";
import "./listProductOnMainPage.scss";

const ListProductOnMainPage = () => {
  const now = new Date();
  console.log("render ListProductOnMainPage", +now);

  const dispatch = useDispatch();
  const goods = useSelector((s) => s.products.all);
  const filterType = useSelector((s) => s.products.filter);

  function useFilter(element, inputFilter) {
    if (inputFilter === "all") {
      return true;
    }
    return element.types.includes(inputFilter);
  }

  const goodsAfterFilter = useCallback(
    goods.filter((item) => useFilter(item, filterType)),
    [goods, filterType]
  );

  useEffect(() => {
    console.log("first load")
    dispatch(uploadProducts());
  }, []);

  return (
    <div className="main-page__content">
      <div className="main-page__content-title">Все пиццы</div>
      <div className="main-page__content-list">
        {goodsAfterFilter.map((item, index) => {
          return (
            <ProductItem
              key={item.id.toString()}
              product={item}
            />
          );
        })}
      </div>
    </div>
  );
};

ListProductOnMainPage.propTypes = {};

export default ListProductOnMainPage;

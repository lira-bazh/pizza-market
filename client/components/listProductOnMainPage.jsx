import React, { createRef, useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { uploadProducts } from "../redux/reducers/products";
import ProductItem from "./product/productItem";
import "./listProductOnMainPage.scss";

const ListProductOnMainPage = () => {
  const urlGetData = `/api/data/`;
  const dispatch = useDispatch();
  const goods = useSelector((s) => s.products.all);
  const sizePortionToLoad = useSelector((s) => s.products.sizePortionToLoad);
  let isLoading = false;
  let emptyBase = false;
  const optionsObserver = useSelector((s) => s.products.optionsObserver);
  const lastProductRef = createRef();

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

  const startNumPortionToLoad = goodsAfterFilter.length;

  const getPortionFromAPI = () => {
    if (isLoading || emptyBase) return

    isLoading = true
    console.log(
      `start load from ${startNumPortionToLoad} to ${
        startNumPortionToLoad + sizePortionToLoad
      }`
    );
    const fullUrl = `${urlGetData}/${startNumPortionToLoad}/${
      startNumPortionToLoad + sizePortionToLoad
    }`;

    axios.get(fullUrl).then((it) => {
      if (it.data.length < sizePortionToLoad) {
        emptyBase = true;
      }
      if (it.data.length > 0) {
        dispatch(uploadProducts(it.data));
      }
    });
    isLoading = false;
  };

  let lastElementObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        getPortionFromAPI();
      }
    });
  }, optionsObserver);

  useEffect(() => {
    if (lastProductRef.current) {
      lastElementObserver.observe(lastProductRef.current);
    }
  }, [lastProductRef]);

  useEffect(() => {
    getPortionFromAPI();
  }, []);

  return (
    <div className="main-page__content">
      <div className="main-page__content-title">Все пиццы</div>
      <div className="main-page__content-list">
        {goodsAfterFilter.map((product, index) => {
          return (
            <ProductItem
              key={product.id}
              product={product}
              isLast={index + 1 === startNumPortionToLoad}
              inputRef={lastProductRef}
            />
          );
        })}
      </div>
    </div>
  );
};

ListProductOnMainPage.propTypes = {};

export default ListProductOnMainPage;

import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { uploadProducts } from "../redux/reducers/products";
import ProductItem from "./product/productItem";
import "./listProductOnMainPage.scss";

const ListProductOnMainPage = () => {
  console.log("Родился ListProductOnMainPage");
  const urlGetData = `/api/data/`;
  const dispatch = useDispatch();
  const goods = useSelector((s) => s.products.all);
  const sizePortionToLoad = useSelector((s) => s.products.sizePortionToLoad);
  const [isLoading, setLoadingStatus] = useState(false);
  const [emptyBase, setBaseEmptyStatus] = useState(false);
  const optionsObserver = useSelector((s) => s.products.optionsObserver);
  const [lastProductRef, setLastProductRef] = useState(null);
  const [counter, setCounter] = useState(0);
  // console.log(
  //   "lastProductRef",
  //   lastProductRef ? lastProductRef.textContent : null
  // );
  // console.log(counter)

  const filterType = useSelector((s) => s.products.filter);

  function useFilter(element, inputFilter) {
    if (inputFilter === "all") {
      return true;
    }
    return element.types.includes(inputFilter);
  }

  const goodsAfterFilter = React.useMemo(() => {
    // console.log(filterType, goods.length);

    return goods.filter((item) => useFilter(item, filterType));
  }, [goods, filterType]);

  const getPortionFromAPI = () => {
    if (isLoading || emptyBase) return;

    setLoadingStatus(true);

    const startNum = goods.length;
    // console.log(
    //   `start load from ${startNum} to ${startNum + sizePortionToLoad}`
    // );
    const fullUrl = `${urlGetData}/${startNum}/${startNum + sizePortionToLoad}`;

    axios.get(fullUrl).then((it) => {
      if (it.data.length < sizePortionToLoad) {
        setBaseEmptyStatus(true);
      }
      if (it.data.length > 0) {
        dispatch(uploadProducts(it.data));
      }
    });
    setLoadingStatus(false);
  };

  let lastElementObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setCounter(counter + 1);
        // console.log(entry);
      }
    });
  }, optionsObserver);

  if (lastProductRef) lastElementObserver.observe(lastProductRef);

  React.useEffect(() => {
    getPortionFromAPI();
  }, []);

  function getPrice(size) {
    return this.prices.find((item) => item.size === +size).price;
  }

  return (
    <div className="main-page__content">
      <div className="main-page__content-title">Все пиццы</div>
      <div className="main-page__content-list">
        {goodsAfterFilter.map((product, index) => {
          // if (index + 1 == goodsAfterFilter.length) {
          //   return (
          //     <ProductItem
          //       key={product.id.toString()}
          //       product={{ ...product, getPrice }}
          //       inputRef={setLastProductRef}
          //     />
          //   );
          // }
          return (
            <ProductItem
              key={`pizza_${product.id.toString()}`}
              product={{ ...product, getPrice }}
            />
          );
        })}
      </div>
    </div>
  );
};

ListProductOnMainPage.propTypes = {};

export default ListProductOnMainPage;

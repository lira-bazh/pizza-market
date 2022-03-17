import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import classnames from "classnames";
import { addProductToBasket } from "../../redux/reducers/products";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductSettingsGroup from "./productSettingsGroup";
import "./productInteraction.scss";

const ProductInteraction = (props) => {
  const dispatch = useDispatch();
  const defaultSettings = useSelector((s) => s.products.defaultPizzaSettings);
  const arrayProductInBasket = useSelector(
    (s) => s.products.basket.filter((item) => item.id === props.product.id) || []
  );

  const countProduct = (products) => {
    return products.reduce((acc, item) => {
      return (acc += item.amount);
    }, 0);
  };

  // const sumProductInBasket = countProduct(arrayProductInBasket);

  const [sumProductInBasket, setSumProduct] = useState(
    countProduct(arrayProductInBasket)
  );

  useEffect(() => {
    setSumProduct(countProduct(arrayProductInBasket));
  }, [arrayProductInBasket]);

  const getDefaultPizzaParam = (defSettings) => {
    const typeArr = defSettings.map((setting) => {
      const value = setting.content.find(
        (item) => item.checked === "true"
      ).value;
      return { type: setting.type, value: value };
    });
    const Obj = typeArr.reduce((acc, item) => {
      return { ...acc, [item.type]: item.value };
    }, {});

    return {
      ...Obj,
      id: props.product.id,
      price: props.product.getPrice(Obj.size),
    };
  };

  const [pizzaParam, setPizzaParam] = useState(
    getDefaultPizzaParam(defaultSettings)
  );

  const changeParam = (type, e) => {
    let newPizzaParam = { ...pizzaParam, [type]: e.target.value };
    newPizzaParam = {
      ...newPizzaParam,
      price: props.product.getPrice(newPizzaParam.size),
    };
    setPizzaParam(newPizzaParam);
  };

  const addPizzaToBasket = (e) => {
    e.preventDefault();
    dispatch(addProductToBasket(pizzaParam));
  };

  return (
    <div className="interaction">
      <ProductSettingsGroup
        product={props.product}
        default={defaultSettings}
        change={changeParam}
      />
      <div className="interaction__result">
        <div className="interaction__price">{pizzaParam.price}</div>
        <div className="interaction__add">
          <button onClick={addPizzaToBasket}>
            <FontAwesomeIcon icon={faPlus} />
            Добавить
            <span
              className={classnames({
                interaction__counter: sumProductInBasket !== 0,
                interaction__counter_hidden: sumProductInBasket === 0,
              })}
            >
              {sumProductInBasket}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

ProductInteraction.propTypes = {};

export default ProductInteraction;

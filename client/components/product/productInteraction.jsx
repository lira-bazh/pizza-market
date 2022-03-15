import React, { useState } from "react";
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
  const ProductInBasket = useSelector(
    (s) => s.products.basket[props.product.id] || []
  );

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
        <div className="interaction__price">{pizzaParam.price} ₽</div>
        <div className="interaction__add">
          <button onClick={addPizzaToBasket}>
            <FontAwesomeIcon icon={faPlus} />
            Добавить
            <span
              className={classnames({
                interaction__counter: ProductInBasket.length !== 0,
                interaction__counter_hidden: ProductInBasket.length === 0,
              })}
            >
              {ProductInBasket.length}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

ProductInteraction.propTypes = {};

export default ProductInteraction;

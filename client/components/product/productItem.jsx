import React from "react";
import { useSelector } from "react-redux";
import ProductSettings from "./productSettings";
import SettingsButton from "./settingsButton";
import "./productItem.scss";

const ProductItem = (props) => {
  const defaultSettings = useSelector((s) => s.products.defaultPizzaSettings);

  const disableStatus = (type, value) => {
    switch (type) {
      case "type-dough": {
        return props.product.dough.includes(value)
      }
      case "size": {
        return props.product.prices.map((item) => item.size).includes(+value)
      }
      default:
        return false
    }
  }

  const getSettingsComponents = (settingsArray) => {
    return settingsArray.map((settingsGroup) => {
      return (
        <ProductSettings key={`id${props.product.id}-${settingsGroup.type}`}>
          {settingsGroup.content.map((settingsItem) => {
            return (
              <SettingsButton
                key={`id${props.product.id}-${settingsGroup.type}-${settingsItem.value}`}
                type={`id${props.product.id}-${settingsGroup.type}`}
                value={settingsItem.value}
                name={settingsItem.text}
                checked={settingsItem.checked}
                disable={!disableStatus(settingsGroup.type, settingsItem.value)}
              />
            );
          })}
        </ProductSettings>
      );
    });
  }

  return (
    <div className="main-page-product-item">
      <img
        src={props.product.imageUrl}
        alt={`Пицца ${props.product.name.toLowerCase()}`}
      />
      <div className="main-page-product-item__title">{props.product.name}</div>
      <div className="main-page-product-item__settings">
        {getSettingsComponents(defaultSettings)}
      </div>
      <div className="main-page-product-item__result">
        <div className="main-page-product-item__price">
          {props.product.prices[0].price}
        </div>
        <div className="main-page-product-item__add">
          <button>Добавить</button>
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {};

export default ProductItem;

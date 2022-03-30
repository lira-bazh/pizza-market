import React from "react";
import ProductInteraction from "./productInteraction"
import "./productItem.scss";

const ProductItem = (props) => {

  return (
    <div className="product-item">
      <img
        src={props.product.imageUrl}
        alt={`Пицца ${props.product.name.toLowerCase()}`}
      />
      <div className="product-item__title">{props.product.name}</div>
      <ProductInteraction product={props.product} />
    </div>
  );
};

ProductItem.propTypes = {};

export default ProductItem;

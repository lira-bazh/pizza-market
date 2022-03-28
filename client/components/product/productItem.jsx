import React from "react";
import ProductInteraction from "./productInteraction"
import "./productItem.scss";

const ProductItem = (props) => {
  // console.log(props.product.id, "Я родился")
  return (
    <div className="product-item" ref={props.inputRef}>
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

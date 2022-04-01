import React from "react";
import ProductInteraction from "./productInteraction";
import "./productItem.scss";

const ProductItem = (props) => {
  function getPrice(size) {
    return this.prices.find((item) => item.size === +size).price;
  }

  const product = { ...props.product, getPrice };

  const contentImg = (
    <img src={product.imageUrl} alt={`Пицца ${product.name.toLowerCase()}`} />
  );
  const contentTitle = (
    <div className="product-item__title">{product.name}</div>
  );

  return (
    <div className="product-item">
      {contentImg}
      {contentTitle}
      <ProductInteraction product={product} />
    </div>
  );
};

ProductItem.propTypes = {};

export default ProductItem;

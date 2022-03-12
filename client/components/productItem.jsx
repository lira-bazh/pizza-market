import React from "react"
import './productItem.scss'

const ProductItem = (props) => {
  return (
    <div className="main-page-product-item">
      <img
        src={props.product.imageUrl}
        alt={`Пицца ${props.product.name.toLowerCase()}`}
      />
      <div className="main-page-product-item__title">{props.product.name}</div>
      <form className="main-page-product-item__settings">
        <div className="type-dough">
          <input
            id={`id${props.product.id}-type-dough__thin`}
            name="type-dough"
            value="thin"
            type="radio"
          />
          <label
            className="type-dough__label"
            htmlFor={`id${props.product.id}-type-dough__thin`}
          >
            Тонкая
          </label>
          <input
            id={`id${props.product.id}-type-dough__fat`}
            name="type-dough"
            type="radio"
            defaultChecked
            value="fat"
          />
          <label
            className="type-dough__label"
            htmlFor={`id${props.product.id}-type-dough__fat`}
          >
            Толстая
          </label>
        </div>
        <div className="main-page-product-item__size"></div>
      </form>
      <div className="main-page-product-item__addBtn"></div>
    </div>
  );
}

ProductItem.propTypes = {};

export default ProductItem;
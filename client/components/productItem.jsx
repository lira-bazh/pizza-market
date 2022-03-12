import React from "react"
import './productItem.scss'

const ProductItem = (props) => {
  return(
    <div className="main-page-product-item">{props.product.name}</div>
  )
}

ProductItem.propTypes = {};

export default ProductItem;
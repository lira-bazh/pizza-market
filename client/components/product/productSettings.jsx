import React from "react"
import "./productSettings.scss";

const ProductSettings = (props) => {
  return (
    <div className="settings">
      {props.children}
    </div>
  )
}

ProductSettings.propTypes = {};

export default ProductSettings;
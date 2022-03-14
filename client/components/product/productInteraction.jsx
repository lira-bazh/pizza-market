import React, { useState } from "react"
import { useSelector } from "react-redux";
import ProductSettingsGroup from "./productSettingsGroup";
import './productInteraction.scss'

const ProductInteraction = (props) => {
  const defaultSettings = useSelector((s) => s.products.defaultPizzaSettings);

  const getDefaultPizzaParam = (defSettings) => {
    const typeArr = defSettings.map((setting) => {
      const value = setting.content.find((item) => item.checked === "true").value
      return {"type": setting.type, "value": value}
    })
    const Obj = typeArr.reduce((acc, item) => {
      return {...acc, [item.type]: item.value}
    }, {})

    return {...Obj, "id": props.product.id, "price": props.product.getPrice(Obj.size)}
  }

  const [pizzaParam, setPizzaParam] = useState(getDefaultPizzaParam(defaultSettings))

  const changeParam = (type, e) => {
    let newPizzaParam = {...pizzaParam, [type]: e.target.value}
    newPizzaParam = {...newPizzaParam, "price": props.product.getPrice(newPizzaParam.size)}
    setPizzaParam(newPizzaParam)
  }

  return(
    <div className="interaction">
        <ProductSettingsGroup product={props.product} default={defaultSettings} change={changeParam}/>
        <div className="interaction__result">
          <div className="interaction__price">
            {props.product.prices[0].price}
          </div>
          <div className="interaction__add">
            <button>Добавить</button>
          </div>
      </div>
    </div>
  )
}

ProductInteraction.propTypes = {};

export default ProductInteraction;
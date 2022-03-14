import React from "react"
import SettingsButton from "./settingsButton";
import "./productSettingsGroup.scss";

const ProductSettingsGroup = (props) => {

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
        <div className="settings" key={`id${props.product.id}-${settingsGroup.type}`}>
          {settingsGroup.content.map((settingsItem) => {
            return (
              <SettingsButton
                key={`id${props.product.id}-${settingsGroup.type}-${settingsItem.value}`}
                type={`id${props.product.id}-${settingsGroup.type}`}
                value={settingsItem.value}
                name={settingsItem.text}
                checked={settingsItem.checked}
                disable={!disableStatus(settingsGroup.type, settingsItem.value)}
                change={(e) => props.change(settingsGroup.type, e)}
              />
            );
          })}
        </div>
      );
    });
  }

  return (
    <div className="interaction__settings">
      {getSettingsComponents(props.default)}
    </div>
  )
}

ProductSettingsGroup.propTypes = {};

export default ProductSettingsGroup;
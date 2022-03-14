import React from "react"
import "./settingsButton.scss";

const SettingsButton = (props) => {
  return (
    <div className="settings-button">
      <input
        id={`${props.type}__${props.value}`}
        name={`${props.type}`}
        value={`${props.value}`}
        type="radio"
        defaultChecked={props.checked === "true"}
        disabled={props.disable}
        onChange={props.change}
      />
      <label htmlFor={`${props.type}__${props.value}`}>{props.name}</label>
    </div>
  );
}

SettingsButton.propTypes = {};

export default SettingsButton;
import React from "react";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import {
  addProductToBasket,
  removeProductFromBasket,
  removeAllProductFromBasket,
} from "../../redux/reducers/products";
import { faPlus, faMinus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './roundButton.scss'

const RoundButton = (props) => {
  const dispatch = useDispatch();

  let buttonContent;
  let action;

  switch (props.type) {
    case "plus": {
      buttonContent = <FontAwesomeIcon icon={faPlus} />;
      action = () => {
        dispatch(addProductToBasket(props.product));
      };
      break;
    }
    case "minus": {
      buttonContent = <FontAwesomeIcon icon={faMinus} />;
      action = () => {
        dispatch(removeProductFromBasket(props.product));
      };
      break;
    }
    case "delete": {
      buttonContent = <FontAwesomeIcon icon={faXmark} />;
      action = () => {
        dispatch(removeAllProductFromBasket(props.product));
      };
      break;
    }
    default: {
      buttonContent = "";
      action = () => {};
      break;
    }
  }

  return (
    <button
      className={classNames("round-button", {
        "round-button_orange": props.type !== "delete",
        "round-button_grey": props.type === "delete",
      })}
      onClick={action}
    >
      {buttonContent}
    </button>
  );
};

RoundButton.propTypes = {};

export default RoundButton;

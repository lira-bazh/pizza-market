import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/reducers/products";
import "./assortment.scss";

const Assortment = () => {
  const dispatch = useDispatch();
  const defaultTypes = useSelector((s) => s.products.defaultTypes);
  const defaultFilter = useSelector((s) => s.products.filter);

  const changeFilter = (e) => {
    dispatch(setFilter(e.target.value));
  }

  return <div className="sort">{defaultTypes.map((item) => {
    return (
      <div className="sort-button" key={item.value}>
        <input
          id={`input-${item.value}`}
          value={item.value}
          name="pizza-type"
          type="radio"
          onChange={changeFilter}
          defaultChecked={item.value === defaultFilter}
        />
        <label htmlFor={`input-${item.value}`}>{item.name}</label>
      </div>
    );
  })}</div>;
};

Assortment.propTypes = {};

export default Assortment;

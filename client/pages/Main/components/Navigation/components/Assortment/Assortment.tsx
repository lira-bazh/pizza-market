import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "@/redux/reducers/products";
import { selectCurrentFilter } from '@/redux/selectors/products';
import { PIZZA_TYPE_NAMES } from '@/constants';
import { EPizzaTypes, AppDispatch } from '@/types';
import styles from "./styles.scss";

export const Assortment = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filterValue = useSelector(selectCurrentFilter);

  const changeFilter = (e) => {
    dispatch(setFilter(e.target.value));
  }

  return (
    <div className={styles.sort}>
      {Object.values(EPizzaTypes).map(type => {
        return (
          <div className={styles['sort-button']} key={type}>
            <input
              id={`input-${type}`}
              value={type}
              type="radio"
              onChange={changeFilter}
              checked={type === filterValue}
            />
            <label htmlFor={`input-${type}`}>{PIZZA_TYPE_NAMES[type]}</label>
          </div>
        );
      })}
    </div>
  );
};

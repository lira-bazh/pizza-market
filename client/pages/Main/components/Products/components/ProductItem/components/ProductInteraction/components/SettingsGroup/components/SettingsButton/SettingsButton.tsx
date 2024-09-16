import React from "react"
import styles from './styles.scss';

interface ISettingsButtonProps {
  type: string;
  value: string;
  name: string;
  checked: boolean;
  disable: boolean;
  change: (value: string) => void;
}

export const SettingsButton = ({ type, value, name, checked, disable, change}: ISettingsButtonProps) => {
  const inputId = `${type}__${value}`

  return (
    <div className={styles['settings-button']}>
      <input
        id={inputId}
        name={type}
        value={value}
        type="radio"
        checked={checked}
        disabled={disable}
        onChange={e => change(e.target.value)}
      />
      <label htmlFor={inputId}>{name}</label>
    </div>
  );
};
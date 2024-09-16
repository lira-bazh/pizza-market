import React from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { faPlus, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addProductToBasket, removeProductFromBasket, removeAllProductFromBasket } from '@/redux/reducers/products';
import { IProductBasket, EActionButtonType, AppDispatch } from '@/types';
import styles from './styles.scss';

interface IActionButtonProps {
  type: EActionButtonType;
  product: IProductBasket;
}

export const ActionButton = ({ type, product }: IActionButtonProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const isRemoveBtn = type === EActionButtonType.REMOVE

  let buttonIcon;
  let action;

  switch (type) {
    case EActionButtonType.PLUS: {
      buttonIcon = faPlus;
      action = addProductToBasket;
      break;
    }
    case EActionButtonType.MINUS: {
      buttonIcon = faMinus;
      action = removeProductFromBasket;
      break;
    }
    case EActionButtonType.REMOVE: {
      buttonIcon = faXmark;
      action = removeAllProductFromBasket;
      break;
    }
  }

  return (
    <button
      className={classNames(
        styles['action-button'],
        isRemoveBtn ? styles['action-button_gray'] : styles['action-button_orange']
      )}
      onClick={() => dispatch(action(product))}
    >
      <FontAwesomeIcon icon={buttonIcon} />
    </button>
  );
};

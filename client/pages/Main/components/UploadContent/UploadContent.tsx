import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uploadProducts } from '@/redux/reducers/products';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { selectProductsAmount, selectstopLoadStatus } from '@/redux/selectors/products';
import { AppDispatch } from '@/types';

import styles from './styles.scss';

const OBSERVER_OPTIONS = {
  root: null,
  threshold: 0.5,
};

export const UploadContent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const amount = useSelector(selectProductsAmount);
  const empty = useSelector(selectstopLoadStatus);
  const endContentRef = useRef(null);
  const additionalClass = empty || !amount ? '_hidden' : '';

  let endContentObserver = new IntersectionObserver((entries, observe) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        dispatch(uploadProducts());
      }
    });
  }, OBSERVER_OPTIONS);

  useEffect(() => {
    if (endContentRef.current) {
      endContentObserver.observe(endContentRef.current);
    }
  }, [endContentRef]);

  useEffect(() => {
    if (endContentRef.current && empty) {
      endContentObserver.unobserve(endContentRef.current);
    }
  }, [empty]);

  return (
    <div className={styles[`upload-content${additionalClass}`]} ref={endContentRef}>
      <FontAwesomeIcon icon={faArrowsRotate} />
    </div>
  );
};

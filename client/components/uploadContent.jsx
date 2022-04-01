import React, { createRef,useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uploadProducts } from "../redux/reducers/products";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./uploadContent.scss";

const UploadContent = () => {
  const dispatch = useDispatch();
  const amountGoods = useSelector((s) => s.products.all.length);
  const optionsObserver = useSelector((s) => s.products.optionsObserver);
  const empty = useSelector((s) => s.products.emptyBase);
  const endContentRef = useRef(null);
  const additionalClass = empty || !amountGoods ? "_hidden" : "";

  let endContentObserver = new IntersectionObserver((entries, observe) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("send data")
        dispatch(uploadProducts());
      }
    });
  }, optionsObserver);

  useEffect(() => {
    if (endContentRef.current) {
      console.log("observe", endContentRef.current);
      endContentObserver.observe(endContentRef.current);
    }
  }, [endContentRef]);

  React.useEffect(() => {
    if (endContentRef.current && empty) {
      console.log("unobserve", empty, endContentRef.current);
      endContentObserver.unobserve(endContentRef.current);
    }
  }, [empty]);

  return (
    <div className={`upload-content${additionalClass}`} ref={endContentRef}>
      <FontAwesomeIcon icon={faArrowsRotate} />
    </div>
  );
};

UploadContent.propTypes = {};

export default UploadContent;

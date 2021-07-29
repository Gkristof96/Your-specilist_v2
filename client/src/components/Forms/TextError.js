import React from "react";
import style from "./Form.module.scss";

const TextError = (props) => {
  return <div className={style.error}>{props.children}</div>;
};

export default TextError;

import React from "react";

const TextError = (props) => {
  return <div className={style.error}>{props.children}</div>;
};

export default TextError;

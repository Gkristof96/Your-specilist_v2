import style from "./RoundedInput.module.scss";

const RoundedInput = (props) => {
  return (
    <label className={style["input-group"]}>
      {props.placeholder}
      {props.children}
    </label>
  );
};

export default RoundedInput;

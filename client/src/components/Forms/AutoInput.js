import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import style from "./Form.module.scss";

const AutoInput = () => {
  const { placeholder, name, items, ...rest } = props;
  return (
    <div className={style["form-control"]}>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest}></Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default AutoInput;

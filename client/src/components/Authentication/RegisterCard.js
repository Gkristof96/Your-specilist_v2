import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import style from "./RegisterCard.module.scss";

import Loader from "../UI/Loader";
import Button from "../UI/Buttons/Button";
import Message from "../UI/Message";
import RoundedInput from "../UI/Inputs/RoundedInput";

import { register } from "../../actions/userActions";

import useInput from "../../hooks/use-input";

const RegisterCard = () => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));
  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput(
    (value) => value.trim() !== "" && value.length > 7 && value.length < 33
  );
  const {
    value: enteredCPassword,
    isValid: cPasswordIsValid,
    hasError: cPasswordHasError,
    valueChangeHandler: cPasswordChangeHandler,
    inputBlurHandler: cPasswordBlurHandler,
    reset: resetCPassowrdInput,
  } = useInput((value) => value.trim() !== "");
  const [message, setMessage] = useState(null);

  const history = useHistory();
  const dispatch = useDispatch();

  let formIsValid = false;

  if (nameIsValid && emailIsValid && passwordIsValid && cPasswordIsValid) {
    formIsValid = true;
  }

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push("/register");
    }
  }, [history, userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    resetNameInput();
    resetEmailInput();
    resetPasswordInput();
    resetCPassowrdInput();
  };

  const closeRegisterHandler = () => {
    history.replace("/");
  };
  return (
    <div className={style["register-card"]}>
      <h1>Regisztráció</h1>
      <FaTimes className={style.icon} onClick={closeRegisterHandler} />
      {message && <Message type="error" message={message} />}
      {error && <Message type="error" message={error} />}
      {loading && <Loader />}
      <form onSubmit={handleSubmit}>
        <RoundedInput placeholder="Név" icon="true">
          <input
            className="bar-input"
            type="text"
            name="name"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
        </RoundedInput>
        {nameHasError && (
          <Message type="error">Kérjük az adatokat helyesen adja meg!</Message>
        )}
        <RoundedInput placeholder="Email" icon="true">
          <input
            className="bar-input"
            type="email"
            name="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
        </RoundedInput>
        {emailHasError && (
          <Message type="error">Kérjük az adatokat helyesen adja meg!</Message>
        )}
        <RoundedInput placeholder="Jelszó" icon="true">
          <input
            className="bar-input"
            type="password"
            name="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
        </RoundedInput>
        {passwordHasError && (
          <Message type="error">Kérjük az adatokat helyesen adja meg!</Message>
        )}
        <RoundedInput placeholder="Jelszó ismét">
          <input
            className="bar-input"
            type="password"
            name="cpassword"
            value={enteredCPassword}
            onChange={cPasswordChangeHandler}
            onBlur={cPasswordBlurHandler}
          />
        </RoundedInput>
        {cPasswordHasError && (
          <Message type="error">Kérjük az adatokat helyesen adja meg!</Message>
        )}
        <Button disabled={!formIsValid} type="submit">
          Regisztráció
        </Button>
      </form>
      <p>
        Van már felhasználód? <Link to="/auth/login">Jelentkez be</Link>
      </p>
    </div>
  );
};

export default RegisterCard;

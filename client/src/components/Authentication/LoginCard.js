import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import style from "./LoginCard.module.scss";

import Loader from "../UI/Loader";
import Message from "../UI/Message";
import Button from "../UI/Buttons/Button";
import RoundedInput from "../UI/Inputs/RoundedInput";

import { login } from "../../actions/userActions";

const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/profile");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const closeLoginHandler = () => {
    history.replace("/");
  };

  return (
    <div className={style["login-card"]}>
      <h1>Bejelentkezés</h1>
      <FaTimes className={style.icon} onClick={closeLoginHandler} />
      {error && <Message type="error" message={error} />}
      {loading && <Loader />}
      <form onSubmit={submitHandler}>
        <RoundedInput placeholder="Email">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </RoundedInput>
        <RoundedInput placeholder="Jelszó">
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </RoundedInput>
        {/*<div className='login-settings'>
                    <label>
                        <input type='checkbox' />
                        <span>Emlékezz rám!</span>
                    </label>
                    <Link to='/'>
                        elfelejtett jelszó
                    </Link>
                </div>*/}

        <Button type="submit">Bejelentkezés</Button>
      </form>
      <p>
        Nincs még felhasználód? <Link to="/auth/signup">Regisztrálj</Link> most!
      </p>
    </div>
  );
};

export default LoginCard;

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

const RegisterCard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [message, setMessage] = useState(null);

  const history = useHistory();
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push("/register");
    }
  }, [history, userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
      setMessage("");
    }
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
        <RoundedInput placeholder="Név">
          <input
            className="bar-input"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </RoundedInput>
        <RoundedInput placeholder="Email">
          <input
            className="bar-input"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </RoundedInput>
        <RoundedInput placeholder="Jelszó">
          <input
            className="bar-input"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </RoundedInput>
        <RoundedInput placeholder="Jelszó ismét">
          <input
            className="bar-input"
            type="password"
            name="cpassword"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            required
          />
        </RoundedInput>
        <Button type="submit">Regisztráció</Button>
      </form>
      <p>
        Van már felhasználód? <Link to="/auth/login">Jelentkez be</Link>
      </p>
    </div>
  );
};

export default RegisterCard;

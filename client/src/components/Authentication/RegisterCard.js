import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import style from "./RegisterCard.module.scss";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import Loader from "../UI/Loader";
import Button from "../UI/Buttons/Button";
import Message from "../UI/Message";
import FormControl from "../Forms/FormControl";

import { register } from "../../actions/userActions";
import { oneOf } from "prop-types";

const RegisterCard = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    cPassword: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Kötelező kitölteni!"),
    email: Yup.string()
      .email("Nem megfelelő email formátum")
      .required("Kötelező kitölteni!"),
    password: Yup.string().required("Kötelező kitölteni!"),
    cPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "A két jelszó nem egyezik")
      .required("Kötelező kitölteni!"),
  });
  const onSubmit = (values) => console.log("Form data", values);
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
  };

  const closeRegisterHandler = () => {
    history.replace("/");
  };
  return (
    <div className={style["register-card"]}>
      <h1>Regisztráció</h1>
      <FaTimes className={style.icon} onClick={closeRegisterHandler} />
      {error && <Message type="error" message={error} />}
      {loading && <Loader />}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <FormControl
              control="input"
              type="text"
              label="Teljes név"
              name="name"
            />
            <FormControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormControl
              control="input"
              type="password"
              label="Jelszó"
              name="password"
            />
            <FormControl
              control="input"
              type="password"
              label="Jelszó ismét"
              name="cPassword"
            />

            <Button type="submit">Küldés</Button>
          </Form>
        )}
      </Formik>
      <p>
        Van már felhasználód? <Link to="/auth/login">Jelentkez be</Link>
      </p>
    </div>
  );
};

export default RegisterCard;

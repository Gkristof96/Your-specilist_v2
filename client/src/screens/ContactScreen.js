import { Fragment, useState } from "react";
import axios from "axios";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import style from "./ContactScreen.module.scss";

import Modal from "../components/UI/Modal";
import Loader from "../components/UI/Loader";
import ImageBackground from "../components/UI/ImageBackground";
import Card from "../components/UI/Card";
import Button from "../components/UI/Buttons/Button";
import FormControl from "../components/Forms/FormControl";

const ContactScreen = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Kötelező kitölteni!"),
    email: Yup.string()
      .email("Nem megfelelő email formátum")
      .required("Kötelező kitölteni!"),
    message: Yup.string().required("Kötelező kitölteni!"),
  });
  const onSubmit = (values) => console.log("Form data", values);
  const [isModalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    setModalOpen(true);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post("/api/email", {}, config);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const closeModalHandler = () => setModalOpen(false);

  return (
    <Fragment>
      {isModalOpen && (
        <Modal onClose={closeModalHandler}>
          {loading && <Loader size="large" />}
          {!loading && (
            <Fragment>
              <h1>Köszönjük a levelet!</h1>
              <p>Igyekszünk minél előbb válaszolni.</p>
              <Button onClick={closeModalHandler}>Ok</Button>
            </Fragment>
          )}
        </Modal>
      )}

      <ImageBackground className="small-bg" />
      <Card>
        <div className={style.leftbar}>
          <h1>Írj nekünk!</h1>
          <p>
            Ha bármi kérdésed lenne felénk, vagy csak a testszésed szeretnéd
            tudtunkra adni, ragad meg a lehetőséget és írj nekünk egy levelet,
            vagy keres meg minket a lent található elérhetőségek valamelyikén,
            vagy az itt található űrlap segítségével
          </p>
          <ul>
            <li>
              <FaPhoneAlt className={style.icon} />
              contact@yourspecialist.hu
            </li>
            <li>
              <FaEnvelope className={style.icon} />
              06 1 456 345
            </li>
            <li>
              <FaMapMarkerAlt className={style.icon} />
              Budapest
            </li>
          </ul>
        </div>
        <div className={style.rightbar}>
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
                <FormControl control="textarea" label="Üzenet" name="message" />
                <Button type="submit">Küldés</Button>
              </Form>
            )}
          </Formik>
        </div>
      </Card>
    </Fragment>
  );
};

export default ContactScreen;

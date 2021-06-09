import { Fragment, useState } from "react";
import axios from "axios";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import style from "./ContactScreen.module.scss";

import FlatInput from "../components/UI/FlatInput";
import Modal from "../components/UI/Modal";
import Loader from "../components/UI/Loader";
import ImageBackground from "../components/UI/ImageBackground";
import Card from "../components/UI/Card";
import Button from "../components/UI/Buttons/Button";

const ContactScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
      await axios.post("/api/email", { name, email, message }, config);
      setLoading(false);
      setName("");
      setEmail("");
      setMessage("");
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
          <form onSubmit={submitHandler}>
            <FlatInput placeholder="Név">
              <input
                type="text"
                name="name"
                autoComplete="off"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FlatInput>
            <FlatInput placeholder="Email">
              <input
                type="text"
                name="email"
                required
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FlatInput>
            <FlatInput placeholder="Üzenet" high>
              <textarea
                name="message"
                required
                autoComplete="off"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FlatInput>

            <Button type="submit">Küldés</Button>
          </form>
        </div>
      </Card>
    </Fragment>
  );
};

export default ContactScreen;

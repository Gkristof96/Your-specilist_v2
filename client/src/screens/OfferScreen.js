import { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOffer } from "../actions/offerActions";

import ImageBackground from "../components/UI/ImageBackground";
import Card from "../components/UI/Card";
import style from "./OfferScreen.module.scss";
import Button from "../components/UI/Buttons/Button";
import HeroText from "../components/UI/HeroText";
import Modal from "../components/UI/Modal";
import FlatInput from "../components/UI/FlatInput";
import Loader from "../components/UI/Loader";

const OfferScreen = () => {
  const [isModalOpen, SetModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [profession, setProfession] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const offerCreate = useSelector((state) => state.offerCreate);
  const { success, loading } = offerCreate;

  useEffect(() => {
    if (success) {
      setName("");
      setEmail("");
      setCity("");
      setProfession("");
      setDescription("");
    }
  }, [success, dispatch]);

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(createOffer({ name, email, city, profession, description }));
    SetModalOpen(true);
  };

  const closeModalHandler = () => SetModalOpen(false);
  return (
    <>
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
      <ImageBackground className="large-bg">
        <HeroText>
          <h1>Nem akarsz keresgélni?</h1>
          <p>
            Ebben az esetben adj fel egy megbízást, és majd egy szakember
            megkeres az ajánlatával
          </p>
        </HeroText>
      </ImageBackground>
      <Card flexstart>
        <div className={style.leftbar}>
          <h1>Kérj árajánlatot!</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
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
                autoComplete="off"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FlatInput>
            <FlatInput placeholder="Város">
              <input
                type="text"
                name="city"
                autoComplete="off"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </FlatInput>
            <FlatInput placeholder="Szakma">
              <input
                type="text"
                name="profession"
                autoComplete="off"
                required
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
              />
            </FlatInput>
            <FlatInput placeholder="Munka leírása" high>
              <textarea
                name="description"
                autoComplete="off"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FlatInput>
            <Button type="submit">Küldés</Button>
          </form>
        </div>
      </Card>
    </>
  );
};

export default OfferScreen;

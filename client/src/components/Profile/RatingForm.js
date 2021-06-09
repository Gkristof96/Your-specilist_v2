import { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import style from "./RatingForm.module.scss";

import Button from "../UI/Buttons/Button";
import RoundedInput from "../UI/Inputs/RoundedInput";
import Modal from "../UI/Modal";
import Loader from "../UI/Loader";

import { createProviderReview } from "../../actions/providerActions";

const RatingForm = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("");
  const [message, setMessage] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const providerReviewCreate = useSelector(
    (state) => state.providerReviewCreate
  );
  const { success, loading } = providerReviewCreate;

  useEffect(() => {
    if (success) {
      setName("");
      setEmail("");
      setRating("");
      setMessage("");
    }
  }, [dispatch, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProviderReview(props.id, {
        name,
        email,
        rating,
        message,
      })
    );
    setModalOpen(true);
  };
  const closeModalHandler = () => {
    setModalOpen(false);
    history.push(`/provider/${props.id}`);
  };
  return (
    <Fragment>
      {isModalOpen && (
        <Modal onClose={closeModalHandler}>
          {loading && <Loader size="large" />}
          {!loading && (
            <Fragment>
              <h1>Értékelés rögzítve!</h1>
              <p>
                Köszönjük hogy értékelted a szakemberünk, reméljük megvoltál
                elégedve a munkájával.
              </p>
              <Button onClick={closeModalHandler}>Ok</Button>
            </Fragment>
          )}
        </Modal>
      )}
      <div className={style.rating}>
        <h3>Értékelés</h3>
        <form onSubmit={submitHandler}>
          <RoundedInput placeholder="Név">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </RoundedInput>
          <RoundedInput placeholder="Email">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </RoundedInput>
          <RoundedInput placeholder="Értékelés">
            <select
              id="cars"
              name="cars"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option value="1">1 csillag </option>
              <option value="2">2 csillag </option>
              <option value="3">3 csillag </option>
              <option value="4">4 csillag </option>
              <option value="5">5 csillag </option>
            </select>
          </RoundedInput>

          <RoundedInput placeholder="Üzenet">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </RoundedInput>
          <Button type="submit">Küldés</Button>
        </form>
      </div>
    </Fragment>
  );
};

export default RatingForm;

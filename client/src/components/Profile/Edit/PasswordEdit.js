import { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "./PasswordEdit.module.scss";

import Button from "../../UI/Buttons/Button";
import Loader from "../../UI/Loader";
import Modal from "../../UI/Modal";

import { getUserData, changePassword } from "../../../actions/userActions";

const PasswordEdit = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const userDetail = useSelector((state) => state.userDetail);
  const { provider } = userDetail;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userChangePassword = useSelector((state) => state.userChangePassword);
  const { success, loading } = userChangePassword;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      dispatch(getUserData(userInfo._id));
      if (success) {
        setPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }
    }
  }, [dispatch, userInfo, success, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
    } else {
      dispatch(changePassword({ password, newPassword }));
      setModalOpen(true);
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
              <h1>Jelszó változtatás sikeres!</h1>
              <p>Legközelebb már az új jelszavaddal tudsz bejelentkezni.</p>
              <Button onClick={closeModalHandler}>Ok</Button>
            </Fragment>
          )}
        </Modal>
      )}
      <form onSubmit={submitHandler} className={style["edit-form"]}>
        <img src={provider.image} alt={provider.name} />
        <h1>{provider.name}</h1>
        <label>Régi Jelszó</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Új Jelszó</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <label>Új Jelszó újra</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button type="submit">Mentés</Button>
      </form>
    </Fragment>
  );
};

export default PasswordEdit;

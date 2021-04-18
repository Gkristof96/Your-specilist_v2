import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import EditMenu from "../../components/EditMenu";

const DeleteProfileScreen = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  }, [history, userInfo]);
  return (
    <>
      <section className="background small-bg"></section>
      <section className="edit content">
        <div className="white-container">
          <div className="edit-menu">
            <EditMenu />
          </div>
          <div className="delete-card">
            <h1>Jelenleg nincs még lehetőség a felhasználó törlésére</h1>
            <p>
              Ha törölni szeretnéd a fiókod megvan rá a lehetőséged. De mielőtt
              ezt megtennéd arra kérünk jól fontold meg a döntésed mert ha ezt
              megteszed a felhasználod végleg törlésre kerül.
            </p>
            <p>
              A felhasználód törléséhez kérlek ad meg a jelszavad biztonsági
              okolból
            </p>
            <form>
              <label>Jelszó</label>
              <input type="password" />
              <button type="submit">Törlés</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeleteProfileScreen;

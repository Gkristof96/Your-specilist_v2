import { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import style from "./ProfessionDataEdit.module.scss";

import AutocompleteInput from "../../SearchBar/AutocompleteInput";
import ProfessionBadge from "../../Professions/ProfessionBadge";
import Button from "../../UI/Buttons/Button";

import { getUserData } from "../../../actions/userActions";
import { addProfession } from "../../../actions/providerActions";
import { getProfessionData } from "../../../actions/searchActions";

const ProfessionDataEdit = () => {
  const [profession, setProfession] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const providerAddProfession = useSelector(
    (state) => state.providerAddProfession
  );
  const { success } = providerAddProfession;

  const getProfession = useSelector((state) => state.getProfession);
  const { professions } = getProfession;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDetail = useSelector((state) => state.userDetail);
  const { provider } = userDetail;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      dispatch(getProfessionData());
      dispatch(getUserData(userInfo._id));
      if (success) {
        setProfession("");
      }
    }
  }, [success, dispatch, userInfo, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addProfession({ profession }));
  };
  return (
    <Fragment>
      <p>
        Itt tudsz hozzáadni új szakmákat a profilodhoz, vagy törölni is tudod a
        már mentett szakmáidat ha azt szeretnéd.
      </p>
      <h1>Szakmák</h1>
      <div className={style["profession-container"]}>
        {provider.professions.map((profession, index) => (
          <ProfessionBadge professionName={profession.name} key={index} />
        ))}
      </div>
      <form onSubmit={submitHandler}>
        <label className={style.text}>Adj hozzá új szakmát</label>
        <AutocompleteInput
          setInput={setProfession}
          items={professions}
          placeholder="Szakma"
          value={profession}
          size="small"
        />
        <Button type="submit">Hozzáad</Button>
      </form>
    </Fragment>
  );
};

export default ProfessionDataEdit;

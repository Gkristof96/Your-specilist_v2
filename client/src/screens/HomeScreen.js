import { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import style from "./HomeScreen.module.scss";

import ImageBackground from "../components/UI/ImageBackground";
import SearchBar from "../components/SearchBar/SearchBar";
import ProfessionList from "../components/Professions/ProfessionList";
import ProfessionCategoryCard from "../components/Professions/ProfessionCategoryCard";
import HeroText from "../components/UI/HeroText";
import Loader from "../components/UI/Loader";

import { getCategoryData } from "../actions/searchActions";

const HomeScreen = () => {
  const [showList, setShowList] = useState(false);
  const [listData, setListData] = useState({});

  const history = useHistory();
  const dispatch = useDispatch();

  const getCategory = useSelector((state) => state.getCategory);
  const { loading, categories } = getCategory;

  useEffect(() => {
    dispatch(getCategoryData());
  }, [dispatch]);

  const toggleProfessionListHandler = (id) => {
    const data = categories.find((data) => data._id === id);
    setListData(data);
    setShowList(true);
  };

  const searchProvidersHandler = (city, profession) => {
    history.push(`/providers?city=${city}&profession=${profession}`);
  };

  return (
    <Fragment>
      <ImageBackground className="large-bg">
        <HeroText>
          <h1 className="">Hiába keresel nem találsz szakembert?</h1>
          <p>
            Tégy egy probát nálunk, garantáljuk hogy itt megtalálod azt mester
            akire most szükséged van
          </p>
        </HeroText>
        <SearchBar onSearchProviders={searchProvidersHandler} />
      </ImageBackground>
      <section className={style["category-content"]}>
        <h1 className={style["category-title"]}>Szakma Kategóriák</h1>
        <p>
          Amenyiben csak szakmák szerint szeretnél keresni, itt megtalálod
          kategóriákba sorolva a szakmákat amiket megtalálhatsz az oldalon. A
          kategóriák bőveb áttekintéséért kattints a kategória képére.
        </p>
        {loading ? (
          <Loader size="large" />
        ) : showList ? (
          <ProfessionList data={listData} setShowList={setShowList} />
        ) : (
          <div className={style["profession-container"]}>
            {categories.map((data, index) => (
              <ProfessionCategoryCard
                onToggleProfessionList={toggleProfessionListHandler}
                category={data}
                key={index}
              />
            ))}
          </div>
        )}
      </section>
    </Fragment>
  );
};

export default HomeScreen;

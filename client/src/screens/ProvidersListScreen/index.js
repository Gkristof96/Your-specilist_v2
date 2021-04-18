import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";

import Paginate from "../../components/Paginate";
import ProviderCard from "../../components/ProviderCard";
import AutocompleteInput from "../../components/AutocompleteInput";
import Loader from "../../components/Loader";
import Message from "../../components/Message";

import { listProviders } from "../../actions/providerActions";
import { getCityData, getProfessionData } from "../../actions/searchActions";

const ProvidersListScreen = ({ match }) => {
  const [city, setCity] = useState(match.params.city ? match.params.city : "");
  const [profession, setProfession] = useState(
    match.params.profession ? match.params.profession : ""
  );
  const [keyword, setKeyword] = useState({
    city: city,
    profession: profession,
  });

  const pageNumber = match.params.pageNumber;

  const dispatch = useDispatch();

  const providerList = useSelector((state) => state.providerList);
  const { loading, error, providers, pages, page } = providerList;

  const getCity = useSelector((state) => state.getCity);
  const { cities } = getCity;

  const getProfession = useSelector((state) => state.getProfession);
  const { professions } = getProfession;

  useEffect(() => {
    dispatch(getCityData());
    dispatch(getProfessionData());
    dispatch(listProviders(pageNumber, keyword));
  }, [dispatch, pageNumber, keyword]);

  const handleSearch = () => {
    setKeyword({ city: city, profession: profession });
  };
  return (
    <>
      <section className="background large-bg">
        <div className="text-container">
          <h1 className="text-container__title">
            Hiába keresel nem találsz szakembert?
          </h1>
          <p className="text-container__subtitle">
            Tégy egy probát nálunk, garantáljuk hogy itt megtalálod azt mester
            akire most szükséged van
          </p>
        </div>
        <div className="search-bar">
          <AutocompleteInput
            setInput={setCity}
            items={cities}
            placeholder="Települések"
            value={city}
          />
          <AutocompleteInput
            setInput={setProfession}
            items={professions}
            placeholder="Szakma"
            value={profession}
          />
          <span onClick={handleSearch}>
            <FaSearch className="icon" />
          </span>
        </div>
      </section>
      <section className="providers content">
        <div className="transparent-container">
          {loading ? (
            <Loader size="large" />
          ) : error ? (
            <Message margin="large" type="error" message={error} />
          ) : (
            <>
              {providers.map((provider, index) => (
                <ProviderCard key={index} provider={provider} />
              ))}
            </>
          )}
          {pages > 1 && (
            <Paginate pages={pages} page={page} keyword={keyword} />
          )}
        </div>
      </section>
    </>
  );
};

export default ProvidersListScreen;

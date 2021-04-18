import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaAward,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import Rating from "../../components/Rating";
import ProfessionBadge from "../../components/ProfessionBadge";
import Loader from "../../components/Loader";
import Message from "../../components/Message";

import { listProviderData } from "../../actions/providerActions";

const ProviderScreen = ({ match }) => {
  const dispatch = useDispatch();

  const id = match.params.id;

  const providerData = useSelector((state) => state.providerData);
  const { loading, error, provider } = providerData;

  useEffect(() => {
    if (!provider._id || provider._id !== id) {
      dispatch(listProviderData(id));
    }
  }, [dispatch, id, provider._id]);

  return (
    <>
      <section className="background medium-bg"></section>
      <section className="profile content">
        <div className="white-container">
          {error && <Message message={error} type="error" />}
          {loading ? (
            <Loader size="large" />
          ) : (
            <>
              <img
                className="profile-image"
                src={provider.image}
                alt={provider.name}
              />
              <div className="button-container">
                <Link to="" className="circle-btn">
                  <span className="btn-text">Hamarosan!</span>
                  <div className="icon-wrapper">
                    <MdLocalOffer className="icon" />
                  </div>
                </Link>
                <Link to={`/provider/${id}/rating`} className="circle-btn">
                  <span className="btn-text">Értékeld a munkám</span>
                  <div className="icon-wrapper">
                    <FaAward className="icon" />
                  </div>
                </Link>
              </div>
              <div className="profile-header">
                <h1>{provider.name}</h1>
                <Rating
                  value={provider.rating}
                  numReviews={provider.numReviews}
                />
              </div>
              <div className="contact-info">
                <h2>
                  <FaMapMarkerAlt className="icon" />
                  Hungary, {provider.city}
                </h2>
                <h2>
                  <FaEnvelope className="icon" />
                  {provider.email}
                </h2>
                <h2>
                  <FaPhoneAlt className="icon" />
                  {provider.tel}
                </h2>
              </div>
              <div className="profession-bar">
                {provider.professions.map((profession, index) => (
                  <ProfessionBadge profession={profession} key={index} />
                ))}
              </div>
              <div className="description">
                <h3>Bemutatkozás</h3>
                {provider.bio ? (
                  <p>{provider.bio}</p>
                ) : (
                  <p>Ez a szakember még nem töltött fel bemutatkozást!</p>
                )}
              </div>
              <div className="gallery">
                <h3>Galléria</h3>
                {provider.gallery.length > 0 ? (
                  <p>{provider.bio}</p>
                ) : (
                  <p>Ez a szakember még nem töltött fel képeket!</p>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default ProviderScreen;

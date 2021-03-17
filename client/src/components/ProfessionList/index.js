import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProfessionList = ({ data, setShowList }) => {
  const { category, professionList } = data;
  return (
    <>
        <FaArrowAltCircleLeft
          className="back-arrow"
          onClick={() => setShowList(false)}
        />
        <h1 className="title">{`${category} Kategória Szakmái`}</h1>
        <div className="professions-list">
          {professionList.map((data, i) => (
            <Link
              className="profession-item"
              to={`/providerslist?profession=${data}`}
              key={i}
            >
              {data}
            </Link>
          ))}
        </div>
    </>
  );
};

export default ProfessionList;
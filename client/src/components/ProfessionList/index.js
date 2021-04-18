import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProfessionList = ({ data, setShowList = false }) => {
  const { category, professionList } = data;
  return (
    <div className="profession-list">
      <FaArrowAltCircleLeft
        className="back-arrow"
        onClick={() => setShowList(false)}
      />
      <h1 className="title">{`${category} Kategória Szakmái`}</h1>
      <div className="professions">
        {professionList.map((data, i) => (
          <Link
            className="profession-item"
            to={`/providers/search/${data}`}
            key={i}
          >
            {data}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProfessionList;

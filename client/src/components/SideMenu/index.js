import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";

const SideMenu = ({ isMenuOpen, handleOpen }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <ul className={`sidemenu ${isMenuOpen && "open"}`} onClick={handleOpen}>
      <li>
        <NavLink activeClassName="active" exact={true} to="/">
          Főoldal
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/providers">
          Szakemberek
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/offer">
          Ajánlatkérés
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/contact">
          Kapcsolat
        </NavLink>
      </li>
      {userInfo ? (
        <li>
          <Link to="/profile">
            <img src={userInfo.image} alt={userInfo.name} />
            <span>{userInfo.name}</span>
          </Link>
        </li>
      ) : (
        <li>
          <Link to="/login">Bejelenkezés</Link>
        </li>
      )}
    </ul>
  );
};

export default SideMenu;

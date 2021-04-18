import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Hamburger from "../Hamburger";
import { NavLink, Link } from "react-router-dom";
import ProfileButton from "../ProfileButton";
import { logout } from "../../actions/userActions";

const Navbar = ({ isMenuOpen, handleOpen }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <nav className={`navbar ${isMenuOpen && "open"}`}>
      <Link to="/" className="navbar__logo">
        <img src="/images/logo.png" alt="logo" />
        <h1>Your Specialist</h1>
      </Link>

      <ul>
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
            <ProfileButton userInfo={userInfo} logoutHandler={logoutHandler} />
          </li>
        ) : (
          <li>
            <Link to="/login">Bejelenkezés</Link>
          </li>
        )}
      </ul>

      <div className="navbar__toggle">
        <Hamburger isMenuOpen={isMenuOpen} handleOpen={handleOpen} />
      </div>
    </nav>
  );
};

export default Navbar;

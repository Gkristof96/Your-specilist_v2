import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import ProfileButton from '../ProfileButton'
import { logout } from '../../actions/userActions'


const SideMenu = ({isMenuOpen, handleOpen}) => {
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }
    return (
        <ul className={`sidemenu ${isMenuOpen && 'open'}`} onClick={handleOpen}>
            <li><NavLink activeClassName='active' exact={true} to='/'>Főoldal</NavLink></li>
            <li><NavLink activeClassName='active' to='/providers'>Szakemberek</NavLink></li>
            <li><NavLink activeClassName='active' to='/offer'>Ajánlatkérés</NavLink></li>
            <li><NavLink activeClassName='active' to='/contact'>Kapcsolat</NavLink></li>
            {userInfo ? (
                <li>
                    <Link to='/profile'>
                    <img src={userInfo.image} alt={userInfo.name} />
                        <span>
                            {userInfo.name}
                        </span>
                    </Link>
                </li>
                ) : (
                    <li><Link to='/login'>Bejelenkezés</Link></li>
                )}
        </ul>
    )
}

export default SideMenu

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Hamburger from '../Hamburger'
import { Link } from 'react-router-dom'

const Navbar = ({isMenuOpen, handleOpen}) => {
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    return (
        <nav className={`navbar ${isMenuOpen && 'open'}`}>
            <Link to='/' className='navbar__logo'>
                <img src='/images/logo.png' alt='logo'/>
                <h1>Your Specialist</h1>
            </Link>

            <ul>
                <li><Link to='/providers'>Szakemberek</Link></li>
                <li><Link to='/offer'>Ajánlatkérés</Link></li>
                <li><Link to='/contact'>Kapcsolat</Link></li>
                {userInfo ? (
                    <li className='profile-button'><Link to='/profile'><img src={userInfo.image} alt={userInfo.name}/>{userInfo.name}</Link></li>
                    ) : (
                    <>
                        <li><Link to='/login'>Bejelenkezés</Link></li>
                    </>
                    )}
            </ul>

            <div className='navbar__toggle'>
                <Hamburger isMenuOpen={isMenuOpen} handleOpen={handleOpen} />
            </div>
        </nav>
    )
}

export default Navbar

import React from 'react'
import Hamburger from '../Hamburger'
import { Link } from 'react-router-dom'

const index = ({isMenuOpen, handleOpen}) => {
    return (
        <nav className={`navbar ${isMenuOpen && 'open'}`}>
            <Link to='/' className='navbar__logo'>
                <img src='images/logo.png' alt='logo'/>
                <h1>Your Specialist</h1>
            </Link>

            <ul>
                <li>Szakemberek</li>
                <li>Ajánlatkérés</li>
                <li>Kapcsolat</li>
                <li>Bejelentkezés</li>
            </ul>

            <div className='navbar__toggle'>
                <Hamburger isMenuOpen={isMenuOpen} handleOpen={handleOpen} />
            </div>
        </nav>
    )
}

export default index

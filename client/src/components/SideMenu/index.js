import React from 'react'
import { Link } from 'react-router-dom'

const SideMenu = ({isMenuOpen, handleOpen}) => {
    return (
        <ul className={`sidemenu ${isMenuOpen && 'open'}`} onClick={handleOpen}>
            <li onClick={handleOpen}><Link to='/offer'>Ajánlatkérés</Link></li> 
            <li onClick={handleOpen}><Link to='contact'>Rólunk</Link></li> 
            <li onClick={handleOpen}>Bejelentkezés</li>
        </ul>
    )
}

export default SideMenu

import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const EditMenu = () => {
    return (
        <>
            <NavLink 
                to='/profile/edit'
                activeClassName='active'
                className='link-btn'
            >Profil beállítása</NavLink>
            <NavLink 
                activeClassName='active'
                to='/profile/password/change'
                className='link-btn'
            >Jelszó csere</NavLink>
            <NavLink 
                activeClassName='active'
                to='/profile/professions'
                className='link-btn'
            >Szakmai adatok</NavLink>
            {/*<NavLink 
                activeClassName='active'
                to='/profile/gallery/upload'
                className='link-btn'
            >Galléria feltöltése</NavLink>
            <NavLink 
                activeClassName='active'
                to='/profile/delete'
                className='link-btn'
            >Felhasználó törlése</NavLink>*/}
            <Link 
                to='/profile' 
                className='link-btn'
            >Vissza a profilodhoz</Link>
        </>
    )
}

export default EditMenu

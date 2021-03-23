import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const EditMenu = () => {
    return (
        <>
            <NavLink 
                to='/profile/edit'
                activeClassName='active'
            >Profil beállítása</NavLink>
            <NavLink 
                activeClassName='active'
                to='/profile/password/change'
            >Jelszó csere</NavLink>
            <NavLink 
                activeClassName='active'
                to='/profile/professions'
            >Szakmai adatok</NavLink>
            <NavLink 
                activeClassName='active'
                to='/profile/gallery/upload'
            >Galléria feltöltése</NavLink>
            <NavLink 
                activeClassName='active'
                to='/profile/delete'
            >Felhasználó törlése</NavLink>
            <Link to='/profile'>Vissza a profilodhoz</Link>
        </>
    )
}

export default EditMenu

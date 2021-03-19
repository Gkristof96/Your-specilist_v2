import React from 'react'
import { Link } from 'react-router-dom'

const EditMenu = ({match}) => {
    return (
        <>
            <Link className={match.path === '/profile/edit' && 'active'} to='/profile/edit'>Profil beállítása</Link>
            <Link className={match.path === '/profile/password/change' && 'active'} to='/profile/password/change'>Jelszó csere</Link>
            <Link className={match.path === '/profile/professions' && 'active'} to='/profile/professions'>Szakmai adatok</Link>
            <Link className={match.path === '/profile/gallery/upload' && 'active'} to='/profile/gallery/upload'>Galléria feltöltése</Link>
            <Link className={match.path === '/profile/delete' && 'active'} to='/profile/delete'>Felhasználó törlése</Link>
        </>
    )
}

export default EditMenu

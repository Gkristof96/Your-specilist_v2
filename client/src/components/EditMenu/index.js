import React from 'react'
import { Link } from 'react-router-dom'

const EditMenu = ({match}) => {
    return (
        <>
            <Link className={(match.path === '/profile/edit') ? 'active' : null} to='/profile/edit'>Profil beállítása</Link>
            <Link className={(match.path === '/profile/password/change') ? 'active' : null} to='/profile/password/change'>Jelszó csere</Link>
            <Link className={(match.path === '/profile/professions') ? 'active' : null} to='/profile/professions'>Szakmai adatok</Link>
            <Link className={(match.path === '/profile/gallery/upload') ? 'active' : null} to='/profile/gallery/upload'>Galléria feltöltése</Link>
            <Link className={(match.path === '/profile/delete') ? 'active' : null} to='/profile/delete'>Felhasználó törlése</Link>
        </>
    )
}

export default EditMenu

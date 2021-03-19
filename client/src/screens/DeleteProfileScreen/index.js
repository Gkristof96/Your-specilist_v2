import React from 'react'
import EditMenu from '../../components/EditMenu'

const DeleteProfileScreen = ({match}) => {
    return (
        <>
            <section className='edit-background'></section>
            <section className='edit-content'>
                <div className='container'>
                        <div className='edit-menu'>
                            <EditMenu match={match}/>
                        </div>
                        <div className='delete-card'>
                            <p>Ha törölni szeretnéd a fiókod megvan rá a lehetőséged. De mielőtt ezt megtennéd arra kérünk jól fontold meg a döntésed mert ha ezt megteszed a felhasználod végleg törlésre kerül.</p>
                            <p>A felhasználód törléséhez kérlek ad meg a jelszavad biztonsági okolból</p>
                            <form>
                                <label>Jelszó</label>
                                <input type='password' />
                                <button type='submit'>Törlés</button>
                            </form>
                        </div>
                </div>
            </section>
        </>
    )
}

export default DeleteProfileScreen

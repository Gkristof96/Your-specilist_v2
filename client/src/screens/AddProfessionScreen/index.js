import React from 'react'
import EditMenu from '../../components/EditMenu'

const AddProfessionScreen = ({match}) => {
    return (
        <>
            <section className='edit-background'></section>
            <section className='edit-content'>
                <div className='container'>
                        <div className='edit-menu'>
                            <EditMenu match={match}/>    
                        </div>
                        <div className='add-profession-card'>
                            <p>Itt tudsz hozzáadni új szakmákat a profilodhoz, vagy törölni is tudod a már mentett szakmáidat ha azt szeretnéd.</p>
                            <div className='profession-container'>
                                <h1>Szakmák</h1>
                            </div>
                            <form>
                                <label>Adj hozzá új szakmát</label>
                                <input type='text' />
                                <button type='submit'>Hozzáad</button>
                            </form>
                        </div>
                </div>
            </section>
        </>
    )
}

export default AddProfessionScreen

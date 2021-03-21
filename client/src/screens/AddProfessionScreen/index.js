import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EditMenu from '../../components/EditMenu'
import AutocompleteInput from '../../components/AutocompleteInput'
import { addProfession } from '../../actions/providerActions'
import { getProfessionData } from '../../actions/searchActions' 


const AddProfessionScreen = ({match}) => {
    const [profession, setProfession] = useState('')

    const dispatch = useDispatch()

    const providerAddProfession = useSelector(state => state.providerAddProfession)
    const { success } = providerAddProfession

    const getProfession = useSelector(state => state.getProfession)
    const { professions } = getProfession

    useEffect(() => {
        dispatch(getProfessionData())
        if(success) {
            setProfession('')
        }
    }, [success, dispatch])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(addProfession({profession}))
    }
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
                            <form onSubmit={submitHandler}>
                                <label>Adj hozzá új szakmát</label>
                                <AutocompleteInput
                                    setInput={setProfession}
                                    items={professions}
                                    placeholder='Szakma'
                                    value={profession}
                                />
                                <button type='submit'>Hozzáad</button>
                            </form>
                        </div>
                </div>
            </section>
        </>
    )
}

export default AddProfessionScreen

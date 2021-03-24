import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import EditMenu from '../../components/EditMenu'
import AutocompleteInput from '../../components/AutocompleteInput'
import ProfessionBadge from '../../components/ProfessionBadge'

import { getUserData } from '../../actions/userActions'
import { addProfession } from '../../actions/providerActions'
import { getProfessionData } from '../../actions/searchActions' 


const AddProfessionScreen = ({history}) => {
    const [profession, setProfession] = useState('')

    const dispatch = useDispatch()

    const providerAddProfession = useSelector(state => state.providerAddProfession)
    const { success } = providerAddProfession

    const getProfession = useSelector(state => state.getProfession)
    const { professions } = getProfession

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const userDetail = useSelector(state => state.userDetail)
    const { provider } = userDetail

    useEffect(() => {
        if(!userInfo){
            history.push('/login')
        } else {
            dispatch(getProfessionData())
            dispatch(getUserData(userInfo._id))
            if(success) {
                setProfession('')
            }
        }
    }, [success, dispatch, userInfo, history])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(addProfession({profession}))
    }
    return (
        <>
            <section className='background small-bg'></section>
            <section className='edit content'>
                <div className='white-container'>
                        <div className='edit-menu'>
                            <EditMenu/>    
                        </div>
                        <div className='add-profession-card'>
                            <p>Itt tudsz hozzáadni új szakmákat a profilodhoz, vagy törölni is tudod a már mentett szakmáidat ha azt szeretnéd.</p>
                            <h1>Szakmák</h1>
                            <div className='profession-container'>
                                {provider.professions.map((profession,index) => (
                                    <ProfessionBadge profession={profession} key={index} />
                                ))}
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

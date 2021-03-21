import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EditMenu from '../../components/EditMenu'
import { getUserData } from '../../actions/userActions'
import { updateProvider } from '../../actions/providerActions'
import { PROVIDER_UPDATE_RESET } from '../../constants/providerConstans'
import { getCityData } from '../../actions/searchActions' 
import AutocompleteInput from '../../components/AutocompleteInput'

const ProfileEditScreen = ({match, history}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [tel, setTel] = useState('')
    const [bio, setBio] = useState('')

    const dispatch = useDispatch()

    const getCity = useSelector(state => state.getCity)
    const { cities } = getCity

    const userDetail = useSelector(state => state.userDetail)
    const { provider } = userDetail

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const providerUpdate = useSelector(state => state.providerUpdate)
    const { success } = providerUpdate

    useEffect(() => {
        if(!userInfo){
            history.push('/login')
        } else {
            if(!provider || success) {
                dispatch({ type: PROVIDER_UPDATE_RESET })
                dispatch(getUserData(userInfo._id))
                dispatch(getCityData())
            } else {
                setName(provider.name)
                setTel(provider.tel)
                setCity(provider.city)
                setEmail(provider.email)
                setBio(provider.bio)
            }
        }
    },[dispatch, userInfo, history, success, provider])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateProvider({ name, email, tel, city, bio}))
    }
    return (
        <>
            <section className='edit-background'></section>
            <section className='edit-content'>
                <div className='container'>
                        <div className='edit-menu'>
                            <EditMenu match={match}/>
                        </div>
                        <div className='edit-card'>
                            <form onSubmit={submitHandler}>
                                <img src={provider.image} alt={provider.name} />
                                <label className='picture'>
                                    Cseréld le a profilképed
                                    <input type='file' />
                                </label>
                                <label>Név</label>
                                <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
                                <label>Város</label>
                                <AutocompleteInput
                                    setInput={setCity}
                                    items={cities}
                                    placeholder='Települések'
                                    value={city}
                                />
                                <label>Telefonszám</label>
                                <input type='text' value={tel} onChange={(e) => setTel(e.target.value)}/>
                                <label>Email</label>
                                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
                                <label className='bio'>Bemutatkozás</label>
                                <textarea value={bio} onChange={(e) => setBio(e.target.value)} />

                                <button type='submit'>Mentés</button>
                            </form>
                        </div>
                </div>
            </section>
        </>
    )
}

export default ProfileEditScreen

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EditMenu from '../../components/EditMenu'
import Loader from '../../components/Loader'
import { getUserData } from '../../actions/userActions'

const PasswordChangeScreen = ({match}) => {
    const dispatch = useDispatch()

    const userDetail = useSelector(state => state.userDetail)
    const { loading, error, provider } = userDetail

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        dispatch(getUserData(userInfo._id))
    },[dispatch, userInfo._id])
    return (
        <>
            <section className='edit-background'></section>
            <section className='edit-content'>
                <div className='container'>
                        <div className='edit-menu'>
                            <EditMenu match={match}/>
                        </div>
                        <div className='password-change-card'>
                            <form>
                                <img src={provider.image} alt={provider.name} />
                                <h1>{provider.name}</h1>
                                <label>Régi Jelszó</label>
                                <input type='text' />
                                <label>Új Jelszó</label>
                                <input type='text' />
                                <label>Új Jelszó újra</label>
                                <input type='text' />
                                <button type='submit'>Mentés</button>
                            </form>
                        </div>
                </div>
            </section>
        </>
    )
}

export default PasswordChangeScreen

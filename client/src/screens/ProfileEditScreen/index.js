import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaSignOutAlt, FaCog} from 'react-icons/fa'
import EditMenu from '../../components/EditMenu'
import Loader from '../../components/Loader'
import { getUserData } from '../../actions/userActions'

const ProfileEditScreen = ({match}) => {
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
                        <div className='edit-card'>
                            <form>
                                <img src={provider.image} alt={provider.name} />
                                <label className='picture'>
                                    Cseréld le a profilképed
                                    <input type='file' />
                                </label>
                                <label>Név</label>
                                <input type='text' />
                                <label>Város</label>
                                <input type='text' />
                                <label>Telefonszám</label>
                                <input type='text' />
                                <label>Email</label>
                                <input type='text' />
                                <label className='bio'>Bemutatkozás</label>
                                <textarea></textarea>

                                <button type='submit'>Mentés</button>
                            </form>
                        </div>
                </div>
            </section>
        </>
    )
}

export default ProfileEditScreen

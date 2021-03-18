import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaPhoneAlt, FaEnvelope, FaSignOutAlt, FaAward, FaCog, FaMapMarkerAlt } from 'react-icons/fa'
import Rating from '../../components/Rating'
import ProfessionBadge from '../../components/ProfessionBadge'
import { getUserData } from '../../actions/userActions'
import Loader from '../../components/Loader'

const ProfileScreen = () => {
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
            <section className='profile-background'></section>
            <section className='profile-content'>
                <div className='container'>
                    {loading && <Loader />}
                    {error && <h1>{error}</h1>}
                    
                </div>
            </section>
        </>
    )
}

export default ProfileScreen

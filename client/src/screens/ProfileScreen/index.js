import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaPhoneAlt, FaEnvelope, FaSignOutAlt, FaCog, FaMapMarkerAlt } from 'react-icons/fa'
import Rating from '../../components/Rating'
import { getUserData } from '../../actions/userActions'
import Loader from '../../components/Loader'
import ProfessionBadge from '../../components/ProfessionBadge'
import { logout } from '../../actions/userActions'

const ProfileScreen = () => {
    const dispatch = useDispatch()

    const userDetail = useSelector(state => state.userDetail)
    const { loading, error, provider } = userDetail

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        dispatch(getUserData(userInfo._id))
    },[dispatch, userInfo._id])
    
    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <>
            <section className='profile-background'></section>
            <section className='profile-content'>
                <div className='container'>
                    {error && <h1>{error}</h1>}
                    {loading ? <Loader /> :
                    <>
                        <div className='leftbar'>
                            <img src={provider.image} alt={provider.name} />
                            <div className='data-container'>
                                <Rating value={provider.rating} numReviews={provider.numReviews}/>
                                <div className='contact-data'>
                                    {provider.tel ? <h2><FaPhoneAlt className='icon'/> {provider.tel}</h2> : <h2><FaPhoneAlt className='icon'/> Nincs telefonszám megadva!</h2>}
                                    <h2><FaEnvelope className='icon'/> {provider.email}</h2>
                                </div>
                                
                                <div className='action-buttons'>
                                    <Link to='/profile/edit'>Beállítások <FaCog className='icon'/></Link>
                                    <button onClick={() => handleLogout()}>Kijelentkezés <FaSignOutAlt className='icon'/></button>
                                </div>
                            </div>
                        </div>
                        <div className='rightbar'>
                            <h1>{provider.name}</h1>
                            <h2><FaMapMarkerAlt className='icon'/>Hungary, {provider.city}</h2>
                            <div className='professions'> 
                                {provider.professions.map((profession,index) => (
                                    <ProfessionBadge profession={profession} key={index} />
                                ))}
                            </div>
                            <h3>Bemutatkozás</h3>
                            {provider.bio ? <p>{provider.bio}</p> : 
                            (<div>
                                <p>Még nem adtál meg bemutatkozó szöveget. Kattints <Link to='/profile/edit'>ide</Link> hogy pótold ezt!</p>
                            </div>)}

                            <h3>Galléria</h3>
                            {provider.gallery.length > 0 ? <p>Galléria</p> : 
                            (<div>
                                <p>Még nem töltöttél fel képeket. Kattints <Link to='/profile/gallery/upload'>ide</Link> hogy pótold a képek hiányát!</p>
                            </div>)}
                        </div>
                    </>}
                </div>
            </section>
        </>
    )
}

export default ProfileScreen

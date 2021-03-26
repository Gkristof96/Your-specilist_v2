import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { 
    FaPhoneAlt, 
    FaEnvelope,
    FaMapMarkerAlt,
    FaCog,
    FaBriefcase,
    FaCommentDots,
    FaSignOutAlt
} from 'react-icons/fa'
import Message from '../../components/Message'
import Rating from '../../components/Rating'
import Loader from '../../components/Loader'
import ProfessionBadge from '../../components/ProfessionBadge'

import { logout } from '../../actions/userActions'
import { getUserData } from '../../actions/userActions'

const ProfileScreen = ({history}) => {
    const dispatch = useDispatch()

    const userDetail = useSelector(state => state.userDetail)
    const { loading, error, provider } = userDetail

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if(!userInfo){
            history.push('/login')
        } else  {
            dispatch(getUserData(userInfo._id))
        }
        
    },[dispatch, userInfo, history])
    
    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <>
            <section className='background medium-bg'></section>
            <section className='profile content'>
                <div className='white-container'>
                    {error && <Message message={error} type='error'/>}
                    {loading ? <Loader size='large'/> :
                    <>
                        <img  className='profile-image' src={provider.image} alt={provider.name} />
                        <div className='button-container'>
                            <Link to='/profile/edit' className='circle-btn'>
                                <span className='btn-text'>Ajánlat kérések</span>
                                <div className='icon-wrapper'><FaBriefcase className='icon'/></div>
                            </Link>
                            <Link to='/profile/edit' className='circle-btn'>
                                <span className='btn-text'>Értékelések</span>
                                <div className='icon-wrapper'><FaCommentDots className='icon'/></div>
                            </Link>
                            <Link to='/profile/edit' className='circle-btn'>
                                <span className='btn-text'>Beállítások</span>
                                <div className='icon-wrapper'><FaCog className='icon'/></div>
                            </Link>
                            <div className='circle-btn' onClick={handleLogout}>
                                <span className='btn-text'>Kijelentkezés</span>
                                <div className='icon-wrapper'><FaSignOutAlt className='icon'/></div>
                            </div>
                        </div>
                        <div className='profile-header'>
                            <h1>{provider.name}</h1>
                            <Rating value={provider.rating} numReviews={provider.numReviews} />
                        </div>
                        <div className='contact-info'>
                            <h2><FaMapMarkerAlt className='icon'/>Hungary, {provider.city}</h2>
                            <h2><FaEnvelope className='icon'/>{provider.email}</h2>
                            <h2><FaPhoneAlt className='icon'/>Hungary, {provider.tel}</h2>
                        </div>
                        <div className='profession-bar'>
                            {provider.professions.map((profession,index) => (
                                <ProfessionBadge profession={profession} key={index} />
                            ))}
                        </div> 
                        <div className='description'>
                            <h3>Bemutatkozás</h3>
                            {provider.bio ? <p>{provider.bio}</p> : 
                            (<div>
                                <p>
                                    Még nem adtál meg bemutatkozó szöveget. Kattints 
                                        <Link to='/profile/edit'> ide </Link> 
                                    hogy pótold ezt!
                                </p>
                            </div>)}
                        </div>
                        <div className='gallery'>
                            <h3>Galléria</h3>
                            {provider.gallery.length > 0 ? <p>Galléria</p> : 
                            (<div>
                                <p>
                                    Még nem töltöttél fel képeket. Kattints 
                                    <Link to='/profile/gallery/upload'> ide </Link>
                                    hogy pótold a képek hiányát!
                                </p>
                            </div>)}
                        </div>
                    </>
                    }
                </div>
            </section>
        </>
    )
}

export default ProfileScreen

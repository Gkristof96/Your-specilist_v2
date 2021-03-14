import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneAlt, FaEnvelope, FaSignOutAlt, FaAward, FaCog, FaMapMarkerAlt } from 'react-icons/fa'
import Rating from '../../components/Rating'
import ProfessionBadge from '../../components/ProfessionBadge'
import axios from 'axios'

const ProfileScreen = () => {
    const [provider, setProvider] = useState()

    useEffect(() => {
        const fetchProviders = async() => {
            const {data} = await axios.get('/api/providers/1')

            setProvider(data)
        }
        fetchProviders()
    },[])
    console.log(provider)
    return (
        <>
            <section className='profile-background'></section>
            <section className='profile-content'>
                <div className='container'>
                    <div className='leftbar'>
                        <img src={provider.image} alt={provider.name} />
                        <div className='data-container'>
                            <Rating value={provider.rating}/>
                            <div className='contact-data'>
                                <h2><FaPhoneAlt className='icon'/> {provider.tel}</h2>
                                <h2><FaEnvelope className='icon'/> {provider.email}</h2>
                            </div>
                            <div className='professions'> 
                                {provider.professions.map((profession,index) => (
                                    <ProfessionBadge profession={profession} key={index} />
                                ))}
                            </div>
                            <div className='action-buttons'>
                                    <Link to='/'>Értékelj <FaAward /></Link>
                                    <Link to='/'>Beállítások <FaCog /></Link>
                                    <button>Kijelentkezés <FaSignOutAlt /></button>
                            </div>
                        </div>
                    </div>
                    <div className='rightbar'>
                        <h1>{provider.name}</h1>
                        <h2><FaMapMarkerAlt className='icon'/>Hungary, {provider.city}</h2>

                        <h3>Bemutatkozás</h3>
                        <p>{provider.bio}</p>

                        <h3>Galléria</h3>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProfileScreen

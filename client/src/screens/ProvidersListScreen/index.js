import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProviderCard from '../../components/ProviderCard'
import cityData from '../../data/cities'
import professionData from '../../data/professions'
import AutocompleteInput from '../../components/AutocompleteInput'
import { FaSearch } from 'react-icons/fa'
import { listProviders } from '../../actions/userActions'

const ProvidersListScreen = () => {
    const [input, setInput] = useState('')
    const [profession, setProfession] = useState('')

    const dispatch = useDispatch()

    const providerList = useSelector(state => state.providerList)
    const { loading, error, providers } = providerList
    useEffect(() => {
        dispatch(listProviders())
    },[dispatch])

    return (
        <>
            <section className='hero'>
                <div className='text-container'>
                    <h1>Hiába keresel nem találsz szakembert?</h1>
                    <p>Tégy egy probát nálunk, garantáljuk hogy itt megtalálod azt mester akire most szükséged van</p>
                </div>
                <div className='search-bar'>
                    <AutocompleteInput
                        setInput={setInput}
                        items={cityData}
                        placeholder='Települések'
                        value={input}
                    />
                    <AutocompleteInput
                        setInput={setProfession}
                        items={professionData}
                        placeholder='Szakma'
                        value={profession}
                    />
                    <span>
                        <FaSearch className='icon'/>
                    </span>
                </div>
            </section>
            <section className='providers-content'>
                {loading ? 
                    <h1>Loading</h1> 
                    : <>
                    {providers.map((provider,index) => (
                        <ProviderCard provider={provider} key={index} />
                    ))}
                </>
            }
            </section>
        </>
    )
}

export default ProvidersListScreen

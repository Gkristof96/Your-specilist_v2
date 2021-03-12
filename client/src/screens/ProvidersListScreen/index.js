import React, { useState } from 'react'
import ProviderCard from '../../components/ProviderCard'
import providersData from '../../data/providers'
import cityData from '../../data/cities'
import professionData from '../../data/professions'
import AutocompleteInput from '../../components/AutocompleteInput'
import { FaSearch } from 'react-icons/fa'

const ProvidersListScreen = () => {
    const [input, setInput] = useState('')
    const [profession, setProfession] = useState('')

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
                        <FaSearch />
                    </span>
                </div>
            </section>
            <section className='providers'>
                {providersData.map((provider,index) => (
                    <ProviderCard provider={provider} key={index} />
                ))}
            </section>
        </>
    )
}

export default ProvidersListScreen
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProviderCard from '../../components/ProviderCard'
import AutocompleteInput from '../../components/AutocompleteInput'
import { FaSearch } from 'react-icons/fa'
import { listProviders } from '../../actions/providerActions'
import Paginate from '../../components/Paginate'
import { getCityData, getProfessionData } from '../../actions/searchActions'

const ProvidersListScreen = ({ match, location }) => {
    const [input, setInput] = useState('')
    const [profession, setProfession] = useState('')

    const pageNumber = Number(location.search.split('')[1]) || 1
    console.log(pageNumber)

    const dispatch = useDispatch()

    const providerList = useSelector(state => state.providerList)
    const { loading, error, providers, pages, page } = providerList

    const getCity = useSelector(state => state.getCity)
    const { cities } = getCity

    const getProfession = useSelector(state => state.getProfession)
    const { professions } = getProfession

    useEffect(() => {
        dispatch(getCityData())
        dispatch(getProfessionData())
        dispatch(listProviders(pageNumber))
    },[dispatch,pageNumber])

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
                        items={cities}
                        placeholder='Települések'
                        value={input}
                    />
                    <AutocompleteInput
                        setInput={setProfession}
                        items={professions}
                        placeholder='Szakma'
                        value={profession}
                    />
                    <span>
                        <FaSearch className='icon'/>
                    </span>
                </div>
            </section>
            <section className='providers-content'>
                {loading ? <h1>Loading</h1> : error ? <h1>{error}</h1> : <>{providers.map((provider,index) => <ProviderCard key={index} provider={provider}/>)}</>}
                <Paginate pages={pages} page={page}/>
            </section>
            
        </>
    )
}

export default ProvidersListScreen

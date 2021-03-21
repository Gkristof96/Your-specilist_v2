import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProviderCard from '../../components/ProviderCard'
import AutocompleteInput from '../../components/AutocompleteInput'
import { FaSearch } from 'react-icons/fa'
import { listProviders } from '../../actions/providerActions'
import Paginate from '../../components/Paginate'
import { getCityData, getProfessionData } from '../../actions/searchActions'

const ProvidersListScreen = ({ match }) => {
    const [city, setCity] = useState('')
    const [profession, setProfession] = useState('')
    const [keyword, setKeyword] = useState({})

    const pageNumber = match.params.pageNumber

    const dispatch = useDispatch()

    const providerList = useSelector(state => state.providerList)
    const { loading, error, providers, pages, page } = providerList

    const getCity = useSelector(state => state.getCity)
    const { cities } = getCity

    const getProfession = useSelector(state => state.getProfession)
    const { professions } = getProfession

    useEffect(() => {
        dispatch(listProviders(pageNumber))
        dispatch(getCityData())
        dispatch(getProfessionData())
        setCity(match.params.city)
        setProfession(match.params.profession)
        setKeyword({city: match.params.city, profession: match.params.profession})
    },[dispatch,pageNumber])

    const handleSearch = () => {
        setKeyword({city: city, profession: profession})
    }
    return (
        <>
            <section className='hero'>
                <div className='text-container'>
                    <h1>Hiába keresel nem találsz szakembert?</h1>
                    <p>Tégy egy probát nálunk, garantáljuk hogy itt megtalálod azt mester akire most szükséged van</p>
                </div>
                <div className='search-bar'>
                    <AutocompleteInput
                        setInput={setCity}
                        items={cities}
                        placeholder='Települések'
                        value={city}
                    />
                    <AutocompleteInput
                        setInput={setProfession}
                        items={professions}
                        placeholder='Szakma'
                        value={profession}
                    />
                    <span onClick={handleSearch}>
                        <FaSearch className='icon'/>
                    </span>
                </div>
            </section>
            <section className='providers-content'>
                {loading ? <h1>Loading</h1> : error ? <h1>{error}</h1> : <>{providers.map((provider,index) => <ProviderCard key={index} provider={provider}/>)}</>}
                <Paginate pages={pages} page={page} keyword={keyword}/>
            </section>
            
        </>
    )
}

export default ProvidersListScreen

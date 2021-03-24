import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FaSearch } from 'react-icons/fa'

import CategoryCard from '../../components/CategoryCard'
import Loader from '../../components/Loader'
import AutocompleteInput from '../../components/AutocompleteInput'
import ProfessionList from '../../components/ProfessionList'

import { getCityData, getProfessionData, getCategoryData } from '../../actions/searchActions'


const HomeScreen = () => {
    const [city, setCity] = useState('')
    const [profession, setProfession] = useState('')
    const [showList, setShowList] = useState(false) // show the list of professions by category
    const [listData, setListData] = useState({}) // the list of professions

    const dispatch = useDispatch()

    const getCity = useSelector(state => state.getCity)
    const { cities } = getCity

    const getProfession = useSelector(state => state.getProfession)
    const { professions } = getProfession

    const getCategory = useSelector(state => state.getCategory)
    const { loading, categories } = getCategory

    useEffect(() => {
        dispatch(getCityData())
        dispatch(getProfessionData())
        dispatch(getCategoryData())
    },[dispatch])
    
    const openProfessionList = (id) => {
        // set the profession list by category
        const data = categories.find((data) => data._id === id);
        setListData(data)
        setShowList(true);
    }   
    return (
        <>
            <section className='background large-bg'>
                <div className='text-container'>
                    <h1 className='text-container__title'>Hiába keresel nem találsz szakembert?</h1>
                    <p className='text-container__subtitle'>Tégy egy probát nálunk, garantáljuk hogy itt megtalálod azt mester akire most szükséged van</p>
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
                        <Link to={`/providers/search/${profession}/${city}`}>
                            <FaSearch className='icon'/>
                        </Link>
                </div>
            </section>
            <section className='category content'>
                <div className='transparent-container'>
                    <h1 className='transparent-container__title'>Szakma Kategóriák</h1>
                        <p>Amenyiben csak szakmák szerint szeretnél keresni, itt megtalálod kategóriákba sorolva a szakmákat amiket megtalálhatsz az oldalon. A kategóriák bőveb áttekintéséért kattints a kategória képére.</p>
                        {loading 
                            ? <Loader size='large' />
                            : showList 
                            ? <ProfessionList data={listData} setShowList={setShowList} />
                            : <div className='profession-container'>
                                {categories.map((data, index) => 
                                    <CategoryCard openProfessionList={openProfessionList} category={data} key={index} />
                                )}
                              </div>}
                </div>
            </section>
        </>
    )
}

export default HomeScreen

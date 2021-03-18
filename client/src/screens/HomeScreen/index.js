import React, { useState, useEffect } from 'react'
import AutocompleteInput from '../../components/AutocompleteInput'
import ProfessionList from '../../components/ProfessionList'
import { useDispatch, useSelector } from 'react-redux'
import { FaSearch } from 'react-icons/fa'
import CategoryCard from '../../components/CategoryCard'
import { getCityData, getProfessionData, getCategoryData } from '../../actions/searchActions' 

const HomeScreen = () => {
    const [input, setInput] = useState('')
    const [profession, setProfession] = useState('')
    const [showList, setShowList] = useState(false)
    const [listData, setListData] = useState({})

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
    
    const openList = (id) => {
        setShowList(true);
        const data = categories.find((data) => data._id === id);
        console.log(data)
        setListData(data)
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
            <section className='category-content'>
                    <h1 className='category-content__title'>Szakma Kategóriák</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    {loading?
                        <h1>Loading</h1> 
                        : showList ? <ProfessionList data={listData} setShowList={setShowList} />
                        : <div className='profession-container'>
                            {categories.map((data, index) => 
                                <CategoryCard openList={openList} category={data} key={index} />
                            )}
                        </div>}
            </section>
        </>
    )
}

export default HomeScreen

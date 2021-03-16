import React, { useState } from 'react'
import AutocompleteInput from '../../components/AutocompleteInput'
import { FaSearch } from 'react-icons/fa'
import CategoryCard from '../../components/CategoryCard'

const HomeScreen = () => {
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
                        {/*<AutocompleteInput
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
                        />*/}
                        <span>
                            <FaSearch className='icon'/>
                        </span>
                </div>
            </section>
            <section className='category-content'>
                    <h1 className='category-content__title'>Szakma Kategóriák</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className='profession-container'>
                      {/*{categoryData.map((category, index) => (
                          <CategoryCard key={index} category={category} />
                      ))}*/}
                    </div>
            </section>
        </>
    )
}

export default HomeScreen

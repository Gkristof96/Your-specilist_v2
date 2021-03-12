import React from 'react'

const OfferScreen = () => {
    return (
        <>
            <section className='hero'>
                <div className='text-container'>
                    <h1>Nem akarsz keresgélni?</h1>
                    <p>Ebben az esetben adj fel egy megbízást, és majd egy szakember megkeres az ajánlatával</p>
                </div>
            </section>
            <section className='offer-content'>
                <div className='container'>
                    <h1>Töltsd ki az űrlapot, és várj a szakemberek válaszára</h1>
                    <form>
                        <label className='input-group'>
                            Keresztnév
                            <input />
                        </label>
                        <label className='input-group'>
                            Vezetéknév
                            <input />
                        </label>
                        <label className='input-group'>
                            Email
                            <input />
                        </label>
                        <label className='input-group'>
                            Város
                            <input />
                        </label>
                        <label className='input-group'>
                            Munka leírás
                            <textarea />
                        </label>
                        <label className='input-group'>
                            Szakma
                            <input />
                        </label>
                        <label className='checkbox'>
                            <input type='checkbox' />
                            <span>Elfogadom a <span>felhasználási feltételeket</span>!</span>
                        </label>
                        <button type='submit'>Küldés</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default OfferScreen

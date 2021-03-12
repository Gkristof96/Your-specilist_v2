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
                        <label>
                            Keresztnév
                            <input />
                        </label>
                        <label>
                            Vezetéknév
                            <input />
                        </label>
                        <label>
                            Email
                            <input />
                        </label>
                        <label>
                            Város
                            <input />
                        </label>
                        <label>
                            Munka leírás
                            <textarea />
                        </label>
                        <label>
                            Szakma
                            <input />
                        </label>
                        <label>
                            <input type='checkbox' />
                            Elfogadom az <span>adatkezelési szabályzatot</span>
                        </label>
                        <button type='submit'>Küldés</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default OfferScreen

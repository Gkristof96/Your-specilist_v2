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
                        <div className='input-group'>
                            <input type='text' name='name' autoComplete='off' required/>
                            <label for='name' className='label-name'>
                                <span className='content-name'>Név</span>
                            </label>
                        </div>
                        <div className='input-group'>
                            <input type='text' name='email' autoComplete='off' required/>
                            <label className='label-name' for='email'>
                                <span className='content-name'>Email</span>
                            </label>
                        </div>
                        <div className='input-group'>
                            <input type='text' name='city' autoComplete='off' required/>
                            <label className='label-name' for='city'>
                                <span className='content-name'>Város</span>
                            </label>
                        </div>
                        <div className='input-group'>
                            <input type='text' name='profession' autoComplete='off' required/>
                            <label className='label-name' for='profession'>
                                <span className='content-name'>Szakma</span>
                            </label>
                        </div>
                        <div className='input-group text'>
                            <textarea name='description' autoComplete='off' required/>
                            <label className='label-name' for='description'>
                                <span className='content-name'>Munka leírása</span>
                            </label>
                        </div>
                        <label className='checkbox'>
                            <input type='checkbox' required/>
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

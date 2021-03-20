import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EditMenu from '../../components/EditMenu'
import { getUserData } from '../../actions/userActions'

const GalleryUploadScreen = ({match}) => {
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        dispatch(getUserData(userInfo._id))
    },[dispatch, userInfo._id])
    return (
        <>
            <section className='edit-background'></section>
            <section className='edit-content'>
                <div className='container'>
                        <div className='edit-menu'>
                            <EditMenu match={match}/>
                        </div>
                        <div className='gallery-upload-card'>
                            <p>Lehetőséged van képeket feltölteni korábbi munkáidról, illetve itt tudod törölni a már feltöltött képeidet is.</p>
                            <div className='gallery-container'>
                                <h1>Feltöltött képek</h1>
                            </div>
                            <form>
                                <label>Tölts fel egy képet</label>
                                <input type='file' />

                                <button type='submit'>Feltöltés</button>
                            </form>
                        </div>
                </div>
            </section>
        </>
    )
}

export default GalleryUploadScreen

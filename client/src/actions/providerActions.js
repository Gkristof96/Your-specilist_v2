import {
    PROVIDER_LIST_REQUEST,
    PROVIDER_LIST_SUCCESS,
    PROVIDER_LIST_FAIL,
    PROVIDER_DATA_REQUEST,
    PROVIDER_DATA_SUCCESS,
    PROVIDER_DATA_FAIL
} from '../constants/providerConstans'
import axios from 'axios'

export const listProviders = (pageNumber = '') => async(dispatch) => {
    try {
        dispatch({
            type: PROVIDER_LIST_REQUEST
        })

        const { data } = await axios.get(`/api/provider?pageNumber=${pageNumber}`)

        dispatch({
            type: PROVIDER_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PROVIDER_LIST_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const listProviderData = (id) => async(dispatch) => {
    try {
        dispatch({
            type: PROVIDER_DATA_REQUEST
        })

        const { data } = await axios.get(`/api/provider/${id}`)

        dispatch({
            type: PROVIDER_DATA_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PROVIDER_DATA_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}
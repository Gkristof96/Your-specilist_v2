import {
    PROVIDER_LIST_REQUEST,
    PROVIDER_LIST_SUCCESS,
    PROVIDER_LIST_FAIL,
    PROVIDER_DATA_REQUEST,
    PROVIDER_DATA_SUCCESS,
    PROVIDER_DATA_FAIL
} from '../constants/providerConstans'

export const providerListReducer = (state = { providers: []}, action) => {
    switch(action.type) {
        case PROVIDER_LIST_REQUEST:
            return {
                loading: true, providers: []
            }
        case PROVIDER_LIST_SUCCESS:
            return {
                loading: false,
                providers: action.payload.providers,
                page: action.payload.page,
                pages: action.payload.pages
            }
        case PROVIDER_LIST_FAIL:
            return {
                loading: false, error: action.payload
            }
        default:
            return state
    }
}

export const providerDataReducer = (state = { provider: { reviews: [], gallery: [], professions: []}}, action) => {
    switch(action.type) {
        case PROVIDER_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PROVIDER_DATA_SUCCESS:
            return {
                loading: false,
                provider: action.payload
            }
        case PROVIDER_DATA_FAIL:
            return {
                loading: false, error: action.payload
            }
        default:
            return state
    }
}
import {
    SEARCH_COUNTRY_REQUEST_START,
    SEARCH_COUNTRY_REQUEST_FAIL,
    SEARCH_COUNTRY_REQUEST_SUCCESS
} from './types';
import { SearchCountryAction } from './actions';

type SearchCountryState = {
    loadingState: string,
    countriesList: any
};

const INITIAL_STATE: SearchCountryState = {
    loadingState: 'UNINITIALISED',
    countriesList: null
};

export const reducer = (
    state: SearchCountryState = INITIAL_STATE,
    action: SearchCountryAction
): SearchCountryState => {
    switch(action.type) {
        case SEARCH_COUNTRY_REQUEST_START:
            return {
                ...state,
                loadingState: 'LOADING'
            };
        case SEARCH_COUNTRY_REQUEST_FAIL:
            return {
                ...state,
                loadingState: 'ERROR',
                countriesList: []
            };
        case SEARCH_COUNTRY_REQUEST_SUCCESS:
            return {
                ...state,
                loadingState: 'LOADED',
                countriesList: action.payload
            };
        default:
            return state;
    }
};
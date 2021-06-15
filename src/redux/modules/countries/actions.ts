import {
    SEARCH_COUNTRY_REQUEST_START,
    SEARCH_COUNTRY_REQUEST_FAIL,
    SEARCH_COUNTRY_REQUEST_SUCCESS
} from './types';
import { get } from '../api/actions';
import { resetCurrencyRates } from '../currencies/actions';

const SEARCH_COUNTRY_URL: Function = (searchCountryText) =>
    (`/countries/${searchCountryText}`)

export const searchCountryRequestStart = () => ({
    type: SEARCH_COUNTRY_REQUEST_START
});

export const searchCountryRequestFail = () => ({
    type: SEARCH_COUNTRY_REQUEST_FAIL
});

export const searchCountryRequestSuccess = (payload: any) => ({
    type: SEARCH_COUNTRY_REQUEST_SUCCESS,
    payload
});

export const searchCountries = (countrySearchText: string) => (
    dispatch: Function
) => new Promise((resolve, reject) => {
    dispatch(searchCountryRequestStart());
    dispatch(resetCurrencyRates());

    dispatch(get(SEARCH_COUNTRY_URL(countrySearchText))). then((response: any) => {
        dispatch(searchCountryRequestSuccess(response.data));
    }).catch((error: any) => {
        dispatch(searchCountryRequestFail());
    });
});

export type SearchCountryAction = {
    type: string
    payload?: any
}
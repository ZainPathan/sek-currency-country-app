import {
    GET_CURRENCY_RATES_REQUEST_START,
    GET_CURRENCY_RATES_REQUEST_FAIL,
    GET_CURRENCY_RATES_REQUEST_SUCCESS,
    RESET_CURRENCY_RATES
} from './types';

import { get } from '../api/actions';
import { config } from '../../../core/constants';

const API_KEY = config.fixerCurrencyAPIKey;
const BASE_CURR = config.baseCurrencyCode;

const GET_CURRENCY_RATES_URL: Function =
    (CURRENCIES_LIST) => `/currencies/api/latest?access_key=${API_KEY}&base=${BASE_CURR}&symbols=${CURRENCIES_LIST}`;

export const getCurrencyRatesRequestStart = () => ({
    type: GET_CURRENCY_RATES_REQUEST_START
});

export const getCurrencyRatesRequestFail = () => ({
    type: GET_CURRENCY_RATES_REQUEST_FAIL
});

export const getCurrencyRatesRequestSuccess = (payload: any) => ({
    type: GET_CURRENCY_RATES_REQUEST_SUCCESS,
    payload
});

export const resetCurrencyRates = () => ({
    type: RESET_CURRENCY_RATES
});

export const getCurrencyRates = (currenciesList: Array<string>) => (
    dispatch: Function
) => new Promise((resolve, reject) => {
    dispatch(getCurrencyRatesRequestStart());
    dispatch(get(GET_CURRENCY_RATES_URL(currenciesList)))
        .then((result: any) => {
            console.log('result: ', result);
            dispatch(getCurrencyRatesRequestSuccess(result.data));
        })
        .catch((error: any) => {
            dispatch(getCurrencyRatesRequestFail());
        })
});

export type CurrencyRatesAction = {
    type: string
    payload?: any
}
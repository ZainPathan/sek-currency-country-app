import {
    GET_CURRENCY_RATES_REQUEST_START,
    GET_CURRENCY_RATES_REQUEST_FAIL,
    GET_CURRENCY_RATES_REQUEST_SUCCESS, RESET_CURRENCY_RATES
} from './types';
import { CurrencyRatesAction } from './actions';

type CurrencyRatesState = {
    loadingState: string,
    currencyRatesMap: any
}

const INITIAL_STATE: CurrencyRatesState = {
    loadingState: 'UNINITIALISED',
    currencyRatesMap: null
};

export const reducer = (
    state = INITIAL_STATE,
    action: CurrencyRatesAction
): CurrencyRatesState => {
    switch(action.type) {
        case GET_CURRENCY_RATES_REQUEST_START:
            return {
                ...state,
                loadingState: 'LOADING'
            };
        case GET_CURRENCY_RATES_REQUEST_FAIL:
            return {
                ...state,
                loadingState: 'ERROR'
            };
        case GET_CURRENCY_RATES_REQUEST_SUCCESS:
            return {
                ...state,
                currencyRatesMap: action.payload?.rates,
                loadingState: 'LOADED'
            };
        case RESET_CURRENCY_RATES:
            return {
                ...state,
                currencyRatesMap: null,
                loadingState: 'UNINITIALISED'
            }
        default:
            return state;
    }
};
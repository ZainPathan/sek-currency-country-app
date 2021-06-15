import { combineReducers } from 'redux';

import { reducer as countries } from './countries';
import { reducer as currencies } from './currencies';

const reducer = combineReducers({
    countries,
    currencies
});

export const rootReducer = (state, action) => {
    return reducer(state, action);
};

export type ReducerState = ReturnType<typeof rootReducer>
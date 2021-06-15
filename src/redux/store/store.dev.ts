import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from '../modules';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?: typeof compose
    }
}

const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

export default createStore(rootReducer, undefined, composedEnhancers);
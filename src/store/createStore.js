import { applyMiddleware, createStore, compose } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from '../reducers';

const middlewares = process.env.NODE_ENV === 'development' ? [logger] : [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk, ...middlewares))
);

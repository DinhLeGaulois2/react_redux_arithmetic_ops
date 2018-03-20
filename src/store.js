import { applyMiddleware, createStore, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import arithmeticReducer from './reducers/arithmeticReducer'

const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(combineReducers({
    calc: arithmeticReducer
}), middleware);
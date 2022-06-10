import {createStore, applyMiddleware, combineReducers} from 'redux';
import dataReducer from './dataReducer';
import thunk from 'redux-thunk';

const store = createStore(dataReducer, applyMiddleware(thunk));
export default store;

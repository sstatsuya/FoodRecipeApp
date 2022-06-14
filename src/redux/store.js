import {createStore, applyMiddleware, combineReducers} from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';
import { typeSlice } from './typeSlice';
import { recipeSlice } from './recipeSlice';
import { viewSlice } from './viewSlice';

// const store = createStore(rootReducer, applyMiddleware(thunk));
const store = configureStore({
    reducer: rootReducer
})

export default store;

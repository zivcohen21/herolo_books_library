import { createStore, combineReducers, applyMiddleware } from 'redux';
import booksReducer from './reducers/books';
import filtersReducer from './reducers/filters';
import createHistory from 'history/createBrowserHistory';
import { routerReducer } from "react-router-redux";
import reduxThunk from 'redux-thunk';

export const history = createHistory();

const store = createStore(
    combineReducers({
        books : booksReducer,
        filters: filtersReducer,
        routing: routerReducer
    }), {}, applyMiddleware(reduxThunk)
);

export default store;

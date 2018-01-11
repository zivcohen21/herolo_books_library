import React from 'react';
import ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import store, { history } from './store';
import App from './App';
import './index.css';

const target = document.querySelector('#root');
console.log("history: " + JSON.stringify(history));

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    target
);
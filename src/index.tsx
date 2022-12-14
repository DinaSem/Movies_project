import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './movieCard/state/store';
import AppForMovie from "./AppForMovie/AppForMovie";
import {BrowserRouter, HashRouter} from "react-router-dom";


ReactDOM.render(

        <Provider store={store}>
            <HashRouter>
                <AppForMovie/>
            </HashRouter>
        </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

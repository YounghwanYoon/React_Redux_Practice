import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux'; //Store
import {Provider} from 'react-redux'; //Provider 2 steps:1) Import 2)Tag 
import allReducers from'./reducers';
import App from './components/app'

const store = createStore(allReducers);

ReactDOM.render(
    //Taking store and making available to every single components
    <Provider store = {store}> 
        <App/>
    </Provider>
    ,document.getElementById('root'));

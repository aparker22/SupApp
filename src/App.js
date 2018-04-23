import React from 'react';
import Router from './Router';
import {Provider} from 'react-redux';
import store from './Store.js';

let App = () => 
    <Provider store={store}>
        <Router/>
    </Provider>

export default App;

import React from 'react';
import lightbulb from './lightbulb.gif';
import './App.css';

let Header = () =>
    <header className="App-header">
    <img src={lightbulb} className="App-logo" alt="logo" />
    <h1 className="App-title">SUP?</h1>
    </header>

export default Header;
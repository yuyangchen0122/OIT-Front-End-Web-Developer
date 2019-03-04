import React from 'react';
import ReactDOM from 'react-dom';
import PrimarySearchAppBar from './component/Header';
import Grid from './component/AppLayout';
import SearchBar from './component/SearchBar';

ReactDOM.render(
    <div>
        <PrimarySearchAppBar />
        <SearchBar/>
        <Grid/>
    </div>,document.querySelector('#root')
);

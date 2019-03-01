import React from 'react';
import ReactDOM from 'react-dom';
import PrimarySearchAppBar from './component/Header';
import Grid from './component/AppLayout'

ReactDOM.render(<PrimarySearchAppBar />, document.querySelector('#root'));
ReactDOM.render(<Grid />, document.querySelector('#root'));

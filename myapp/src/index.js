import React from 'react';
import ReactDOM from 'react-dom';
import PrimarySearchAppBar from './component/Header';
import Album from './component/AppLayout'

ReactDOM.render(<PrimarySearchAppBar />, document.querySelector('#root'));
ReactDOM.render(<Album />, document.querySelector('#root'));

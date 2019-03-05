import React, { Component } from 'react';
import PrimaryAppBar from './component/Header';
import SearchBar from './component/SearchBar';
import Grid from './component/AppLayout';


class App extends Component {
  render() {
    return (
        <div className="App">
          <PrimaryAppBar/>
          <SearchBar/>
          <Grid/>
        </div>
    );
  }
}
export default App;

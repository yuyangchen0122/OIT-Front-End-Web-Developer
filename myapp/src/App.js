import React, { Component } from 'react';
import SearchBar from './component/SearchBar';
import PrimaryAppBar from './component/Header';
import Grid from './component/AppLayout';


class App extends Component {
  render() {
    return (
        <div className="App">
          <PrimaryAppBar/>
            <SearchBar/>
        </div>
    );
  }
}
export default App;

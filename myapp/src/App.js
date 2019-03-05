import React, { Component } from 'react';
import PersistentDrawerLeft from './component/SearchBar';
import PrimaryAppBar from './component/Header';


class App extends Component {
  render() {
    return (
        <div className="App">
          <PrimaryAppBar/>
          <PersistentDrawerLeft/>
        </div>
    );
  }
}
export default App;

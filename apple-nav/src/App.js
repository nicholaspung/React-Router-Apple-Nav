import React from 'react';
import './App.css';
import NavWrapper from './components/NavWrapper';

import appleLinksData from './appleLinksData';

class App extends React.Component {
  state = {
    appleNav: appleLinksData
  }

  render() {
    return (
      <div className="App">
        <p>Apple Nav Container</p>
        <NavWrapper appleNav={this.state.appleNav}/>
      </div>
    );
  }
}

export default App;

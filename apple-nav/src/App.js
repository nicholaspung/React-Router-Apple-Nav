import React from 'react';
import './App.css';
import NavWrapper from './components/NavWrapper';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';

import appleLinksData from './appleLinksData';

class App extends React.Component {
  state = {
    appleNav: appleLinksData
  }

  render() {
    return (
      <div className="App">
        <p>Apple Nav Container</p>

        <Route path="/" render={props => <NavWrapper appleNav={this.state.appleNav} {...props}/>}/>
        {this.state.appleNav.map(tab => <Route path='/:name' render={props => <Nav navItem={tab} />}/>)}
      </div>
    );
  }
}

export default App;

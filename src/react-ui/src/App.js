import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import MainArea from './features/MainArea/MainAreaContainer';
import BlockChainViaAPI from './features/BlockChainViaAPI/BlockChainViaAPIContainer';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={MainArea}/>
            <Route exact path="/character" component={BlockChainViaAPI}/>
          </div>
        </Router>
    );
  }
}

export default App;

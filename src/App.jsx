/* eslint-disable no-tabs */
// @flow

import React from 'react';
import './App.css';
import Ipv4Calc from './app/ipv4.react';
import Navigation from './app/navigation.react';

function App() {
  return (
    <div className="">
      <header className="App-header">
        <Navigation />
      </header>
      <div className="row">
        <br />
      </div>
      <content className="">
        <Ipv4Calc />
      </content>
    </div>
  );
}

export default App;

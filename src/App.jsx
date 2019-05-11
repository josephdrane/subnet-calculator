// @flow

import React from 'react';
import './App.css';
import Ipv4App from './app/ipv4.react';
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
      <content className="App-content">
        <Ipv4App />
      </content>
    </div>
  );
}

export default App;

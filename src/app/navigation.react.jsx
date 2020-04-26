/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
// @flow

import * as React from 'react';
import logo from '../img/logo.svg';

const Navigation = () => (
  //   <div className="mb-4">
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand h-25 text-white" href="https://subnet.help">
      <img src={logo} className="App-logo" alt="logo" />
            Subnet Calculator
    </a>
  </nav>
  //   </div>
);

export default Navigation; // Don’t forget to use export default!

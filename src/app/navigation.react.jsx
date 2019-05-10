/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
// @flow

import * as React from 'react';
import logo from '../img/logo.svg';

const Navigation = () => (
  //   <div className="mb-4">
  <nav className="navbar">
    <a className="navbar-brand text-white" href="https://subnet.help">
      <img src={logo} className="App-logo" alt="logo" />
			Subnet Calculator
    </a>
    <form className="form-inline">
      <a className="btn btn-dark" href="https://github.com/josephdrane">
				Github
      </a>
      <a className="btn btn-dark" href="https://linkedin.com/in/josephdrane">
				LinkedIn
      </a>
    </form>
  </nav>
  //   </div>
);

export default Navigation; // Don’t forget to use export default!

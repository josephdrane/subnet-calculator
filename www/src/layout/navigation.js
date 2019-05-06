import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import React, { Component } from 'react';

class Button extends Component {
	render() {
		return (
			<div className="mb-4">
				<nav className="navbar navbar-dark bg-dark text-white">
					<a className="navbar-brand" href="https://subnet.help">
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
			</div>
		);
	}
}

export default Button; // Don’t forget to use export default!

import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import './App.css';
// import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { InputGroup, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Navigation from './layout/navigation';
import Ipv4Calc from './layout/ipv4.form';

class SubnetCalcApp extends Component {
	render() {
		return (
			<div>
				<div className="App">
					<Navigation />
					<Ipv4Calc />
				</div>
				<div>
					<InputGroup>
						<Form>
							<FormGroup>
								<Label for="ipaddress">IP Address: </Label>
							</FormGroup>
						</Form>
					</InputGroup>
				</div>
			</div>
		);
	}
}

export default SubnetCalcApp;

/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
// @flow

import * as React from 'react';

type Props = {
	/* ... */
};

type State = {
	ipaddress: string,
	// cidr_netmask: string,
	bitMask: string
	// inverted_mask: string,
	// cidr_max_subnets: string,
	// max_addresses: string,
	// cidr_network: string,
	// net_cidr_notation: string,
	// cidr_addr_range: string,
};

class Ipv4Calc extends React.Component<Props, State> {
	state: State = {
	  ipaddress: '10.0.0.0',
	  // cidr_netmask: '',
	  bitMask: '24',
	  // inverted_mask: '',
	  // cidr_max_subnets: '',
	  // max_addresses: '',
	  // cidr_network: '',
	  // net_cidr_notation: '',
	  // cidr_addr_range: '',
	};

	onChangeIpaddress = (event: Event) => {
	  if (event.target instanceof HTMLInputElement) {
	    this.setState({ ipaddress: event.target.value });
	  } else {
	    this.setState({ ipaddress: '0.0.0.0' });
	  }
	};

	onChangeMask = (event: Event) => {
	  if (event.target instanceof HTMLSelectElement) {
	    this.setState({ bitMask: event.target.value });
	  }
	};

	render() {
	  const { ipaddress, bitMask } = this.state;
	  return (
  <div className="container">
    <form>
      <div className="form-row">
        <div className="form-group col">
          <label>IPv4 Address</label>
          <input
            type="text"
            className="form-control"
            value={ipaddress}
            onChange={this.onChangeIpaddress}
            maxLength="15"
          />
        </div>

        <div className="form-group col">
          <label>Subnet Mask</label>
          <select
            name="cidr_netmask"
            className="form-control"
            value={bitMask}
            onChange={this.onChangeMask}
          >
            <option value="1">128.0.0.0 --- /1</option>
            <option value="2">192.0.0.0 --- /2</option>
            <option value="3">224.0.0.0 --- /3</option>
            <option value="4">240.0.0.0 --- /4</option>
            <option value="5">248.0.0.0 --- /5</option>
            <option value="6">252.0.0.0 --- /6</option>
            <option value="7">254.0.0.0 --- /7</option>
            <option value="8">255.0.0.0 --- /8</option>
            <option value="9">255.128.0.0 --- /9</option>
            <option value="10">255.192.0.0 --- /10</option>
            <option value="11">255.224.0.0 --- /11</option>
            <option value="12">255.240.0.0 --- /12</option>
            <option value="13">255.248.0.0 --- /13</option>
            <option value="14">255.252.0.0 --- /14</option>
            <option value="15">255.254.0.0 --- /15</option>
            <option value="16">255.255.0.0 --- /16</option>
            <option value="17">255.255.128.0 --- /17</option>
            <option value="18">255.255.192.0 --- /18</option>
            <option value="19">255.255.224.0 --- /19</option>
            <option value="20">255.255.240.0 --- /20</option>
            <option value="21">255.255.248.0 --- /21</option>
            <option value="22">255.255.252.0 --- /22</option>
            <option value="23">255.255.254.0 --- /23</option>
            <option value="24">255.255.255.0 --- /24</option>
            <option value="25">255.255.255.128 --- /25</option>
            <option value="26">255.255.255.192 --- /26</option>
            <option value="27">255.255.255.224 --- /27</option>
            <option value="28">255.255.255.240 --- /28</option>
            <option value="29">255.255.255.248 --- /29</option>
            <option value="30">255.255.255.252 --- /30</option>
            <option value="31">255.255.255.254 --- /31</option>
            <option value="32">255.255.255.255 --- /32</option>
          </select>
        </div>
      </div>

      <hr />

      <div className="form-row">
        <div className="form-group col">
          <label>CIDR Address Range</label>
          <input
            type="text"
            id="cidr_addr_range"
            name="cidr_addr_range"
            value=""
            size="30"
            readOnly="true"
            className="form-control"
          />
        </div>

        <div className="form-group col">
          <label>Wildcard Mask</label>
          <input
            type="text"
            name="inverted_mask"
            id="inverted_mask"
            value=""
            size="20"
            readOnly="true"
            className="form-control"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col">
          <label>Max Addresses</label>
          <input
            type="text"
            name="max_addresses"
            id="max_addresses"
            value=""
            size="20"
            readOnly="true"
            className="form-control"
          />
        </div>

        <div className="form-group col">
          <label>Max Subnets</label>
          <input
            type="text"
            name="cidr_max_subnets"
            id="cidr_max_subnets"
            value=""
            size="20"
            readOnly="true"
            className="form-control"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col">
          <label>CIDR Network (Route)</label>
          <input
            type="text"
            id="cidr_network"
            name="cidr_network"
            value=""
            size="20"
            readOnly="true"
            className="form-control"
          />
        </div>

        <div className="form-group col">
          <label>Net: CIDR Notation</label>
          <input
            type="text"
            id="net_cidr_notation"
            name="net_cidr_notation"
            value=""
            size="20"
            readOnly="true"
            className="form-control"
          />
        </div>
      </div>
    </form>
  </div>
	  );
	}
}

export default Ipv4Calc;

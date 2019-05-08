/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
// @flow

import * as React from 'react';

type Props = {
	/* ... */
};

type State = {
	ipaddress: string
	// cidr_netmask: string,
	// cidr_mask_bits: string,
	// inverted_mask: string,
	// cidr_max_subnets: string,
	// max_addresses: string,
	// cidr_network: string,
	// net_cidr_notation: string,
	// cidr_addr_range: string
};

class Ipv4Calc extends React.Component<Props, State> {
	state: State = {
	  ipaddress: '0.0.0.0',
	  // cidr_netmask: '',
	  // cidr_mask_bits: '',
	  // inverted_mask: '',
	  // cidr_max_subnets: '',
	  // max_addresses: '',
	  // cidr_network: '',
	  // net_cidr_notation: '',
	  // cidr_addr_range: '',
	};

	onChangeIpaddress(event: Event) {
	  if (event.target instanceof HTMLInputElement) {
	    this.setState({ ipaddress: event.target.value });
	  } else {
	    this.setState({ ipaddress: '0.0.0.0' });
	  }
	}

	render() {
	  const { ipaddress } = this.state;
	  return (
  <div className="container text-left">
    <form name="calculator" id="calculator" target="RemoteScripting" action="rs_cidr.php" method="get">
      <div className="form-row">
        <div className="form-group col">
          <label id="ipaddress" htmlFor="ipaddress">
								IPv4 Address
            <input
              type="text"
              id="ipaddress"
              name="ipaddress"
              className="form-control calc-input-addr"
              value={ipaddress}
              onChange={this.onChangeIpaddress}
              maxLength="15"
            />
          </label>
        </div>
        <div className="form-group col">
          <label id="cidr_netmask" htmlFor="cidr_netmask_label">
								Subnet Mask
            <select name="cidr_netmask" className="form-control">
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
          </label>
        </div>
      </div>
      <hr />
      <div className="form-row">
        <div className="form-group col">
          <label id="cidr_addr_range" htmlFor="cidr_addr_range">
								CIDR Address Range
            <input
              type="text"
              id="cidr_addr_range"
              name="cidr_addr_range"
              value=""
              size="30"
              readOnly=""
              className="form-control calc-output"
            />
          </label>
        </div>
        <div className="form-group col">
          <label id="inverted_mask" htmlFor="inverted_mask">
								Wildcard Mask
            <input
              type="text"
              name="inverted_mask"
              id="inverted_mask"
              value=""
              size="20"
              readOnly=""
              className="form-control calc-output"
            />
          </label>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col">
          <label id="max_addresses" htmlFor="max_addresses">
								Max Addresses
            <input
              type="text"
              name="max_addresses"
              id="max_addresses"
              value=""
              size="20"
              readOnly=""
              className="form-control calc-output"
            />
          </label>
        </div>
        <div className="form-group col">
          <label id="cidr_max_subnets" htmlFor="cidr_max_subnets">
								Max Subnets
            <input
              type="text"
              name="cidr_max_subnets"
              id="cidr_max_subnets"
              value=""
              size="20"
              readOnly=""
              className="form-control calc-output"
            />
          </label>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col">
          <label id="cidr_network" htmlFor="cidr_network">
								CIDR Network (Route)
            <input
              type="text"
              id="cidr_network"
              name="cidr_network"
              value=""
              size="20"
              readOnly=""
              className="form-control calc-output"
            />
          </label>
        </div>

        <div className="form-group col">
          <label id="net_cidr_notation" htmlFor="net_cidr_notation">
								Net: CIDR Notation
            <input
              type="text"
              id="net_cidr_notation"
              name="net_cidr_notation"
              value=""
              size="20"
              readOnly=""
              className="form-control calc-output"
            />
          </label>
        </div>
      </div>

      <div className="form-row" />
    </form>
  </div>
	  );
	}
}

export default Ipv4Calc;

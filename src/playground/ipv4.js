/**
 * Inputs
 */
const ip = '172.16.5.34';
console.log(`IP Address: ${ip}`);
const mask = '255.255.255.192';
console.log(`Subnet Mask: ${mask}`);
const bitMask = '26';
console.log(`Bit Mask: ${bitMask}`);
/**
 * Processing
 */
// splits ip into array by octet and converts string to number
const ip_array = ip.split('.');
ip_array.forEach((value, index) => {
  ip_array[index] = parseInt(value, 10);
});
// splits ip into array by octet and converts string to number
const mask_array = mask.split('.');
mask_array.forEach((value, index) => {
  mask_array[index] = parseInt(value, 10);
});
// Perform AND bitwise operation on numbers between address and mask
// the result is the network address that's returned
// we can maybe make this faster by only performing AND operations on mask bits less than 255
// maybe also not 0 as well.
const network_address = (ip_array, mask_array) => {
  const network_address_array = new Array();
  for (let index = 0; index < ip_array.length; index++) {
    const ip_octet = ip_array[index];
    const mask_octet = mask_array[index];
    const network_address_octet = ip_octet & mask_octet;
    network_address_array[index] = network_address_octet.toString(10);
  }
  return network_address_array.join('.');
};
const network = network_address(ip_array, mask_array);
console.log(`Network Address: ${network}`);

// need wildcard to get broadcast
// splits ip into array by octet and converts string to number
const network_array = network.split('.');
network_array.forEach((value, index) => {
  network_array[index] = parseInt(value, 10);
});

// Wildcard
const wildcard_mask = (mask_array) => {
  const wildcard = new Array();
  for (let index = 0; index < mask_array.length; index++) {
    wildcard[index] = 255 - mask_array[index];
  }
  return wildcard.join('.');
};
const wildcard = wildcard_mask(mask_array);
console.log(`Wildcard Mask: ${wildcard}`);

// need wildcard to get broadcast
// splits ip into array by octet and converts string to number
const wildcard_array = wildcard.split('.');
wildcard_array.forEach((value, index) => {
  wildcard_array[index] = parseInt(value, 10);
});

// this does the opposite as network_address.
// this uses the OR bitwise operator '|'.
const broadcast_address = (wildcard_array, network_array) => {
  const broadcast_address_array = new Array();
  for (let index = 0; index < wildcard_array.length; index++) {
    const wildcard_octet = wildcard_array[index];
    const network_octet = network_array[index];
    const broadcast_address_octet = network_octet | wildcard_octet;
    broadcast_address_array[index] = broadcast_address_octet.toString(10);
  }
  return broadcast_address_array.join('.');
};
const broadcast = broadcast_address(wildcard_array, network_array);
console.log(`Broadcast Address: ${broadcast}`);

const broadcast_array = broadcast.split('.');
broadcast_array.forEach((value, index) => {
  broadcast_array[index] = parseInt(value, 10);
});

// address range
const address_range = (network_array, broadcast_array) => {
  const start_address_array = network_array;
  start_address_array[3] += 1;
  const end_address_array = broadcast_array;
  end_address_array[3] -= 1;
  start_address = start_address_array.join('.');
  end_address = end_address_array.join('.');
  return `${start_address} - ${end_address}`;
};
const range = address_range(network_array, broadcast_array);
console.log(`CIDR Range: ${range}`);

// Max Addresses (Hosts)
const max_addresses = (bitMask) => {
  const bits = 32 - bitMask;
  return Math.pow(2, bits) - 2;
};
const max = max_addresses(bitMask);
console.log(`Max Addresses: ${max}`);
/**
 * Outputs:
 * Network Address X
 * Wildcard Mask X
 * Broadcast Address X
 * Address Range X
 * Total Number of hosts supported
 * Total number of subnets supported
 * Is this IP inside an RFC or is it public
 * If the IP is public, who owns this ip, give me a link
 */

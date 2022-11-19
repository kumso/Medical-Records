// I'm a comment!
// SPDX-License-Identifier: MIT

pragma solidity 0.8.8;

// pragma solidity ^0.8.0;
// pragma solidity >=0.8.0 <0.9.0;

contract SimpleStorage {
//   uint256 favoriteNumber;

  struct People {
    string medlic;
    string disease;
    string cure;
  }

  // // uint256[] public anArray;
  // People[] public people;

  mapping(address => People[]) public addressToObj;

  // function store(uint256 _favoriteNumber) public {
  //   favoriteNumber = _favoriteNumber;
  // }

  function add
  Person(string memory _medlic, string memory _disease, string memory _cure, address _patientaddress) public {
    addressToObj[_patientaddress].push(People(_medlic, _disease, _cure));
  }

  function retrieve(address _patientaddress) public view returns (People[] memory) {
    return addressToObj[_patientaddress];
  }
}

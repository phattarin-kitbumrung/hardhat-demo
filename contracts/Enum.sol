// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Enum {
    string public name; 
    enum Status {
        Pending,  
        Shipped,
        Accepted,
        Rejected,
        Canceled
    }
    Status public status;
    // Returns uint
    // Pending  - 0
    // Shipped  - 1
    // Accepted - 2
    // Rejected - 3
    // Canceled - 4

    constructor(Status _status, string memory _name) {
        status = _status;
        name = _name;
    }

    function get() public view returns (Status, string memory) {
        return (status, name);
    }

    function set(Status _status, string memory _name) public {
        status = _status;
        name = _name;
    }

    // delete resets the enum to its first value, 0
    function reset(string memory _name) public {
        delete status;
        name = _name;
    }
}

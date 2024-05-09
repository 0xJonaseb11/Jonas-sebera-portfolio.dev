// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Welcome {

    string public message = "You are highly welcome to my portfolio website";

    // set greeting
    function setGreeting (string memory newMessage) public {
        message = newMessage;

    }

    function getMessage() public view returns(string memory) {
        return message;
    }
}
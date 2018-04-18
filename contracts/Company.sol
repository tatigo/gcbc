pragma solidity ^0.4.18;

contract Company {

    enum RegistrationStatus {Undefined, Registered, Approved, Expired} 
    
    address public owner; //owner account address (20 bytes)
    string private number;
    string private name;
    uint private dateRegistered; //unix time
    string private articlesOfIncorporation; // the actual record data should be part of IPFS
    RegistrationStatus private registrationStatus;

    mapping (address => mapping(address => bool)) proxies; // A list of proxies that can read the record.
    
    event Registered(address _owner, string number);

    function Company() public {
        owner = msg.sender; // msg.sender is contract caller (address of contract creator)
    }

    function Register() public{
        registrationStatus = RegistrationStatus.Registered;
        emit Registered(owner,number);
    }
   
    function getArticlesOfIncorporation() public constant returns (string) {
        return articlesOfIncorporation;
    }

    function setArticlesOfIncorporation(string _recordString) public returns (bool) {
        articlesOfIncorporation = _recordString;
        return true;
    }
}
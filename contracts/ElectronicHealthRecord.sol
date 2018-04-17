pragma solidity ^0.4.18;

contract ElectronicHealthRecord {
    address owner; // The person the record is about.
    mapping (address => mapping(address => bool)) proxies; // A list of proxies that can read the record.

    string recordString; // the actual record data
    
    function ElectronicHealthRecord() public {
        owner = msg.sender; // assign ownership to the person who deployed the contract
        recordString = ""; // set the string to empty
    }

    modifier onlyOwnerOrProxy {
        if (msg.sender != owner && !proxies[owner][msg.sender]) return;
        _;
    }

    modifier recordIsEmpty {
        if (bytes(recordString).length > 0) return;
        _;
    }

    function getRecord() public view onlyOwnerOrProxy returns (string) {
        return recordString;
    }

    function setRecord(string _recordString) public onlyOwnerOrProxy returns (bool) {
        recordString = _recordString;
        return true;
    }

    event AddProxy(address _from, address _proxyAddress);
    function addProxy(address _proxyAddress) public onlyOwnerOrProxy returns (bool) {
        proxies[owner][_proxyAddress] = true;
        emit AddProxy(owner, _proxyAddress);
        return true;
    }
}

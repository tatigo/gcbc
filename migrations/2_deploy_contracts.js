var ElectronicHealthRecord = artifacts.require("./ElectronicHealthRecord.sol");

module.exports = function(deployer) {
  deployer.deploy(ElectronicHealthRecord);
};

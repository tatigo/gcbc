var Company = artifacts.require('./Company.sol');

module.exports = function(deployer, network, accounts) {
    deployer.deploy(Company);
};
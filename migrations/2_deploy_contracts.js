var Company = artifacts.require("./Company.sol");

module.exports = function(deployer, network, accounts) {
  //deployer.deploy(Company);
  deployer.deploy(Company, "PizzaPizza", "863049020", null,{gas: 4612388, from: accounts[0]});
};

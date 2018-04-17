const express = require('express');
const apiRouter = express.Router();

const ehr = require('../../build/contracts/ElectronicHealthRecord.json');

var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

var accounts = [];
web3.eth.getAccounts().then(result => { accounts = result; web3.eth.defaultAccount = accounts[0]; });

const getRecord = (req, res) => {
  
  const abi = ehr.abi;

  var eHealthRecord = new web3.eth.Contract(abi, req.params.recordKey);

  eHealthRecord.methods.getRecord().call().then(
    function(resp) {
        res.send(resp);
    }
  ).catch(function(err) { res.send("One sec..."); console.log(err); });

}
apiRouter.get("/record/:recordKey", getRecord);

module.exports = apiRouter;

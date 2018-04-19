const express = require('express');
const apiRouter = express.Router();

var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
web3.eth.defaultAccount = web3.eth.accounts[0];

const getLocations = (req, res) => {
  res.send(["hello!", "how doing?"]);
}

apiRouter.get('/locations', getLocations);

apiRouter.get('/character/:charKey', (req, res) => {
  //var abi = import CharacterMeta from '';
  const abi = require('./meta/CharacterMeta');
  console.log(abi);
  
  var character = new web3.eth.Contract(abi, req.params.charKey);

  character.methods.getData().call().then(
      function(resp) {
          res.send(resp);
      }
  ).catch(function(err) { console.log(err); });
  
});

apiRouter.get('/signUp/', (req,res)=> {

  // update a paratemer in the contract. 
    var contractInstance;
    contractAbi = require('');
    newContract = web3.eth.contract(contractAbi);
  
    contractCompiled = "0x" + "";
  
    _contract = newContract.new(/*name, number,*/ {from:eth.accounts[0], data:contractCompiled, gas:3000000}, function(e, contract){
     
      if(e) {
        console.error(e); // If something goes wrong, at least we'll know.
        return;
      }
  
      if(!contract.address) {
        console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
  
      } else {
        console.log("Contract mined! Address: " + contract.address);
        console.log(contract);
      }
    });
  
  });

module.exports = apiRouter;

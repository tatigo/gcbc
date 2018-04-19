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
    var contractCompiled = require('../../../build/contracts/Company.json');
    var contractAbi = contractCompiled.abi;
    var newContract = new web3.eth.Contract(contractAbi);
  
    var contractCode = contractCompiled.bytecode;
    console.log(contractCode);
 
    var myContract = new web3.eth.Contract(contractAbi,{from:web3.eth.accounts[0], data:contractCode, gas:3000000});
    
    var defaultAccount = web3.eth.accounts[0]; // THIS IS NOT WORKING FOR SOME REASON
    console.log("WEB3 ACCOUNT LIST: " + defaultAccount);

    myContract.deploy({
      arguments: []
    })
    .send({
        from: '0x913199e0522ed92ef8769f8bec27c00105fb65f6', // THIS WAS TAKEN FROM GANACHE CLI
        gas: 1500000,
        gasPrice: '0'
    }, function(error, transactionHash){ console.log("TX Hash:" + transactionHash) })
    // .on('error', function(error){ console.log(error) })
    // .on('transactionHash', function(transactionHash){ console.log(transactionHash) })
    // .on('receipt', function(receipt){
    //    console.log(receipt.contractAddress) // contains the new contract address
    // })
    //.on('confirmation', function(confirmationNumber, receipt){ console.log(confirmationNumber) })
    .then(function(newContractInstance){
        console.log("CONTRACT ADDRESS: " + newContractInstance.options.address) // instance with the new contract address
    });


  });

  apiRouter.get('/update/:contractAddress/:name', (req,res)=> {
    
    var contractCompiled = require('../../../build/contracts/Company.json');
    var contractAbi = contractCompiled.abi;
    
    var _contractInstance = new web3.eth.Contract(contractAbi,req.params.contractAddress);
    //var myContract = _contractInstance.at(req.params.contractAddress);

    _contractInstance.methods.setName(req.params.name).send({from:'0x913199e0522ed92ef8769f8bec27c00105fb65f6'})
    .then(function(receipt) {
      
      console.log("TX Hash: "+ receipt.transactionHash);   
    });



  });

  apiRouter.get('/viewResults/:contractAddress', (req,res)=> {


    var contractCompiled = require('../../../build/contracts/Company.json');
    var contractAbi = contractCompiled.abi;
    
    var _contractInstance = new web3.eth.Contract(contractAbi,req.params.contractAddress);
    //var myContract = _contractInstance.at(req.params.contractAddress);

    _contractInstance.methods.getName().call().then(function(v) {
      var strName= v.toString();
      console.log("Name: "+ strName);   
    });


  });





module.exports = apiRouter;

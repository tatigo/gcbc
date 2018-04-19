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

module.exports = apiRouter;

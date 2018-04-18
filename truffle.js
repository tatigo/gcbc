module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    remote:{
      host: "52.179.4.144",
      port: 22000,
      network_id: '*'
      //,from:'0x82300f77f7f8a925f3156294b2cad52506cca52c' //default account is [0] if not specified
      ,gasprice:0
      ,gas:450000
    },
    remotetg:{
      host: "ethrus-dns-reg1.eastus.cloudapp.azure.com",
      port: 8545,
      network_id: '*',
      gas:500000
      //,from:'0x82300f77f7f8a925f3156294b2cad52506cca52c' //default account is [0] if not specified
    }
  }
};

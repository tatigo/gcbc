module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    remote:{
      host: "52.170.24.21",
      port: 22,
      network_id: '*'
      //,from:'0x82300f77f7f8a925f3156294b2cad52506cca52c' //default account is [0] if not specified
      //,gas:4712387
    }
  }
};

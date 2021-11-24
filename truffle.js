const { HOST, PORT } = require("./config");
const { adminProvider } = require("./utils/web3");

module.exports = {
  migrations_directory: "./migrations",
  networks: {
    ganache: {
      host: HOST,
      port: PORT,
      network_id: "*"
      // gas: 8003877,
      // gasPrice: 2300000000
    },
    rinkeby: {
      provider: () => adminProvider,
      network_id: 4
    }
  },
  solc: {
    version: '0.4.24',
    optimizer: {
      enabled: true,
      runs: 500
    }
  },
  mocha: {
    useColors: true
  } 
};

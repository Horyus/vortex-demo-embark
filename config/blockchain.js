module.exports = {
  development: {
    enabled: true,
    networkType: "custom", // Can be: testnet, rinkeby, livenet or custom, in which case, it will use the specified networkId
    networkId: "1337", // Network id used when networkType is custom
    isDev: true, // Uses and ephemeral proof-of-authority network with a pre-funded developer account, mining enabled
    genesisBlock: "config/development/genesis.json", // Genesis block to initiate on first creation of a development node
    datadir: ".embark/development/datadir", // Data directory for the databases and keystore
    mineWhenNeeded: true, // Uses our custom script (if isDev is false) to mine only when needed
    nodiscover: true, // Disables the peer discovery mechanism (manual peer addition)
    maxpeers: 0, // Maximum number of network peers (network disabled if set to 0) (default: 25)
    rpcHost: "localhost", // HTTP-RPC server listening interface (default: "localhost")
    rpcPort: 8545, // HTTP-RPC server listening port (default: 8545)
    rpcCorsDomain: "auto",  // Comma separated list of domains from which to accept cross origin requests (browser enforced)
                            // When set to "auto", Embark will automatically set the cors to the address of the webserver
    proxy: true, // Proxy is used to present meaningful information about transactions
    accounts: [
      {
        nodeAccounts: {
          password: "config/development/password" // Password to unlock the account
        }
      },
      {
        mnemonic: "cross uniform panic climb universe awful surprise list dutch ability label cat"
      }
    ],
    targetGasLimit: 8000000, // Target gas limit sets the artificial target gas floor for the blocks to mine
    wsRPC: true, // Enable the WS-RPC server
    wsOrigins: "auto",  // Origins from which to accept websockets requests
                        // When set to "auto", Embark will automatically set the cors to the address of the webserver
    wsHost: "localhost", // WS-RPC server listening interface (default: "localhost")
    wsPort: 8546, // WS-RPC server listening port (default: 8546)
    simulatorBlocktime: 5 // Specify blockTime in seconds for automatic mining. Default is 0 and no auto-mining.
  },
  testnet: {
    enabled: true,
    networkType: "testnet",
    light: true,
    rpcHost: "localhost",
    rpcPort: 8545,
    rpcCorsDomain: "http://localhost:8000",
    accounts: [
      {
        nodeAccounts: {
          password: "config/testnet/password" // Password to unlock the account
        }
      }
    ]
  },
  livenet: {
    enabled: true,
    networkType: "livenet",
    light: true,
    rpcHost: "localhost",
    rpcPort: 8545,
    rpcCorsDomain: "http://localhost:8000",
    accounts: [
      {
        nodeAccounts: {
          password: "config/livenet/password" // Password to unlock the account
        }
      }
    ]
  },
  privatenet: {
    enabled: true,
    networkType: "custom",
    rpcHost: "localhost",
    rpcPort: 8545,
    rpcCorsDomain: "http://localhost:8000",
    datadir: "yourdatadir",
    networkId: "123",
    bootnodes: ""
  }
};

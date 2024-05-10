// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
// require("@nomicfoundation/hardhat-verify");


const dotenv = require("dotenv");
dotenv.config();

/*
 * This file contains both test and production configuration approaches.
 * testnets
 * mainnets
 */

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.19",
    // defaultNetwork: sepolia,
  },
  networks: {
    hardhat: {},
    // mumbai: {
    //   url: process.env.POLYGON_MUMBAI,
    //   accounts: [process.env.PRIVATE_KEY],
    //   chainId: 421614,
    // },
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      chainId: 11155111,
    },
    /*
    arbitrum_sepolia: {
      url: process.env.ARBITRUM_SEPOLIA,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      chainId: 421614,
    },
    */

    /** Main networks
    mainnet: {
      url: process.env.MAINNET,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      chainId: 1,
    },
    polygon: {
      url: process.env.POLYGON,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      chainId: 137,
    },
    optimism: {
      url: process.env.OPTIMISM,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      chainId: "",
    },
    arbitrum_one: {
      url: process.env.ARBITRUM_ONE,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      chainId: 42161,
    },
    */
  },
  etherscan: {
    apiKey: process.env.POLYGON_API_KEY,

  },

  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};

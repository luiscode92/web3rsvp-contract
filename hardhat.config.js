require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 3337,
    },
    mumbai: {
      url: process.env.STAGING_INFURA_URL,
      accounts: [`0x${process.env.STAGING_PRIVATE_KEY}`],
      gas: 2100000,
      gasPrice: 8000000000,
    },
  },
};

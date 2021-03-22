const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const networkProvider = require('./config/networkProvider.json');
const mnemonic = require('./config/mnemonic.json');

// source: https://www.npmjs.com/package/@truffle/hdwallet-provider
const hdWalletProvider = new HDWalletProvider({
  mnemonic: "arch rabbit daughter illness view pretty fine sponsor candy beauty lunar brisk",
  providerOrUrl: "https://ropsten.infura.io/v3/9f65f2e7dc324b6fba99c874cecfbadd"
});

module.exports = new Web3(hdWalletProvider);
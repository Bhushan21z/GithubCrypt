// https://eth-goerli.g.alchemy.com/v2/Ahx-Xya2uo4ZlS21ICAAM7nQ33a9vMot

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    Goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/0D2XnR45R9ZYgX1oLccGf8qlCT3k7gkz',
      accounts: ['6233a2d6e2bdbe2a0eb3716022abe9e03dc61c08d7d4792eb495a12aad92b6b7'],
    },
  },
};
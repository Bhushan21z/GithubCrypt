// https://eth-goerli.g.alchemy.com/v2/Ahx-Xya2uo4ZlS21ICAAM7nQ33a9vMot

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    polygonmumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/7t_t8wb44xg5RY71guy9O0pUgFz0YK47',
      accounts: ['d0dfa7a0014eba93f10e2a20bcba6bbdbbf2dc576f1b6c21afd16695f415bc33'],
    },
  },
};